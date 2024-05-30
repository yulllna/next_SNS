import React from 'react';
import Profile from './Profile';

type Props = {
    image: string;
    username: string;
}

const PostUserAvatar = ({image, username}: Props) => {
    return (
        <div className='flex gap-2 items-center pb-2 px-2'>
            <Profile image={image} size='midium' heighlight />
            <span className='font-bold text-xs'>{username}</span>
        </div>
    );
};

export default PostUserAvatar;