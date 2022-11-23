import classes from './App.module.css';
import Experience from './components/Experience/Experience';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Services from './components/Services/Services.js';

function App() {
  return (
    <div className={classes.App}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
    </div>
  );
}

export default App;
