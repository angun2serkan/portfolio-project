import React, {useContext, useRef, useState} from 'react'
import classes from './Contact.module.css';
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_u7i4cdq', 'template_la0kbgi', form.current, 'EYqH60vXNOj7F4iYi')
        .then((result) => {
            console.log(result.text);
          setDone(true);
          form.reset();
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div className={classes.contact__form}>
        <div className={classes.contact__left}>
            <div className={classes.awesome}>
                <span>Get in Touch </span>
                <span>Contact me</span>
                <div className={`${classes.blur} ${classes.blur1}`} style={{background:"#ABF1FF94"}}></div>
            </div>
        </div>

        <div className={classes.contact__right}>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className={classes.user} placeholder="Name"/>
                <input type="email" name="user_email" className={classes.user} placeholder="Email"/>
                <textarea name='message' className={classes.user} placeholder="Message"/>
                <input type="submit" value="Send" className={classes.button}/>
                <span>{done && "Thanks for Contacting me"}</span>
                <div className={`${classes.blur} ${classes.contact__blur1}`} style={{background: "var(--purple)"}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact