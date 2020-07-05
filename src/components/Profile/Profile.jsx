import React from 'react';
import classes from './Profile.module.css';
import MainCard from './mainCard/mainCard';
import ProfileContent from './profileContent/ProfileContent';
import ProfileContentContainer from "./profileContent/ProfileContentContainer";

const Profile = (props) => {

    return (
        <section className={classes.profile_part}>
            <MainCard />
            <ProfileContentContainer />
        </section>
    );
};

export default Profile;