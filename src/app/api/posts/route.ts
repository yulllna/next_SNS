import { NextResponse } from "next/server"
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/lib/auth'
import { getFollowingPostsOf } from "@/service/post";

export async function GET() {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    if(!user) {
        return new Response('Authentication error', {status: 401});
    }
    console.log('!!!')
    console.log(user)
    return getFollowingPostsOf(user.username) //
    .then((data) => NextResponse.json(data));
}