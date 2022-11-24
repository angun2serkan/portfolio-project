import React from 'react'
import classes from './Footer.module.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
function Footer() {
  return (
    <div className={classes.footer}>
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <div className={classes.footer__content}>
            <span>angun.serkan2@gmail.com</span>
            <div className={classes.footer__icons}>
                <Insta color='white' size='3rem'/>
                <Facebook color='white' size='3rem'/>
                <Github color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}

export default Footer