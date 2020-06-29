import React, {Profiler} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import './fonts/fonts.css';
import './fontawesome-free-5.13.0-web/css/all.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Dialogs from "./components/Dialogs/Dialogs";
import Newsfeed from "./components/Newsfeed/Newsfeed";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import state, {addNewMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/store";


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
                                <Route path='/Profile' render={ () => <Profile
                                    state={ props.state }
                                    dispatch={ props.dispatch }
                                    />}
                                />
                                <Route path='/Dialogs' render={ () => <Dialogs
                                    state={ props.state.dialogsPage }
                                    dispatch={ props.dispatch }
                                    />}
                                />
                                <Route path='/Newsfeed' render={ () => <Newsfeed />} />
                                <Route path='/Music' render={ () => <Music />} />
                                <Route path='/Settings' render={ () => <Settings />} />
                            </div>

                            <aside className="right_sidebar">
                                <RightSidebar state={ props.state.RightSidebarPart } />
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
