'use client';
import { ProfileUser } from '@/model/user';
import React, { useState } from 'react';

import PostIcon from './ui/icons/PostIcon';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import HeartIcon from './ui/icons/HeartIcon';
import PostGrid from './PostGrid';

type Props = {
    user: ProfileUser;
}

const tabs = [
    { type: 'posts', icon: <PostIcon /> },
    { type: 'saved', icon: <BookmarkIcon className='w-3 h-3' /> },
    { type: 'liked', icon: <HeartIcon className='w-3 h-3' /> },
]

const UserPost = ({user: {username}}: Props) => {
    // /api/users/${username}/posts
    // /api/users/${username}/liked
    // /api/users/${username}/bookmarks

    const [query, setQuery] = useState(tabs[0].type);
    // users 뒤에 여러가지 slug를 받아오므로 동적 라우터명을 [slug]로 헤준다.
    
    return (
        <section>
            <ul className='flex justify-center uppercase'>
                {tabs.map(({type, icon}) => (
                    <li className={`mx-12 p-4 cursor-pointer border-black ${type === query && 'font-bold border-t'}`} key={type} onClick={() => setQuery(type)}>
                        <button className='scale-150 md:scale-100'>{icon}</button>
                        <span className='hidden md:inline'>{type}</span>
                    </li>
                    ))
                }
            </ul>
            <PostGrid username={username} query={query}/>
        </section>
    );
};

export default UserPost;