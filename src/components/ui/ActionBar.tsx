import React from 'react';
import { parseDate } from '@/utils/date';
import ToggleButton from './ToggleButton';
import HeartFillIcon from './icons/HeartFillIcon';
import HeartIcon from './icons/HeartIcon';
import BookmarkFillIcon from './icons/BookmarkFillIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import { Comment, SimplePost } from '@/model/post';
import usePosts from '@/hooks/posts';
import useMe from '@/hooks/me';
import CommentForm from './CommentForm';

type Props = {
    post: SimplePost;
    children?: React.ReactNode;
    onComment: (comment: Comment) => void;
}

const ActionBar = ({post, children, onComment}: Props) => {
    const { id, createdAt, likes, username } = post;
    const { user, setBookmark } = useMe();
    const { setLike } = usePosts();

    // 외부에서 전달해주는 데이터가 변경될때마다 체크
    const liked = user ? likes.includes(user.username) : false;
    const bookmarked = user?.bookmarks.includes(id) ?? false;

    // const { mutate } = useSWRConfig();
    const handleLike = (like: boolean) => {
        user && setLike(post, user.username, like);
    }

    const handleBookmark = (bookmark: boolean) => {
        user && setBookmark(id, bookmark);
    }

    const handleComment = (comment: string) => {
        user && onComment({comment, username: user.username, image: user.image})
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
                    onToggle={handleBookmark  } 
                    onIcon={<BookmarkFillIcon />} 
                    offIcon={<BookmarkIcon />} 
                />
            </div>
            <p className='font-bold pb-1 px-2'>{`${likes?.length ?? 0} ${likes?.length > 1 ? 'likes' : 'like'}`}</p>
            {children}
            {/* 모달 열림 */}
            <p className='text-gray-500 pb-1 px-2'>{parseDate(createdAt)}</p>
            <CommentForm onPostComment={handleComment} />
        </div>
    );
};

export default ActionBar;