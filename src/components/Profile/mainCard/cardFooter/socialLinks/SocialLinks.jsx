import React from 'react';
import classes from './SocialLinks.module.css';

const SocialLinks = () => {
    return (
        <div className={classes.left}>
            <a href="#"><img src="img/fb.png" alt="" /></a>
            <a href="#"><img src="img/tw.png" alt="" /></a>
            <a href="#"><img src="img/inst.png" alt="" /></a>
            <a href="#"><img src="img/you.png" alt="" /></a>
            <a href="#"><img src="img/LIn.png" alt="" /></a>						
        </div>
    );
}

export default SocialLinks;