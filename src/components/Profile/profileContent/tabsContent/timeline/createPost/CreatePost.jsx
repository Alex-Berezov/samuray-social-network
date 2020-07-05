import React from 'react';
import classes from './CreatePost.module.css';

const CreatePost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
        //newPostElement.current.value = '';
    };

    let handlePostChange = (event) => {
        let newPost = event.target.value;
        props.onHandlePostChange(newPost);
    };

    return (
        <div className={classes.create_post}>
            <div className={classes.create_post_header}>
                <h5>Create post</h5>
            </div>
            <hr />
            <div className={classes.input_text}>
                <div className={classes.profileAva}>
                    <img src="img/LukeSkywalker.jpg" alt="LukeSkywalker" />
                </div>
                <textarea
                    ref={ newPostElement }
                    placeholder="Write your post here..."
                    value={ props.newPostText }
                    onChange={ handlePostChange }
                />
            </div>
            <hr />
            <div className={classes.btns}>
                <button onClick={ addPost }>Post</button>
            </div>
        </div>
    );
}

export default CreatePost;