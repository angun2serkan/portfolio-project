import React from 'react'
import classes from './Navbar.module.css';


function Navbar() {
  return (
    <div className={classes.navbar__wrapper}>
        <div className={classes.navbar__left}>
            <div className={classes.navbar__blogname}>Relentless Tech</div>
            <span>toggle</span>
        </div>
        <div className={classes.navbar__right}>
            <div className={classes.navbar__list}>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className={`${classes.button} ${classes.navbar__button}`}>
                Contact Us 
            </button>
        </div>
    </div>
  )
}

export default Navbar