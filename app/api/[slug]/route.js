// import { createClient } from '@/utils/supabase/server'

// /**
//  * Adds an anime obejct into the supabase database
//  * @param {Object} req Must have name, airing_date, is_priority, anime_cover, and anime_link. Can contain current_episode
//  * @returns 
//  */
// export async function POST(req, {params}) {
//     const user_name = (await params).slug;
//     // Posts a new Highscore for a person
//     const request_data = await req.json();
//     const supabase = await createClient();

//     if (!valid_name({user_name: user_name})) {
//         return Response.json({ "data": {"valid": 0} }, {
//             status: 200
//         });
//     }
//     const { data, error } = await supabase
//         .from('QuotesLeaderboard')
//         .upsert({"user_name": user_name, "total_high_score": request_data?.high_score }, { onConflict: 'user_name' })
//     // console.log("INS DTA:", data);
//     // console.log("INS ERR:", error);
//     return Response.json({ "data": {"valid": 1} }, {
//         status: 200
//     });
// }

// const valid_name = ({user_name}) => {
//     console.log("WEBN:", user_name);
//     const bad_words = ["porn", "sex", "nude", "naked", "hentai", "boob", "nsfw", "ass", "tit", "cock", "penis", "fuck", "shit", "bitch", "nigg",
//         "raci", "poop"
//     ];
//     for (var i=0; i<bad_words.length; i++) {
//         if (user_name.includes(bad_words[i])) {
//             return false
//         }
//     }
//     return true
// }

// export async function GET(req, {params}) {
    // const user_name = (await params).slug;
    // if (user_name == "TEST123") {
    //     return Response.json({ "data": [{total_high_score: 0}] }, {
    //         status: 200
    //     });
    // }
    // const supabase = await createClient();
    // var { data, error } = await supabase
    //     .from('QuotesLeaderboard')
    //     .select()
    //     .eq('user_name', user_name)
    // console.log("GET DTA:", data);
    // console.log("GET ERR:", error);
    // return Response.json({ "data": data }, {
    //     status: 200
    // });
// }

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import crypto from 'crypto'

function generateGameSession() {
    return crypto.randomBytes(32).toString('hex')
}

// Start a new game session
export async function GET(req, { params }) {
    const user_name = (await params).slug
    const sessionId = generateGameSession()
    const supabase = await createClient()

    // Create new session in database
    var { error } = await supabase
        .from('game_sessions')
        .insert({
            session_id: sessionId,
            user_name: user_name,
            last_score: 0,
            start_time: new Date().toISOString(),
            last_update_time: new Date().toISOString(),
            is_active: true
        })

    if (error) {
        return Response.json({ error: 'Failed to create session' }, { status: 500 })
    }

    // Set session cookie
    const cookieStore = await cookies();
    cookieStore.set('game_session', sessionId, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 3600 // 1 hour
    })

    if (user_name == "TEST123") {
        return Response.json({ "data": [{total_high_score: 0}] }, {
            status: 200
        });
    }
    var { data, error } = await supabase
        .from('QuotesLeaderboard')
        .select()
        .eq('user_name', user_name)
    console.log("GET DTA:", data);
    console.log("GET ERR:", error);
    return Response.json({ "data": data }, {
        status: 200
    });

    // return Response.json({ success: true })
}

// Handle score updates
export async function POST(req, { params }) {
    const user_name = (await params).slug;
    const cookieStore = await cookies();
    const gameSessionId = cookieStore.get('game_session')?.value
    const request_data = await req.json()
    const supabase = await createClient()

    // Validate session exists and is active
    const { data: gameState, error: sessionError } = await supabase
        .from('game_sessions')
        .select('last_score, start_time, last_update_time, is_active')
        .eq('session_id', gameSessionId)
        .eq('user_name', user_name)
        .single()

    if (sessionError || !gameState || !gameState.is_active) {
        return Response.json({ error: 'Invalid game session' }, { status: 401 })
    }

    // Validate the score update
    const validationError = validateScoreUpdate(gameState, request_data.high_score)
    if (validationError) {
        return Response.json({ error: validationError }, { status: 400 })
    }

    // Update game session
    const { error: updateError } = await supabase
        .from('game_sessions')
        .update({
            last_score: request_data.high_score,
            last_update_time: new Date().toISOString()
        })
        .eq('session_id', gameSessionId)

    if (updateError) {
        return Response.json({ error: 'Failed to update session' }, { status: 500 })
    }

    // Update user's high score if necessary
    const { data: userData } = await supabase
        .from('QuotesLeaderboard')
        .select('total_high_score')
        .eq('user_name', user_name)
        .single()

    if (!userData || request_data.high_score > userData.total_high_score) {
        const { error: highScoreError } = await supabase
            .from('QuotesLeaderboard')
            .upsert({
                user_name: user_name,
                total_high_score: request_data.high_score
            }, { onConflict: 'user_name' })

        if (highScoreError) {
            console.log("DID NOT DO THAT:", user_name, "|||", userData, "|||", request_data);
            return Response.json({ error: 'Failed to update high score' }, { status: 500 })
        }
    }

    return Response.json({ data: { valid: 1 } })
}

// Helper function to validate score updates
function validateScoreUpdate(gameState, newScore) {
    const now = new Date().getTime()
    const lastUpdate = new Date(gameState.last_update_time).getTime()
    const sessionStart = new Date(gameState.start_time).getTime()

    // Session expired (1 hour)
    if (now - sessionStart > 3600000) {
        return 'Session expired'
    }

    // Score can only increment by 1
    if (newScore - gameState.last_score > 1) {
        return 'Invalid score increment'
    }

    // Minimum time between updates (500ms)
    if (now - lastUpdate < 300) {
        return 'Too many updates'
    }

    return null
}