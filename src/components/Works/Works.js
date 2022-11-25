import React from 'react'
import classes from './Works.module.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import {themeContext} from '../../Context.js';
import {useContext} from 'react';


function Works() {
    
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={classes.works}>
      <div className={classes.awesome}>
            <span style={{color : darkMode? 'white' : ''}}>Works for All these</span>
            <span>Brands & Clients</span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> 
            Eius assumenda, quas exercitationem earum rerum cupiditate.<br/> 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>

            <button className={`${classes.button} ${classes.services__button}`}>Hire Me</button>
            <div className={`${classes.blur} ${classes.services__blur1}`} style={{blackground:"#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className={classes.works__right}>
          <div className={classes.works__mainCircle} style={{background : darkMode? 'black' : ''}}>
            <div className={classes.works__secCircle}>
              <img src={Upwork} alt=''/>
            </div>

            <div className={classes.works__secCircle}>
              <img src={Fiverr} alt=''/>
            </div>

            <div className={classes.works__secCircle}>
              <img src={Amazon} alt=''/>
            </div>

            <div className={classes.works__secCircle}>
              <img src={Shopify} alt=''/>
            </div>

            <div className={classes.works__secCircle}>
              <img src={Facebook} alt=''/>
            </div>
          </div>

          {/* background Circles */}
          <div className={`${classes.works__backCircle} ${classes.blueCircle}`} style={{background : darkMode? '#1949B8' : ''}}></div>
          <div className={`${classes.works__backCircle} ${classes.yellowCircle}`} style={{background : darkMode? '#1949B8' : ''}}></div>
        </div>
    </div>
  )
}

export default Works