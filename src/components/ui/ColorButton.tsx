import React from 'react';

type Props = {
    text: string;
    onClick: () => void;
    size?: 'small' | 'big';
};

const ColorButton = ({text, onClick, size = 'small'}: Props) => {
    return (
        <button className={`bg-[linear-gradient(
            to right,#833ab4,#fd1d1d,#fcb045
            )] bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-md inline-block hover:opacity-90 transition-opacity ${size === 'big' ? 'p-[0.3rem]' : 'p-0.5'}`} onClick={onClick}
        >
            <div className={`bg-white rounded ${size === 'big' ? 'p-4' : ''}`}>
                <span className={`${size === 'big' ? 'p-4 text-2xl' : 'text-xs px-1'}`}>{text}</span>
            </div>
        </button>
    );
};

export default ColorButton;