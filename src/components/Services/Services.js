import React from 'react'
import classes from './Services.module.css';
import Card from '../Card/Card.js';
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
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Eius assumenda, quas exercitationem earum rerum cupiditate.</span>
            <button className={`${classes.button} ${classes.services__button}`}>Download CV</button>
            <div className={`${classes.blur} ${classes.services__blur1}`} style={{blackground:"#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className={classes.cards}>
          <div>
            <Card emoji={HeartEmoji} heading={'Design '} detail={"Figma, Sketch, Photoshop, Adobe"}/>
          </div>
        </div>
    </div>
  )
}

export default Services