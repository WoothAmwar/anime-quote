import { createClient } from '@/utils/supabase/server'

/**
 * Adds an anime obejct into the supabase database
 * @param {Object} req Must have name, airing_date, is_priority, anime_cover, and anime_link. Can contain current_episode
 * @returns 
 */
export async function POST(req, {params}) {
    const user_name = (await params).slug;
    // Posts a new Highscore for a person
    const request_data = await req.json();
    const supabase = await createClient();

    if (!valid_name({user_name: user_name})) {
        return Response.json({ "data": {"valid": 0} }, {
            status: 200
        });
    }
    const { data, error } = await supabase
        .from('QuotesLeaderboard')
        .upsert({"user_name": user_name, "total_high_score": request_data?.high_score }, { onConflict: 'user_name' })
    // console.log("INS DTA:", data);
    // console.log("INS ERR:", error);
    return Response.json({ "data": {"valid": 1} }, {
        status: 200
    });
}

const valid_name = ({user_name}) => {
    console.log("WEBN:", user_name);
    const bad_words = ["porn", "sex", "nude", "naked", "hentai", "boob", "nsfw", "ass", "tit", "cock", "penis", "fuck", "shit", "bitch", "nigg",
        "raci", "poop"
    ];
    for (var i=0; i<bad_words.length; i++) {
        if (user_name.includes(bad_words[i])) {
            return false
        }
    }
    return true
}

export async function GET(req, {params}) {
    const user_name = (await params).slug;
    if (user_name == "TEST123") {
        return Response.json({ "data": [{total_high_score: 0}] }, {
            status: 200
        });
    }
    const supabase = await createClient();
    var { data, error } = await supabase
        .from('QuotesLeaderboard')
        .select()
        .eq('user_name', user_name)
    console.log("GET DTA:", data);
    console.log("GET ERR:", error);
    return Response.json({ "data": data }, {
        status: 200
    });
}

