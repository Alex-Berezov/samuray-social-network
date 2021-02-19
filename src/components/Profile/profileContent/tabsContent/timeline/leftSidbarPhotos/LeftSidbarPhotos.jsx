import React from 'react';
import classes from './LeftSidbarPhotos.module.css';
import luke_img_1 from '../../../../../../assets/img/luke_img_1.jpg';
import luke_img_2 from '../../../../../../assets/img/luke_img_2.jpg';
import luke_img_3 from '../../../../../../assets/img/luke_img_3.jpg';
import luke_img_4 from '../../../../../../assets/img/luke_img_4.jpg';
import luke_img_5 from '../../../../../../assets/img/luke_img_5.jpg';
import luke_img_6 from '../../../../../../assets/img/luke_img_6.jpg';
import luke_img_7 from '../../../../../../assets/img/luke_img_7.jpg';
import luke_img_8 from '../../../../../../assets/img/luke_img_8.jpg';
import luke_img_9 from '../../../../../../assets/img/luke_img_9.jpg';

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
                    <li><img src={luke_img_1} alt="" /></li>
                    <li><img src={luke_img_2} alt="" /></li>
                    <li><img src={luke_img_3} alt="" /></li>
                    <li><img src={luke_img_4} alt="" /></li>
                    <li><img src={luke_img_5} alt="" /></li>
                    <li><img src={luke_img_6} alt="" /></li>
                    <li><img src={luke_img_7} alt="" /></li>
                    <li><img src={luke_img_8} alt="" /></li>
                    <li><img src={luke_img_9} alt="" /></li>
                </ul>
            </div>
        </div>
    );
}

export default LeftSidbarPhotos;