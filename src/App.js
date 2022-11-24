import classes from './App.module.css';
import Experience from './components/Experience/Experience';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Services from './components/Services/Services.js';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio.js';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className={classes.App}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
    </div>
  );
}

export default App;
