import React from 'react'
import classes from './FloatingDiv.module.css';

function FloatingDiv({image, txt1, txt2}) {
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