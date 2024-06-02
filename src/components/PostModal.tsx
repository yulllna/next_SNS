import React from 'react';
import CloseIcon from './ui/icons/CloseIcon';

type Props = {
    children: React.ReactNode;
    onClose: () => void;
}

const PostModal = ({onClose, children}: Props) => {
    return (
        // 바깥영역 클릭 시 닫힘
        <section onClick={(event) => {
            if(event.target === event.currentTarget) {
                onClose();
            }
        }} className='fixed top-0 left-0 w-full h-full bg-neutral-900/70 z-[1001] flex flex-col items-center justify-center '>
            <button className='fixed top-0 right-0 p-8 text-white' onClick={() => onClose()}>
                <CloseIcon />
            </button>
            <div className='bg-white w-4/5 h-3/5 max-w-7xl'>
                {children}
            </div>
        </section>
    );
};

export default PostModal;