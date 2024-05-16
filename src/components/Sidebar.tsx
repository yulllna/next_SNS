import React from 'react';
import { User } from '@/model/user'
import Profile from './Profile';

type Props = {
    user: User;
}

const Sidebar = ({user: {name, userName, image}}: Props) => {
    return (
        <>
            <div className='flex items-center'>
                {image && <Profile image={image} />}
                <p>{userName}</p>
                <p>{name}</p>
            </div>
            <p>
                About ﹒ Help ﹒ Press ﹒ API ﹒ Jobs ﹒ Privacy ﹒ Terms ﹒ Location ﹒ Language
            </p>
            <p>
                @CopyRight INSTANTGRAM from METAL
            </p>
        </>
    );
};

export default Sidebar;