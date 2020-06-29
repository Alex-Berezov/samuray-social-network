import React from 'react';
import classes from './ProfileContent.module.css';
import TabsNav from './tabsNav/TabsNav';
import TabsContent from './tabsContent/TabsContent';
import {updateNewPostText} from "../../../redux/store";

const ProfileContent = (props) => {

    let tabsElem = props.state.profilePage.tabsNav.map( tab => <TabsNav navItemName={ tab.navItemName } tabName={ tab.tabName } /> );

    return (
        <div className={classes.profile_menu}>
            <div className={ classes.tabs__nav }>
                {tabsElem}
            </div>
            <TabsContent
                state={props.state}
                dispatch={ props.dispatch }
            />
        </div>
    );
}

export default ProfileContent;