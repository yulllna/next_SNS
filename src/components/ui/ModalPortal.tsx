import React from 'react';
import reactDom from 'react-dom';

type Props = {
    children: React.ReactNode;
}

const ModalPortal = ({children}: Props) => {
    // ssr일 때는 처리해주지 않고, 브라우저 환경일 때만 처리할 것임
    if (typeof window === 'undefined') {
        return null;
    }

    const node = document.getElementById('portal') as Element;

    return reactDom.createPortal(children, node);
};

export default ModalPortal;