import dynamic from 'next/dynamic';
import React from 'react';

// lazy하게 동적으로 적용
const MoonLoader = dynamic(
    () => import('react-spinners').then(lib => lib.MoonLoader),
    {
        ssr: false,
    }
)

type Props = {
    color?: string;
    size?: number;
}

const GridSpinner = ({color = 'red', size = 50}: Props) => {
    return (
        <MoonLoader color={color} size={size} />
    );
};

export default GridSpinner;