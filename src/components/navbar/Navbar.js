import React from 'react'
import classes from './Navbar.module.css';
import Toggle from '../Toggle/Toggle';
import {Link} from 'react-scroll';


function Navbar() {
  return (
    <div className={classes.navbar__wrapper} id='Navbar'>
        <div className={classes.navbar__left}>
            <div className={classes.navbar__blogname}>Relentless Tech</div>
            <Toggle/>
        </div>
        <div className={classes.navbar__right}>
            <div className={classes.navbar__list}>
                <ul>
                    <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                        <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}>
                        <li>Experience</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                        <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true}>
                        <li>Testimonials</li>
                    </Link>
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