import classes from './App.module.css';
import Experience from './components/Experience/Experience';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Services from './components/Services/Services.js';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio.js';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import {themeContext} from './Context';
import {useContext} from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={classes.App}
    style={{
      background: darkMode ? 'black': '',
      color: darkMode ? 'white': '',
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
