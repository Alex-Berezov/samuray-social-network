import React from 'react';
import classes from './ProfileContent.module.css';
import TabsNav from './tabsNav/TabsNav';
import TabsContent from './tabsContent/TabsContent';

const ProfileContent = (props) => {

    let tabsElem = props.state.map( tab => <TabsNav navItemName={ tab.navItemName } tabName={ tab.tabName } /> );

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