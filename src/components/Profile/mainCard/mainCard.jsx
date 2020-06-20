import React from 'react';
import classes from './MainCard.module.css';
import CoverAva from './coverAva/CoverAva';
import CardFooter from './cardFooter/CardFooter';

const MainCard = () => {
    return (
        <div className={classes.main_card}>
            <CoverAva />
            <CardFooter />
        </div>
    );
}

export default MainCard;