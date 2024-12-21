import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.post}>
                <Post message = 'like counter 15'/>
                <Post message = 'like counter 20'/>
            </div>
        </div>
    )
};

export default MyPost;