import classes from './App.module.css';
import Experience from './components/Experience/Experience';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Services from './components/Services/Services.js';
import Works from './components/Works/Works';

function App() {
  return (
    <div className={classes.App}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
    </div>
  );
}

export default App;
