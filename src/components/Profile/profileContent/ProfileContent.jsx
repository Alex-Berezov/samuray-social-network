import React from 'react';
import classes from './ProfileContent.module.css';
import TabsNav from './tabsNav/TabsNav';
import TabsContent from './tabsContent/TabsContent';

const ProfileContent = () => {
    return (
        <div className={classes.profile_menu}>
            <div className={classes.tabs}>
                <TabsNav />
                <TabsContent />
            </div>
        </div>
    );
}

export default ProfileContent;