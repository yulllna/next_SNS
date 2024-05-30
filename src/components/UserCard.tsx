import { SearchUser } from '@/model/user';
import React from 'react';
import Link from 'next/link';
import Profile from './Profile';

type Props = {
    user: SearchUser;
}

const UserCard = ({user: {name, username, image, following, followers}}: Props) => {
    // 여기에서 카드를 클릭했을 때 routing에 대해 1. 이벤트 핸들러로 경로를 push 해주는 방식 2.Link태그를 이용해 만드는 방식이 있음.
    // Link태그 이용 시 이점은 Link태그가 사용자 브라우저에 보여지면 넥스트에서 해당 페이지를 pre fetching을 해준다.

    return (
        <Link href={`/user/${username}`} className='flex items-center w-full rounded-sm border border-neutral-300 mb-2 bg-white hover:bg-neutral-50 p-2'>
            <Profile image={image}/>
            <div className='text-neutral-500 ml-2'>
                <p className='text-black font-bold leading-4'>{username}</p>
                <p>{name}</p>
                <p className='text-sm leading-4'>{`${followers} followers ${following} following`}</p>
            </div>
        </Link>
    );
};

export default UserCard;