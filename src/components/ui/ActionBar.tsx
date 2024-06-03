import React, { useState } from 'react';
import { parseDate } from '@/utils/date';
import ToggleButton from './toggleButton';
import HeartFillIcon from './icons/HeartFillIcon';
import HeartIcon from './icons/HeartIcon';
import BookmarkFillIcon from './icons/BookmarkFillIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import { SimplePost } from '@/model/post';
import { useSession } from 'next-auth/react';
import usePosts from '@/hooks/posts';

type Props = {
    post: SimplePost;
}

const ActionBar = ({post}: Props) => {
    const { id, createdAt, likes, text, username } = post;
    const { data: session } = useSession();
    const user = session?.user;
    // 외부에서 전달해주는 데이터가 변경될때마다 체크
    const liked = user ? likes.includes(user.username) : false;
    const [bookmarked, setBookmarked] = useState(false);

    // const { mutate } = useSWRConfig();
    const { setLike } = usePosts();
    const handleLike = (like: boolean) => {
        if(user) {
            setLike(post, user.username, like);
        }
    }
    
    return (
        <div className='text-xs'>
                <div className='flex justify-between items-center p-1 px-2'>
                    <ToggleButton 
                        toggled={liked} 
                        onToggle={handleLike} 
                        onIcon={<HeartFillIcon />} 
                        offIcon={<HeartIcon />} 
                    />
                    <ToggleButton 
                        toggled={bookmarked} 
                        onToggle={setBookmarked} 
                        onIcon={<BookmarkFillIcon />} 
                        offIcon={<BookmarkIcon />} 
                    />
                </div>
                <p className='font-bold pb-1 px-2'>{`${likes?.length ?? 0} ${likes?.length > 1 ? 'likes' : 'like'}`}</p>
                <div className='pb-1 px-2'>
                    <span className='font-bold pr-1'>{username}</span>
                    {
                        text && <p className='inline'>{text}</p>
                    } 
                </div>
                <p className='font-bold text-cyan-700 pb-2 px-2'>View all 3 comments</p>
                {/* 모달 열림 */}
                <p className='text-gray-500 pb-1 px-2'>{parseDate(createdAt)}</p>
            </div>
    );
};

export default ActionBar;