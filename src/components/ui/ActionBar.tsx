import React from 'react';
import { parseDate } from '@/utils/date';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

type Props = {
    createdAt: string;
    likes: string[];
    text: string;
    username: string;
}

const ActionBar = ({createdAt, likes, text, username}: Props) => {
    
    return (
        <div className='text-xs'>
                <div className='flex justify-between items-center p-1 px-2'>
                    {true ? <FaHeart className='text-red-600' /> : <FaRegHeart />}
                    {true ? <FaBookmark /> : <FaRegBookmark />}
                </div>
                <p className='font-bold pb-1 px-2'>{`${likes?.length ?? 0} ${likes?.length > 1 ? 'likes' : 'like'}`}</p>
                <div className='pb-1 px-2'>
                    <span className='font-bold pr-1'>{username}</span>
                    <p className='inline'>{text}</p>
                </div>
                <p className='font-bold text-cyan-700 pb-2 px-2'>View all 3 comments</p>
                {/* 모달 열림 */}
                <p className='text-gray-500 pb-1 px-2'>{parseDate(createdAt)}</p>
            </div>
    );
};

export default ActionBar;