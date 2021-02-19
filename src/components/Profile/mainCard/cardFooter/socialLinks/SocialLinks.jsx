import React from 'react';
import classes from './SocialLinks.module.css';
import fb from '../../../../../assets/img/fb.png';
import tw from '../../../../../assets/img/tw.png';
import inst from '../../../../../assets/img/inst.png';
import you from '../../../../../assets/img/you.png';
import LIn from '../../../../../assets/img/LIn.png';

const SocialLinks = () => {
    return (
        <div className={classes.left}>
            <a href="https://www.facebook.com/"><img src={fb} alt="" /></a>
            <a href="https://twitter.com/"><img src={tw} alt="" /></a>
            <a href="https://instagram.com"><img src={inst} alt="" /></a>
            <a href="https://www.youtube.com/"><img src={you} alt="" /></a>
            <a href="https://www.linkedin.com/"><img src={LIn} alt="" /></a>
        </div>
    );
}

export default SocialLinks;