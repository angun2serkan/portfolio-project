import React from 'react'
import classes from './Experience.module.css';
function Experience() {
  return (
    <div className={classes.experience}>
        <div className={classes.achievement}>
            <div className={classes.circle}>2</div>
            <span>Years we have spent as a </span>
            <span>Relentless </span>
        </div>

        <div className={classes.achievement}>
            <div className={classes.circle}>5</div>
            <span>Projects we have made </span>
            <span>Relentless </span>
        </div>

        <div className={classes.achievement}>
            <div className={classes.circle}>2</div>
            <span>Companies have seen what is  </span>
            <span>Relentless </span>
        </div>
    </div>
  )
}

export default Experience