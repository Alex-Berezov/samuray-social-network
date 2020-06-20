import React from 'react';
import classes from './LeftSidbarPhotos.module.css';

const LeftSidbarPhotos = () => {
    return (
        <div className={classes.tab_1_leftSidbar_photos}>
            <div className={classes.leftSidbar_photos_header}>
                <h5>Photos</h5>
                <p>Add Photo</p>
            </div>
            <hr />
            <div className={classes.gallary}>
                <ul>
                    <li><a href="#"><img src="img/luke_img_1.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="img/luke_img_2.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="img/luke_img_3.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="img/luke_img_4.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="img/luke_img_5.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="img/luke_img_6.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="img/luke_img_7.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="img/luke_img_8.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="img/luke_img_9.jpg" alt="" /></a></li>
                </ul>
            </div>
        </div>
    );
}

export default LeftSidbarPhotos;