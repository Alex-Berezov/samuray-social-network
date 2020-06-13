import React from 'react';

const Header = () => {
    return <section className="header">
        <div className="wrapper">
            <div className="logo_part">
                <img src="img/logo.jpg" alt="Logotype" />
                <div className="button_new">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
            <div className="search_part">
                <form>
                    <input type="search" name="search_input" id="" placeholder="What are we looking for?" />
                    <a href="#" className="search_btn"><i className="fab fa-searchengin"></i></a>
                </form>
            </div>
            <div className="right_part">
                <div className="notifications">
                    <i className="far fa-bell"></i>
                </div>
                <div className="settings">
                    <i className="fas fa-sliders-h"></i>
                </div>
            </div>
        </div>
    </section>
};

export default Header;