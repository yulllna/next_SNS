import { NextResponse } from 'next/server';
import { searchUsers } from "@/service/user";

export const dynamic = 'force-dynamic';
// get에 별도로 리퀘스트를 전달받지 않고, 항상 동일한 함수를 호출 함으로 이렇게 정적인 코드는 무조건 SSG로 동작한다.
// 그렇기에 다이내믹 속성을 지정해야 SSR처럼 동작한다.

export async function GET() {
    // 로그인 여부가 필요 없기 때문에 session 정보는 필요하지 않음
    return searchUsers().then(data => NextResponse.json(data));
}