import React from 'react'
import classes from './Card.module.css';

function Card(props) {
  return (
    <div className={classes.card}>
        <img src={props.emoji} alt=''/>
        <span>{props.heading}; {props.detail}</span>

    </div>
  )
}

export default Card