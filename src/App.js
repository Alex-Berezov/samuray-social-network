import React, { Profiler } from 'react';
import './App.css';
import './fonts/fonts.css';
import './fontawesome-free-5.13.0-web/css/all.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      
      <main>
		
        <article>

          <div class="wrapper">

            <aside class="left_sadiebar">
              <Navbar />
            </aside>
            
            <Profile />

            <aside class="right_sidebar">
              <RightSidebar />
            </aside>
      
          </div>

        </article>
    
      </main>

      <footer>
        <Footer />      
      </footer>

    </div>
  );
}

export default App;
