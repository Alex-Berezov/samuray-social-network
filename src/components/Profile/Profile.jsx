import React from 'react';
import classes from './Profile.module.css';
import MainCard from './mainCard/mainCard';
import ProfileContent from './profileContent/ProfileContent';
import state, {updateNewPostText} from "../../redux/store";

const Profile = (props) => {

    return (
        <section className={classes.profile_part}>
            <MainCard />
            <ProfileContent
                state={props.state}
                dispatch={ props.dispatch }
            />
        </section>
    );
};

export default Profile;