import React from 'react'
import classes from './Experience.module.css';
function Experience() {
  return (
    <div className={classes.experience}>
        <div className={classes.achievement}>
            <div className={classes.circle}>1</div>
            <span>years </span>
            <span>Experience </span>
        </div>

        <div className={classes.achievement}>
            <div className={classes.circle}>2</div>
            <span>completed </span>
            <span>Projects </span>
        </div>

        <div className={classes.achievement}>
            <div className={classes.circle}>1</div>
            <span>companies </span>
            <span>work </span>
        </div>
    </div>
  )
}

export default Experience