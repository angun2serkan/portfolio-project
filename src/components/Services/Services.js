import React from 'react'
import classes from './Services.module.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';


function Services() {
  return (
    <div className={classes.services}>
        {/* left side */}
        <div className={classes.awesome}>
            <span>My Awesome</span>
            <span>services</span>
            <spane>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Eius assumenda, quas exercitationem earum rerum cupiditate.</spane>
            <button className={`${classes.button} ${classes.services__button}`}>Download CV</button>
            <div className={`${classes.blur} ${classes.services__blur1}`} style={{blackground:"#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className={classes.cards}>
          I am the right side
        </div>
    </div>
  )
}

export default Services