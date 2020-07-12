import React from 'react';
import classes from './CoverAva.module.css';
import Tatooine from '../../../../assets/img/Tatooine.jpg';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const CoverAva = (props) => {
    if  (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={classes.main_card_cover_ava}>
            <div className={classes.img_cover}>
                <img src={Tatooine} alt="" />
            </div>
            <div className={classes.img_ava}>
                <img src={props.profile.photos.large} alt="" />
                <h2>{props.profile.fullName}</h2>
                {/*<p>{props.profile.aboutMe}</p>*/}
                <ProfileStatus status={'Hello my friends'} />
            </div>
        </div>
    );
}

export default CoverAva;