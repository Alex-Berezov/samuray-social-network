import React, {Profiler} from 'react';
import {Route} from "react-router-dom";
import './App.css';
import './assets/fonts/fonts.css';
import './fontawesome-free-5.13.0-web/css/all.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Newsfeed from "./components/Newsfeed/Newsfeed";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import RightSidebarContainer from "./components/RightSidebar/RightSidebarContainer";
import UsersContainer from "./components/Users/UsersContsiner";


const App = (props) => {

    return (
            <div>
                <header>
                    <Header/>
                </header>

                <main>
                    <article>

                        <div className="wrapper">

                            <aside className="left_sadiebar">
                                <Navbar/>
                            </aside>

                            <div className="content_part">
                                <Route path='/Profile' render={ () => <Profile />}
                                />
                                <Route path='/Dialogs' render={ () => <DialogsContainer />}
                                />
                                <Route path='/users' render={ () => <UsersContainer />} />
                                <Route path='/Newsfeed' render={ () => <Newsfeed />} />
                                <Route path='/Music' render={ () => <Music />} />
                                <Route path='/Settings' render={ () => <Settings />} />
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
