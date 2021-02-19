import React from 'react';
import classes from './CoverAva.module.css';
import Tatooine from '../../../../assets/img/Tatooine.jpg';
import userPhoto from '../../../../assets/img/logo.jpg';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const CoverAva = (props) => {
    if  (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {

        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={classes.main_card_cover_ava}>
            <div className={classes.img_cover}>
                <img src={Tatooine} alt="" />
            </div>
            <div className={classes.img_ava}>
                <img src={props.profile.photos.large || userPhoto} alt="" />
                { props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} /> }
                <h2>{props.profile.fullName}</h2>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}

export default CoverAva;