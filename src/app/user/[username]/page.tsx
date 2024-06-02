import UserPost from '@/components/UserPost';
import UserProfile from '@/components/UserProfile';
import { getUserForProfile } from '@/service/user';
import { notFound } from 'next/navigation';
import React, { cache } from 'react';
import { Metadata } from "next";

type Props = {
    params: {
        username: string;
    }
}

// 유저네임을 전달하면 getUserProgile 함수를 호출 후 캐시. 전달하는 데이터가 변경되지 않으면 동일한 사용자에 한해서 캐시된 결과를 사용하도록 설정
const getUser = cache(async (username: string) => getUserForProfile(username));

const UserPage = async ({params: {username}}:Props) => {
    // 사용자의 프로필 이미지와 정보(username, name, 숫자)
    // 하단: 3개의 탭(post, likes, bookmarks)
    const user = await getUser(username);

    if(!user) {
        notFound()
    }

    return (
        <section className='w-full'>
            <UserProfile user={user} />
            <UserPost user={user} />
        </section>
    );
};

export async function generateMetadata({params: {username}}:Props): Promise<Metadata> {
    const user = await getUser(username);
    return {
        title: `${user?.name} (@${user?.username}) ﹒ Instantgram Photos`,
        description: `${user?.name}'s all Instantgram posts`,
    }
}

export default UserPage;