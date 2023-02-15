import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from '@emailjs/browser';

export default function Contact() {
   const form=useRef();
   const [message,setMessage]=useState(false)
   const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_i9a0o97', 'template_1aa24il', form.current, 'iCjGnIksYuxFm7Mwr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
      <h2 className="contact-title1-1">Contact Us</h2>
      <p className="contact-title1-2">Any question or remarks? just write us a message!</p>
     <div className="contact-and-form">
     <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">

        <form ref={form} onSubmit={sendEmail}>

          <div className="input-container">
          <label for="name">Name</label>
          <input type="text" placeholder="your name" id="name" name="user_name" required/>
          </div>
          
          <div className="input-container">
          <label for="email">Email</label>
          <input type="email" placeholder="your email" id="email" name="user_email" required/>
          </div>

          <div className="input-container">
            
            <p className="checkbox-title">What do you need?</p>
            <div className="checkbox-container">
            <div className="checkbox1">

            <input type="checkbox" id="web" name="web" value="Web developement" />
            <label for="web">Web developement</label>
            </div>
            <div className="checkbox1">
            <input type="checkbox" id="api" name="api" value="Api developement" />
            <label for="api">Api developement</label>
            </div>

            <div className="checkbox1">
            <input type="checkbox" id="dsa" name="dsa" value="Data structure and Algorithm" />
            <label for="dsa">Data structure and Algorithm</label>
            </div>
            </div>
          </div>

          <div className="input-container">
          <label for="message">Message</label>
          <textarea placeholder="Write your message..." id="message" name="message" required></textarea>
          </div>
          
          <button type="submit" value="Send">Send Message</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
     </div>
      </div>
    </div>
  );
}