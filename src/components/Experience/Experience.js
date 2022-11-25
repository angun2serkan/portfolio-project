import React from 'react'
import classes from './Experience.module.css';
import {themeContext} from '../../Context.js';
import {useContext} from 'react';

function Experience() {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={classes.experience} id='Experience'>
        <div className={classes.achievement}>
            <div className={classes.circle} style={{color : darkMode? 'black' : ''}}>2</div>
            <span>Years we have spent as a </span>
            <span>Relentless </span>
        </div>

        <div className={classes.achievement}>
            <div className={classes.circle} style={{color : darkMode? 'black' : ''}}>5</div>
            <span>Projects we have made </span>
            <span>Relentless </span>
        </div>

        <div className={classes.achievement}>
            <div className={classes.circle} style={{color : darkMode? 'black' : ''}}>2</div>
            <span>Companies have seen what is  </span>
            <span>Relentless </span>
        </div>
    </div>
  )
}

export default Experience