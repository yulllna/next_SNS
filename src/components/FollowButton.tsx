'use client';
import { ProfileUser } from '@/model/user';
import Button from '@/components/ui/Button'
import useMe from '@/hooks/me';
import { useRouter } from 'next/navigation';
import { useTransition, useState } from 'react';
import { PulseLoader } from 'react-spinners';

type Props = {
    user: ProfileUser;
}

const FollowButton = ({user}: Props) => {
    const { username } = user;
    const { user: loggedInUser, toggleFollow } = useMe();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false)
    const isUpdating = isPending || isFetching;
;
    const showButton = loggedInUser && loggedInUser.username !== username;
    const following = loggedInUser && loggedInUser.following.find(item => item.username === username);

    const text = following ? 'Unfollow' : 'Follow';

    const handleFollow = async () => {
        setIsFetching(true);
        await toggleFollow(user.id, !following);
        setIsFetching(false)
        startTransition(() => {
            router.refresh();
        })
    }

    return (
        <>
            {showButton && <div className='relative'>
                {
                    isUpdating && <div className='absolute flex justify-center inset-0 items-center z-20'>
                        <PulseLoader size={6} />
                    </div>
                }
                <Button disabled={isUpdating} text={text} onClick={handleFollow} red={text === 'Unfollow'} />
            </div>
            }
        </>
    )
}

export default FollowButton;