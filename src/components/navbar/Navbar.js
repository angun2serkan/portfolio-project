import React from 'react'
import classes from './Nabar.module.css';

function Navbar() {
  return (
    <div className={classes.navbar-wrapper}>
        <div className={classes.navbar-left}>
            <div className={classes.navbar-blogname}></div>
            <span>toggle</span>
        </div>
        <div className={classes.navbar-right}>
            <div className={classes.navbar-list}>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className={classes.button}>
                Contact Us :)
            </button>
        </div>
    </div>
  )
}

export default navbar