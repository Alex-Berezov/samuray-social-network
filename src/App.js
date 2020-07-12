import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import './assets/fonts/fonts.css';
import './fontawesome-free-5.13.0-web/css/all.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Newsfeed from "./components/Newsfeed/Newsfeed";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import RightSidebarContainer from "./components/RightSidebar/RightSidebarContainer";
import UsersContainer from "./components/Users/UsersContsiner";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = (props) => {

    return (
            <div>
                <header>
                    <HeaderContainer />
                </header>

                <main>
                    <article>

                        <div className="wrapper">

                            <aside className="left_sadiebar">
                                <Navbar/>
                            </aside>

                            <div className="content_part">
                                <Route path='/Profile/:userId?' render={ () => <ProfileContainer />}
                                />
                                <Route path='/Dialogs' render={ () => <DialogsContainer />}
                                />
                                <Route path='/users' render={ () => <UsersContainer />} />
                                <Route path='/Newsfeed' render={ () => <Newsfeed />} />
                                <Route path='/Music' render={ () => <Music />} />
                                <Route path='/Settings' render={ () => <Settings />} />
                                <Route path='/login' render={ () => <Login />} />
                            </div>

                            <aside className="right_sidebar">
                                <RightSidebarContainer />
                            </aside>

                        </div>

                    </article>

                </main>

                <footer>
                    <Footer/>
                </footer>
            </div>
    );
}

export default App;
