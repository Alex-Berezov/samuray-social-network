import React from 'react';
import classes from './CreatePost.module.css';

const CreatePost = () => {
    return (
        <form className={classes.create_post}>
            <div className={classes.create_post_header}>
                <h5>Create post</h5>
            </div>
            <hr />
            <div className={classes.input_text}>
                <div className={classes.profileAva}>
                    <img src="img/LukeSkywalker.jpg" alt="LukeSkywalker" />
                </div>
                <textarea name="" id="" placeholder="Write your post here..."></textarea>
            </div>
            <hr />
            <div className={classes.btns}>
                <input type="submit" value="Post" />
            </div>
        </form>
    );
}

export default CreatePost;