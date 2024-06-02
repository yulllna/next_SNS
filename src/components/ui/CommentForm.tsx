import React from 'react';
import { FaRegFaceSmile } from "react-icons/fa6";

const CommentForm = () => {
    return (
        <form className='border-t flex items-center justify-between p-1'>
            <FaRegFaceSmile className='w-[5%]' />
            <input type="text" placeholder='Add a comment...' className='w-[75%] border-none outline-none' />
            <button className={
                `w-[15%] bg-gray-100 text-cyan-500 p-1 rounded-sm ${true ? 'opacity-50' : ''}`
                }>Post</button>
        </form>
    );
};

export default CommentForm;