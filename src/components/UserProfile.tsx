import { ProfileUser } from '@/model/user';
import React from 'react';
import Profile from '@/components/Profile';
import FollowButton from '@/components/FollowButton';

type Props = {
    user: ProfileUser;
}

const UserProfile = async ({ user }:Props) => {
    const {image, username, name ,followers, following, posts} = user;
    const info = [
        {
            title: 'posts', data: posts
        },
        {
            title: 'followers', data: followers
        },
        {
            title: 'following', data: following
        },
    ]
    return (
        <section>
            <Profile image={image} highlight/>
            <div>
                <h1>{username}</h1>
                <FollowButton user={user} />
                <ul>
                    {info.map(({title, data}, index) => <li key={index}>
                        <span>{data}</span>
                        {title}
                    </li>)}
                </ul>
                <p>{name}</p>
            </div>
        </section>
    );
};

export default UserProfile;