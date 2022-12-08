import React, {useRef} from 'react'
import "./Contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerFill} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7buhktr', 'template_3m3ccfy', form.current, 'QXPWXbMwAeMWxLUND')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>robina.sre78@gmail.com</h5>
            <a href="mailto:robina.sre78@gmail.com" target="_blank">Send an email</a>
          </article> 
          <article className="contact__option">
            <RiMessengerFill className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>facebook Messenger</h5>
            <a href="https://www.facebook.com/bookmarks" target="_blank">Send an message</a>
          </article> 
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>(559)433-7502</h5>
            <a href="https://api.whatsapp.com/send?phone=5594337502" target="_blank">Send an message</a>
          </article> 
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name'required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
