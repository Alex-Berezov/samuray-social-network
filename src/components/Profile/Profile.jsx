import React from 'react';
import classes from './Profile.module.css';
import MainCard from './mainCard/mainCard';
import ProfileContent from './profileContent/ProfileContent';

const Profile = () => {
    return (
        <section className={classes.profile_part}>
            <MainCard />
            <ProfileContent />
        </section>
    );
};

export default Profile;