import React from 'react';
import classes from './MainCard.module.css';
import CoverAva from './coverAva/CoverAva';
import CardFooter from './cardFooter/CardFooter';

const MainCard = (props) => {

    return (
        <div className={classes.main_card}>
            <CoverAva profile={props.profile} />
            <CardFooter profile={props.profile} />
        </div>
    );
}

export default MainCard;