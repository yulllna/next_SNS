import React from 'react';
import Profile from './Profile';
import CustomCarousel from './CustomCarousel'
import FeedCardTextArea from './FeedCardTextArea';

const FeedCard = () => {
    return (
        <div className='pt-2 shadow-md mt-2 rounded-md'>
            <div className='flex gap-2 items-center pb-2 px-2'>
                <Profile />
                <span className='font-bold text-xs'>yuri.na</span>
            </div>
            <div>
                <CustomCarousel>
                    {
                        <img
                            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            className='aspect-square h-full w-full'
                        />
                    }    
                </CustomCarousel>
            </div>
            <FeedCardTextArea />
        </div>
    );
};

export default FeedCard;