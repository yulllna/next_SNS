import React from 'react';
import Profile from './Profile'

const ProfileList = () => {
    return (
        <div className='flex gap-3 p-4 shadow-sm mt-2 rounded-md'>
            <Profile userName={'aa'} />
            <Profile userName={'aa'} />
            <Profile userName={'aa'} />
            <Profile userName={'aa'} />
        </div>
    );
};

export default ProfileList;