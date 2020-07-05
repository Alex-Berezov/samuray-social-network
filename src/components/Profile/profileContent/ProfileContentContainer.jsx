import React from 'react';
import {connect} from "react-redux";
import ProfileContent from "./ProfileContent";


const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const ProfileContentContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContent);

export default ProfileContentContainer;