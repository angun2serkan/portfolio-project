import classes from './App.module.css';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Services from './components/Services/Services.js';

function App() {
  return (
    <div className={classes.App}>
      <Navbar/>
      <Intro/>
      <Services/>
    </div>
  );
}

export default App;
