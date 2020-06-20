import React from 'react';
import classes from './CardFooter.module.css';
import SocialLinks from './socialLinks/SocialLinks';
import ProfileActiveInfo from './profileActiveInfo/ProfileActiveInfo';

const CardFooter = () => {
    return (
        <div className={classes.main_card_footer}>
            <SocialLinks />
            <ProfileActiveInfo />
        </div>
    );
}

export default CardFooter;