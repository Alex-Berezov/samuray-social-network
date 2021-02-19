import React from 'react';
import classes from './MainCard.module.css';
import CoverAva from './coverAva/CoverAva';
import CardFooter from './cardFooter/CardFooter';

const MainCard = (props) => {

    return (
        <div className={classes.main_card}>
            <CoverAva
                profile={props.profile}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <CardFooter profile={props.profile} />
        </div>
    );
}

export default MainCard;