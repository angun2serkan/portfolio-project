import React from 'react'
import classes from './Services.module.css';
import Card from '../Card/Card.js';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from './Resume.pdf'


function Services() {
  return (
    <div className={classes.services}>
        {/* left side */}
        <div className={classes.awesome}>
            <span>RELENTLESS</span>
            <span>Services</span>
            <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> 
            Eius assumenda, quas exercitationem earum rerum cupiditate.<br/> 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>
            </span>

            <a href={Resume} download>
              <button className={`${classes.button} ${classes.services__button}`}>Download CV</button>
            </a>
            <div className={`${classes.blur} ${classes.services__blur1}`} style={{blackground:"#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className={classes.cards}>
          <div style={{left:'14rem'}}>
            <Card emoji={HeartEmoji} heading={'UX/UI '} detail={"Figma, Sketch, Photoshop, Adobe"}/>
          </div>

          <div style={{top:"12rem", left:"-4rem"}}>
            <Card emoji={Glasses} heading={"Development"} detail={"Html, CSS, Javascript, React"}/>
          </div>

          <div style={{top:"19rem", left:"12rem"}}>
            <Card emoji={Humble} heading={"Data Engineering"} detail={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"}/>
          </div>

          <div className={`${classes.blur} ${classes.services__blur2}`} style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services