import React from 'react';
import classes from './CoverAva.module.css';
import Tatooine from '../../../../assets/img/Tatooine.jpg';
import LukeSkywalker from '../../../../assets/img/LukeSkywalker.jpg';

const CoverAva = () => {
    return (
        <div className={classes.main_card_cover_ava}>
            <div className={classes.img_cover}>
                <img src={Tatooine} alt="" />
            </div>
            <div className={classes.img_ava}>
                <img src={LukeSkywalker} alt="" />
                <h2>Luke Skywalker</h2>
            </div>
        </div>
    );
}

export default CoverAva;