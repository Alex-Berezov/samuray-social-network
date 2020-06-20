import React from 'react';
import classes from './About.module.css';

const About = () => {
    return (
        <div className={`${classes.tab} ${classes.tab_2}`}>
            <div className={classes.tab_submenu}>
                <div className={`${classes.tab_submenu_item} ${classes.is_active}`}>
                    Contact and Basic Info
                </div>
                <div className={classes.tab_submenu_item}>
                    Some item #2
                </div>
                <div className={classes.tab_submenu_item}>
                    Some item #3
                </div>
                <div className={classes.tab_submenu_item}>
                    Some item #4
                </div>
            </div>
            <div className={classes.tab_contents}>
                <div className={`${classes.tab_content} ${classes.info}`}>
                    <h3>Contact Information</h3>
                    <hr />
                    <div className={classes.tab_content_info_data}>
                        <div className={classes.title}>
                            <h5>Email</h5>
                        </div>
                        <div className="value">
                            <p>LukeSkywalker@rebels.glob</p>
                        </div>
                    </div>
                    <div className={classes.tab_content_info_data}>
                        <div className={classes.title}>
                            <h5>Mobile</h5>
                        </div>
                        <div className={classes.value}>
                            <p>+1 (001) 5544 33 11</p>
                        </div>
                    </div>
                    <div className={classes.tab_content_info_data}>
                        <div className={classes.title}>
                            <h5>Address</h5>
                        </div>
                        <div className={classes.value}>
                            <p>Tatooine, hopper No. 4 behind the field of moisture catchers</p>
                        </div>
                    </div>
                </div>
                <div className={`${classes.tab_content} ${classes.links}`}>
                    <h3>Websites and Social Links</h3>
                    <hr />
                    <div className={classes.tab_content_info_data}>
                        <div className={classes.title}>
                            <h5>Website</h5>
                        </div>
                        <div className={classes.value}>
                            <p>www.rebels.glob</p>
                        </div>
                    </div>
                    <div className={classes.tab_content_info_data}>
                        <div className={classes.title}>
                            <h5>Social Link</h5>
                        </div>
                        <div className={classes.value}>
                            <p>aleber-social.com</p>
                        </div>
                    </div>
                </div>
                <div className={`${classes.tab_content} ${classes.basic}`}>
                    <h3>Basic Information</h3>
                    <hr />
                    <div className={classes.tab_content_info_data}>
                        <div className={classes.title}>
                            <h5>Birth Date</h5>
                        </div>
                        <div className={classes.value}>
                            <p>8 March</p>
                        </div>
                    </div>
                    <div className={classes.tab_content_info_data}>
                        <div className={classes.title}>
                            <h5>Birth Year</h5>
                        </div>
                        <div className={classes.value}>
                            <p>1983</p>
                        </div>
                    </div>
                    <div className={classes.tab_content_info_data}>
                        <div className={classes.title}>
                            <h5>Profession</h5>
                        </div>
                        <div className={classes.value}>
                            <p>Jedi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;