import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";

const FeedCardTextArea = () => {
    return (
        <div className='text-xs'>
                <div className='flex justify-between items-center p-1 px-2'>
                    {true ? <FaHeart className='text-red-600' /> : <FaRegHeart />}
                    {true ? <FaBookmark /> : <FaRegBookmark />}
                </div>
                <p className='font-bold pb-1 px-2'>{1} like</p>
                <div className='pb-1 px-2'>
                    <span className='font-bold pr-1'>{'아이디'}</span>
                    <p className='inline'>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
                </div>
                <p className='font-bold text-cyan-700 pb-2 px-2'>View all 3 comments</p>
                {/* 모달 열림 */}
                <p className='text-gray-500 pb-1 px-2'>시간</p>
                <div className='border-t flex items-center justify-between p-1'>
                    <FaRegFaceSmile className='w-[5%]' />
                    <input type="text" placeholder='Add a comment...' className='w-[75%]' />
                    <button className={
                        `w-[15%] bg-gray-100 text-cyan-500 p-1 rounded-sm ${true ? 'opacity-50' : ''}`
                        }>Post</button>
                </div>
            </div>
    );
};

export default FeedCardTextArea;