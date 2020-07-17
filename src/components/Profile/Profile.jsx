import React from 'react';
import classes from './Profile.module.css';
import MainCard from './mainCard/mainCard';
import ProfileContentContainer from "./profileContent/ProfileContentContainer";

const Profile = (props) => {

    return (
        <section className={classes.profile_part}>
            <MainCard
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <ProfileContentContainer profile={props.profile} />
        </section>
    );
};

export default Profile;