import FeedCard from '@/components/FeedCard';
import React from 'react';
import ProfileList from '../../components/ProfileList';

const MainPage = () => {
    return (
        <>
            <div className='w-1/2 mx-auto'>
                <ProfileList />
            </div>
            <div className='w-1/2 mx-auto'>
                <FeedCard />
                <FeedCard />
            </div>
        </>
    );
};

export default MainPage;