import { getLikedPostsOf, getPostsOf, getSavedPostsOf } from '@/service/post';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

type Context = {
    params: {
        slug: string[]; // slug/slug/slug 중첩된 라우트
    }
}
export async function GET(_: NextRequest, context: Context) {
    const {slug} = context.params;

    if(!slug || !Array.isArray(slug) || slug.length < 2) {
        return new NextResponse('Bad Request', {status: 400});
    }

    const [username, query] = slug;

    let request = getPostsOf;
    if(query === 'saved') {
        request = getSavedPostsOf;
    } else if(query === 'liked') {
        request = getLikedPostsOf;
    }

    return request(username)
    .then(data => NextResponse.json(data));
}
