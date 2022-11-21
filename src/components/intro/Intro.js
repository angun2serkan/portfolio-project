import React from 'react';
import classes from './Intro.module.css';

function Intro() {
  return (
    <div className={classes.intro}>
        <div className={classes.intro__left}>
            <div className={classes.intro__name}>
                <span>Hey! I am </span>
                <span>Serkan Angün </span>
                <span>Frontend Developer with low level experinece and sky rocket level of patience in web designing and development.</span>
            </div>

            <button className={`${classes.intro__button} ${classes.button}`}>
                <span>Lets Meet!</span>
                <br/>
                <span>&</span>
                <br/>
                <span>Talk Business</span>
            </button>
            
            <div className={classes.intro__icons}>
              <img src="https://github.com/angun2serkan" alt="github" />
              <img src="https://www.linkedin.com/in/serkan-ang%C3%BCn/" alt="linkedin" />
            </div>

        </div>
        <div className={classes.intro__right}> Right Side</div>
    </div>
  )
}

export default Intro