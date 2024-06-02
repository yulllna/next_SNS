import React, { useState } from 'react';
import { parseDate } from '@/utils/date';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import ToggleButton from './toggleButton';
import HeartFillIcon from './icons/HeartFillIcon';
import HeartIcon from './icons/HeartIcon';
import BookmarkFillIcon from './icons/BookmarkFillIcon';
import BookmarkIcon from './icons/BookmarkIcon';

type Props = {
    createdAt: string;
    likes: string[];
    text?: string;
    username: string;
}

const ActionBar = ({createdAt, likes, text, username}: Props) => {
    let heartAndBookmarkClass = '';
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    
    return (
        <div className='text-xs'>
                <div className='flex justify-between items-center p-1 px-2'>
                    <ToggleButton 
                        toggled={liked} 
                        onToggle={setLiked} 
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