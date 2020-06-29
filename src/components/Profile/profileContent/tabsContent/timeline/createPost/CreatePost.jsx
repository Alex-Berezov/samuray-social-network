import React from 'react';
import classes from './CreatePost.module.css';
import {addPostActionCreator, handlePostChangeActionCreator} from "../../../../../../redux/profile_reducer";

const CreatePost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch( addPostActionCreator() );
        newPostElement.current.value = '';
    };

    let handlePostChange = () => {
        let newPost = newPostElement.current.value;
        props.dispatch( handlePostChangeActionCreator(newPost) );
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