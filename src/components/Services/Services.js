import React from 'react'
import classes from './Services.module.css';
import Card from '../Card/Card.js';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from './Resume.pdf'
import {themeContext} from '../../Context.js';
import {useContext} from 'react';
import {motion} from 'framer-motion';

function Services() {
  
  const transition = {duration: 2, type: 'spring'};
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={classes.services} id='Services'>
        {/* left side */}
        <div className={classes.awesome}>
            <span style={{color : darkMode? 'white' : ''}}>RELENTLESS</span>
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
          <motion.div
          whileInView={{left:'10rem'}}
          initial={{left:'25%'}}
          transition={transition}
           style={{left:'14rem'}}>
            <Card emoji={HeartEmoji} heading={'UX/UI '} detail={"Figma, Sketch, Photoshop, Adobe"}/>
          </motion.div>

          <motion.div 
          whileInView={{left:'-10rem'}}
          initial={{left:'20%'}}
          transition={transition}
          style={{top:"12rem", left:"-4rem"}}>
            <Card emoji={Glasses} heading={"Development"} detail={"Html, CSS, Javascript, React"}/>
          </motion.div>

          <motion.div
          whileInView={{left:'10rem'}}
          initial={{left:'25%'}}
          transition={transition}
           style={{top:"19rem", left:"12rem"}}>
            <Card emoji={Humble} heading={"Data Engineering"} detail={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"}/>
          </motion.div>

          <div className={`${classes.blur} ${classes.services__blur2}`} style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services