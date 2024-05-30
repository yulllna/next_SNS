import { NextResponse } from 'next/server';
import { searchUsers } from "@/service/user";

export async function GET() {
    // 로그인 여부가 필요 없기 때문에 session 정보는 필요하지 않음
    return searchUsers().then(data => NextResponse.json(data));
}