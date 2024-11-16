import { createClient } from '@/utils/supabase/server'

export async function GET(req) {
    const supabase = await createClient();
    var { data, error } = await supabase
        .from('QuotesLeaderboard')
        .select()
    // console.log("GET DTA:", data);
    // console.log("GET ERR:", error);
    return Response.json({ "data": data }, {
        status: 200
    });
}

