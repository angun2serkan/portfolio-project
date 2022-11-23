import React from 'react'
import classes from './Card.module.css';

function Card(props) {
  return (
    <div className={classes.card}>
        <img src={props.emoji} alt=''/>
        <span>{props.heading}; </span>
        <span>{props.detail}</span>
        <button className={classes.card__button}>Learn More</button>

    </div>
  )
}

export default Card