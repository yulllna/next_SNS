import React from 'react';

type Props = {
    text: string;
    onClick: () => void;
};

const ColorButton = ({text, onClick}: Props) => {
    return (
        <button className='bg-[linear-gradient(
            to right,#833ab4,#fd1d1d,#fcb045
            )] bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-md inline-block p-0.5 hover:opacity-90 transition-opacity' onClick={onClick}
        >
            <div className='bg-white rounded-md'>
                <span className='text-xs px-1'>{text}</span>
            </div>
        </button>
    );
};

export default ColorButton;