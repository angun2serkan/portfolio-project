import React from 'react'
import classes from './FloatingDiv.module.css';
import {themeContext} from '../../Context.js';
import {useContext} from 'react';

function FloatingDiv({image, txt1, txt2}) {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={classes.floatingdiv}>
        <img src={image} alt=''/>
        <br/>
        <span>
            {txt1}
            <br/>
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv