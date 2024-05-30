'use client';
import { ProfileUser, HomeUser } from '@/model/user';
import useSWR from 'swr';
import Button from '@/components/ui/Button'

type Props = {
    user: ProfileUser;
}

const FollowButton = ({user}: Props) => {
    const { username } = user;
    const {data: loggedInUser} = useSWR<HomeUser>('/api/me');

    const showButton = loggedInUser && loggedInUser.username !== username;
    const following = loggedInUser && loggedInUser.following.find(item => item.username === username);

    const text = following ? 'Unfollow' : 'Follow';

    return (
        <>
            {showButton && <Button text={text} onClick={() => {}} red={text === 'Unfollow'} />
            }
        </>
    )
}

export default FollowButton;