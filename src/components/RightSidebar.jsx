import React from 'react';

const RightSidebar = () => {
    return <div className="friends_online_list">
                <div className="friends_online_list_item">
                    <a href="#">
                        <div className="friends_online_ava">
                            <img className="rounde_circle" src="img/Chewbacca.jpg" alt="Chewbacca" />
                        </div>
                        <div className="friends_online_info">
                            <p className="name">Chewbacca</p>
                            <p className="role">Friend</p>
                        </div>
                    </a>
                </div>
                <div className="friends_online_list_item">
                    <a href="#">
                        <div className="friends_online_ava">
                            <img className="rounde_circle" src="img/Solo.jpg" alt="Han Solo" />
                        </div>
                        <div className="friends_online_info">
                            <p className="name">Han Solo</p>
                            <p className="role">Friend</p>
                        </div>
                    </a>
                </div>
                <div className="friends_online_list_item">
                    <a href="#">
                        <div className="friends_online_ava">
                            <img className="rounde_circle" src="img/Leia.jpg" alt="Princess Leia" />
                        </div>
                        <div className="friends_online_info">
                            <p className="name">Princes Leia</p>
                            <p className="role">Friend</p>
                        </div>
                    </a>
                </div>
            </div>
};

export default RightSidebar;