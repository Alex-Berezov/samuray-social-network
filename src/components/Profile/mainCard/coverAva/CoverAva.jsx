import React from 'react';
import classes from './CoverAva.module.css';

const CoverAva = () => {
    return (
        <div className={classes.main_card_cover_ava}>
            <div className={classes.img_cover}>
                <img src="img/Tatooine.jpg" alt="" />
            </div>
            <div className={classes.img_ava}>
                <img src="img/LukeSkywalker.jpg" alt="" />
                <h2>Luke Skywalker</h2>
            </div>
        </div>
    );
}

export default CoverAva;