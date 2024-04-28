import React from 'react';
import Profile from './Profile';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";

const FeedCard = () => {
    return (
        <div className='px-2 pt-2 shadow-md mt-2 rounded-md '>
            <div className='flex gap-2 items-center'>
                <Profile />
                <span className='font-bold text-xs'>yuri.na</span>
            </div>
            <div>
                이미지들
            </div>
            <div className='text-xs'>
                <div className='flex justify-between items-center p-1'>
                    {true ? <FaHeart className='text-red-600' /> : <FaRegHeart />}
                    {true ? <FaBookmark /> : <FaRegBookmark />}
                </div>
                <p className='font-bold pb-1'>{1} like</p>
                <div className='pb-1'>
                    <span className='font-bold pr-1'>{'아이디'}</span>
                    <p className='inline'>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
                </div>
                <p className='font-bold text-cyan-700 pb-2'>View all 3 comments</p>
                {/* 모달 열림 */}
                <p className='text-gray-500 pb-1'>시간</p>
                <div className='border-t flex items-center justify-between p-1'>
                    <FaRegFaceSmile className='w-[5%]' />
                    <input type="text" placeholder='Add a comment...' className='w-[75%]' />
                    <button className={
                        `w-[15%] bg-gray-100 text-cyan-500 p-1 rounded-sm ${true ? 'opacity-50' : ''}`
                        }>Post</button>
                </div>
            </div>
        </div>
    );
};

export default FeedCard;