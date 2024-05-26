import React from 'react';
import { User } from '@/model/user'
import Profile from './Profile';

type Props = {
    user: User;
}

const Sidebar = ({user: {name, username, image}}: Props) => {
    return (
        <>
            <div className='flex items-center'>
                {image && <Profile size='large' image={image} />}
                <div className='ml-4'>
                    <p className='font-bold'>{username}</p>
                    <p className='text-lg text-neutral-500 leading-4'>{name}</p>
                </div>
            </div>
            <p className='text-sm text-neutral-500 mt-8'>
                About ﹒ Help ﹒ Press ﹒ API ﹒ Jobs ﹒ Privacy ﹒ Terms ﹒ Location ﹒ Language
            </p>
            <p className='font-bold text-sm mt-8 text-neutral-500'>
                @CopyRight INSTANTGRAM from METAL
            </p>
        </>
    );
};

export default Sidebar;