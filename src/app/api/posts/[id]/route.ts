import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/lib/auth'
import { getPost } from "@/service/post";

type Context = {
    params: {id: string};
}

export async function GET(request: NextRequest, context: Context) {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    if(!user) {
        return new Response('Authentication error', {status: 401});
    }
    return getPost(context.params.id)
    .then((data) => NextResponse.json(data));
}