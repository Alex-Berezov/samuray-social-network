import React from 'react';
import classes from './ProfileContent.module.css';
import TabsNav from './tabsNav/TabsNav';
import TabsContent from './tabsContent/TabsContent';

const ProfileContent = (props) => {

    let state = props.profilePage;
    let tabsElem = state.tabsNav.map( tab => <TabsNav
        navItemName={ tab.navItemName }
        tabName={ tab.tabName }
        key={ tab.id }
    /> );

    return (
        <div className={classes.profile_menu}>
            <div className={ classes.tabs__nav }>
                {tabsElem}
            </div>
            <TabsContent />
        </div>
    );
}

export default ProfileContent;