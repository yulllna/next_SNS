import { NextResponse, NextRequest } from 'next/server';
import { searchUsers } from "@/service/user";

type Context = {
    params: {keyword: string};
}

export async function GET(_: NextRequest, context: Context) {
    
    // 로그인 여부가 필요 없기 때문에 session 정보는 필요하지 않음
        return searchUsers(context.params.keyword).then(data => NextResponse.json(data));
    }