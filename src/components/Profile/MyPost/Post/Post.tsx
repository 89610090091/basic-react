import React from 'react';
import s from './Post.module.css';

const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLaPPl5uEJ0T-nQwq1TdGl1P9xDp5fRMKYtzIw0LR7UE1qUB3wO7coVRoytPbAyJifpC0&usqp=CAU" alt="" />
            <div>
                post
            </div>
            <span>{props.message}</span>
        </div>
    )
};

export default Post;