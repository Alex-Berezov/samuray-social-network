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


const App = () => {
    return (
        <BrowserRouter>
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
                                <Route path='/Profile' component={Profile} />
                                <Route path='/Dialogs' component={Dialogs} />
                                <Route path='/Newsfeed' component={Newsfeed} />
                                <Route path='/Music' component={Music} />
                                <Route path='/Settings' component={Settings} />
                            </div>

                            <aside className="right_sidebar">
                                <RightSidebar/>
                            </aside>

                        </div>

                    </article>

                </main>

                <footer>
                    <Footer/>
                </footer>

            </div>
        </BrowserRouter>
    );
}

export default App;
