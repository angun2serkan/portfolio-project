import classes from './App.module.css';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className={classes.App}>
      <Navbar/>
      <Intro/>
    </div>
  );
}

export default App;
