import React from 'react';

const Profile = () => {
    return <section className="profile_part">
                <div className="main_card">
                    <div className="main_card_cover_ava">
                        <div className="img_cover">
                            <img src="img/Tatooine.jpg" alt="" />
                        </div>
                        <div className="img_ava">
                            <img src="img/LukeSkywalker.jpg" alt="" />
                            <h2>Luke Skywalker</h2>
                        </div>
                    </div>
                    <div className="main_card_footer">
                        <div className="left">
                            <a href="#"><img src="img/fb.png" alt="" /></a>
                            <a href="#"><img src="img/tw.png" alt="" /></a>
                            <a href="#"><img src="img/inst.png" alt="" /></a>
                            <a href="#"><img src="img/you.png" alt="" /></a>
                            <a href="#"><img src="img/LIn.png" alt="" /></a>						
                        </div>
                        <div className="right">
                            <div className="posts right_item">
                                <div className="right_item_title">
                                    <p>Posts</p>
                                </div>
                                <div className="right_item_data">
                                    <p>335</p>
                                </div>
                            </div>
                            <div className="followers right_item">
                                <div className="right_item_title">
                                    <p>Followers</p>
                                </div>
                                <div className="right_item_data">
                                    <p>142</p>
                                </div>
                            </div>
                            <div className="following right_item">
                                <div className="right_item_title">
                                    <p>Following</p>
                                </div>
                                <div className="right_item_data">
                                    <p>768</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile_menu">
                    <div className="tabs">
                        <div className="tabs__nav">
                            <div className="tabs-nav__item is-active" data-tab-name="tab-1">Timeline</div>
                            <div className="tabs-nav__item" data-tab-name="tab-2">About</div>
                            <div className="tabs-nav__item" data-tab-name="tab-3">Friends</div>
                            <div className="tabs-nav__item" data-tab-name="tab-4">Photos</div>
                        </div>
                        <div className="tabs__content">
                            <div className="tab is-active tab-1">
                                <div className="tab-1_leftSidbar">
                                    <div className="tab-1_leftSidbar_photos">
                                        <div className="leftSidbar_photos_header">
                                            <h5>Photos</h5>
                                            <p>Add Photo</p>
                                        </div>
                                        <hr />
                                        <div className="gallary">
                                            <ul>
                                                <li><a href="#"><img src="img/luke_img_1.jpg" alt="" /></a></li>
                                                <li><a href="#"><img src="img/luke_img_2.jpg" alt="" /></a></li>
                                                <li><a href="#"><img src="img/luke_img_3.jpg" alt="" /></a></li>
                                                <li><a href="#"><img src="img/luke_img_4.jpg" alt="" /></a></li>
                                                <li><a href="#"><img src="img/luke_img_5.jpg" alt="" /></a></li>
                                                <li><a href="#"><img src="img/luke_img_6.jpg" alt="" /></a></li>
                                                <li><a href="#"><img src="img/luke_img_7.jpg" alt="" /></a></li>
                                                <li><a href="#"><img src="img/luke_img_8.jpg" alt="" /></a></li>
                                                <li><a href="#"><img src="img/luke_img_9.jpg" alt="" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-1_timelineContent">
                                    <form className="create_post">
                                        <div className="create_post_header">
                                            <h5>Create post</h5>
                                        </div>
                                        <hr />
                                        <div className="input_text">
                                            <div className="profileAva">
                                                <img src="img/LukeSkywalker.jpg" alt="LukeSkywalker" />
                                            </div>
                                            <textarea name="" id="" placeholder="Write your post here..."></textarea>
                                        </div>
                                        <hr />
                                        <div className="btns">
                                            <input type="submit" value="Post" />
                                        </div>
                                    </form>
                                    <div className="single_post">
                                        <div className="single_post_header">
                                            <div className="single_post_header_foto">
                                                <a href="#">
                                                    <img src="img/LukeSkywalker.jpg" alt="LukeSkywalker" />
                                                </a>
                                            </div>
                                            <div className="single_post_header_title">
                                                <h6><a href="#">Luke Skywalker</a></h6>
                                                <p className="post_date">XX hour ago</p>
                                            </div>
                                        </div>
                                        <div className="single_post_content">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                        </div>
                                        <div className="single_post_info">
                                            <div className="likes">
                                                <i className="far fa-thumbs-up"></i>
                                                <p>140 likes</p>
                                            </div>
                                            <div className="comments">
                                                <p>20 comment</p>
                                            </div>
                                            <div className="share">
                                                <i className="fas fa-share-alt"></i>
                                                <p>99 Share</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="comments_area">
                                            <div className="single_comments">
                                                <div className="comments_content_header">
                                                    <div className="single_comments_foto">
                                                        <a href="#">
                                                            <img src="img/Leia.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <p>Princes Leia</p>
                                                </div>
                                                <div className="single_comments_content">
                                                    <div className="text">
                                                        <p>
                                                            Some comments text here
                                                        </p>
                                                    </div>
                                                    <div className="comments_content_footer">
                                                        <p>Like</p>
                                                        <p>Reply</p>
                                                        <p className="date">5 min ago</p>
                                                    </div>
                                                </div>
                                                <div className="single_comments_addComment">
                                                    <form>
                                                        <textarea name="" id="" ></textarea>
                                                        <input type="submit" value="Сomment" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab tab-2">
                                <div className="tab_submenu">
                                    <div className="tab_submenu_item is_active">
                                        Contact and Basic Info
                                    </div>
                                    <div className="tab_submenu_item">
                                        Some item #2
                                    </div>
                                    <div className="tab_submenu_item">
                                        Some item #3
                                    </div>
                                    <div className="tab_submenu_item">
                                        Some item #4
                                    </div>
                                </div>
                                <div className="tab_contents">
                                    <div className="tab_content info">
                                        <h3>Contact Information</h3>
                                        <hr />
                                        <div className="tab_content_info_data">
                                            <div className="title">
                                                <h5>Email</h5>
                                            </div>
                                            <div className="value">
                                                <p>LukeSkywalker@rebels.glob</p>
                                            </div>
                                        </div>
                                        <div className="tab_content_info_data">
                                            <div className="title">
                                                <h5>Mobile</h5>
                                            </div>
                                            <div className="value">
                                                <p>+1 (001) 5544 33 11</p>
                                            </div>
                                        </div>
                                        <div className="tab_content_info_data">
                                            <div className="title">
                                                <h5>Address</h5>
                                            </div>
                                            <div className="value">
                                                <p>Tatooine, hopper No. 4 behind the field of moisture catchers</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab_content links">
                                        <h3>Websites and Social Links</h3>
                                        <hr />
                                        <div className="tab_content_info_data">
                                            <div className="title">
                                                <h5>Website</h5>
                                            </div>
                                            <div className="value">
                                                <p>www.rebels.glob</p>
                                            </div>
                                        </div>
                                        <div className="tab_content_info_data">
                                            <div className="title">
                                                <h5>Social Link</h5>
                                            </div>
                                            <div className="value">
                                                <p>aleber-social.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab_content basic">
                                        <h3>Basic Information</h3>
                                        <hr />
                                        <div className="tab_content_info_data">
                                            <div className="title">
                                                <h5>Birth Date</h5>
                                            </div>
                                            <div className="value">
                                                <p>8 March</p>
                                            </div>
                                        </div>
                                        <div className="tab_content_info_data">
                                            <div className="title">
                                                <h5>Birth Year</h5>
                                            </div>
                                            <div className="value">
                                                <p>1983</p>
                                            </div>
                                        </div>
                                        <div className="tab_content_info_data">
                                            <div className="title">
                                                <h5>Profession</h5>
                                            </div>
                                            <div className="value">
                                                <p>Jedi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab tab-3">Under construction</div>
                            <div className="tab tab-4">Under construction</div>
                        </div>
                    </div>
                </div>
            </section>
};

export default Profile;