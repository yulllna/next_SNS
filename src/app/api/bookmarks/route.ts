import { NextRequest, NextResponse } from 'next/server';
import { addBookmark, removeBookmark } from '@/service/user';
import { withSessionUser } from '@/utils/session';

export async function PUT(req: NextRequest) {
    // callback 함수
    return withSessionUser(async (user) => {
        const { id, bookmark } = await req.json();

        // bookmark는 boolean이기 때문에 타입체크 시 !를 사용하지 않음
        // null과 undefined를 함께 거르고 싶으면 value == null로 사용
        if(!id || bookmark == null) {
            return new Response('Bad Request', {status: 400});
        }

        const request = bookmark ? addBookmark : removeBookmark;

        return request(user.id, id)
        .then(res => NextResponse.json(res))
        .catch(error => new Response(JSON.stringify(error), {status: 500}))
    })
}