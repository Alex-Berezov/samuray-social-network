import React from 'react';
import CreatePost from "./CreatePost";
import {connect} from "react-redux";
import {addPost} from "../../../../../../redux/profile_reducer";
import {withAuthRedirect} from "../../../../../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch( addPost(newPostText) );
        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(CreatePost);