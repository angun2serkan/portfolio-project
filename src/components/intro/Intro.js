import React from 'react';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import classes from './Intro.module.css';
import Crown from '../../img/crown.png';
import Thumb from '../../img/thumbup.png';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import {themeContext} from '../../Context.js';
import {useContext} from 'react';

function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={classes.intro}>
      {/* left name side */}
        <div className={classes.intro__left}>
            <div className={classes.intro__name}>
                <span style={{color : darkMode? 'white' : ''}}>We are here to </span>
                <span>Turn the Rock You have into a Statue </span>
                <span>just like what Michalengelo did to David!</span>
            </div>

            <button className={`${classes.intro__button} ${classes.button}`}>
                <span>Lets Meet!</span>
                <br/>
                <span>&</span>
                <br/>
                <span>Talk Business</span>
            </button>
            
            <div className={classes.intro__icons}>
              <a href='https://github.com/angun2serkan' target='_blank'>
                <img src={Github} alt="github" />
              </a>
              <a href='https://www.linkedin.com/in/serkan-ang%C3%BCn/' target='_blank'>
                <img src={Linkedin} alt="linkedin" />
              </a>
              <a href='https://www.instagram.com/player2srkn/' target='_blank'>
                <img src={Instagram} alt="instagram" />
              </a>
            </div>

        </div>

        {/* right image side */}
        <div className={classes.intro__right}> 
          {/* <img src={Vector1} alt="right-side images"/>
          <img src={Vector2} alt="right-side images"/>
          <img src={Boy} alt="right-side images"/> */}

          {/* <div className={classes.crownicon}>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
          </div> */}
          {/* <div className={classes.thumbupicon}>
            <FloatingDiv image={Thumb} txt1='Best Design' txt2='Award' />
          </div> */}

          {/* blur divs */}
          {/* <div className={classes.blur} style={{background:"rgb(238 210 255)"}}></div>
          <div className={classes.blur} style={{backgroun:'#C1F5FF', top:'17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div> */}
        </div>
    </div>
  )
}

export default Intro