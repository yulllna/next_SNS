import React from 'react';
import Profile from './Profile'

const ProfileList = () => {
    return (
        <div className='flex gap-3'>
            <Profile userName={'aa'} />
            <Profile userName={'aa'} />
            <Profile userName={'aa'} />
            <Profile userName={'aa'} />
        </div>
    );
};

export default ProfileList;