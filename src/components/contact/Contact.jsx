import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <form onSubmit={handleSubmit}>

          <div className="input-container">
          <label for="name">Name</label>
          <input type="text" placeholder="your name" id="name" />
          </div>
          
          <div className="input-container">
          <label for="email">Email</label>
          <input type="email" placeholder="your email" id="email" />
          </div>

          <div className="input-container">
            <p className="checkbox-title">What do you need?</p>
            <div className="checkbox-container">
            <div className="checkbox1">
            <input type="checkbox" id="web" name="web" value="web" />
            <label for="web">Web developement</label>
            </div>
            <div className="checkbox1">
            <input type="checkbox" id="api" name="api" value="api" />
            <label for="api">Api developement</label>
            </div>
            <div className="checkbox1">
            <input type="checkbox" id="dsa" name="dsa" value="dsa" />
            <label for="dsa">Data structure and Algorithm</label>
            </div>
            </div>
          </div>

          <div className="input-container">
          <label for="message">Message</label>
          <textarea placeholder="Write your message..." id="message"></textarea>
          </div>
          
          <button type="submit">Send Message</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
     </div>
      </div>
    </div>
  );
}