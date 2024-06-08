import { NextRequest, NextResponse } from "next/server"
import { getPost } from "@/service/post";
import { withSessionUser } from "@/utils/session";

type Context = {
    params: {id: string};
}

export async function GET(request: NextRequest, context: Context) {
    return withSessionUser(async (user) => {
        return getPost(context.params.id)
        .then((data) => NextResponse.json(data));
    })
}