import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPost/MyPost';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://t4.ftcdn.net/jpg/06/41/10/41/360_F_641104140_lkHlULzw6I1zwaN4I2I3SN3UNHVmawNW.jpg" alt="" />
            </div>
            <div>ava+discription</div>
            <MyPost />
        </div>
    )
};

export default Profile;