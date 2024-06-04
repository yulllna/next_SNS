import React from 'react';
import { FaRegFaceSmile } from "react-icons/fa6";
import { FormEvent, useState } from 'react';

type Props = {
    onPostComment: (comment: string) => void;
}

const CommentForm = ({onPostComment}: Props) => {
    const [comment, setComment] = useState('');
    const buttonDisabled = comment.length === 0;
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onPostComment(comment);
        setComment('');
    }
    return (
        <form className='border-t flex items-center justify-between p-1' onSubmit={handleSubmit}>
            <FaRegFaceSmile className='w-[5%]' />
            <input 
                type="text" 
                placeholder='Add a comment...' className='w-[75%] border-none outline-none'
                required
                value={comment}
                onChange={e => setComment(e.target.value)} />
            <button 
                className={
                `w-[15%] bg-gray-100 p-1 rounded-sm font-bold ${buttonDisabled ? 'text-sky-300' : 'text-sky-500'}`}
                disabled={buttonDisabled}>Post</button>
        </form>
    );
};

export default CommentForm;