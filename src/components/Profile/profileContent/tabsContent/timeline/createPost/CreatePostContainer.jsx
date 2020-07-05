import React from 'react';
import {addPostActionCreator, handlePostChangeActionCreator} from "../../../../../../redux/profile_reducer";
import CreatePost from "./CreatePost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        profilePage: state.profilePage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHandlePostChange: (newPost) => {
            dispatch( handlePostChangeActionCreator(newPost) );
        },
        addPost: () => {
            dispatch( addPostActionCreator() );
        }
    };
};

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost);

export default CreatePostContainer;