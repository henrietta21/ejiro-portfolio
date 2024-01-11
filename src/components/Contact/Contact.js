import React from 'react';
import styles from'./Contact.module.css'; // Import your CSS file for styling
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top_nav}>
        <Link to="/">&lt; Back</Link>
        <Nav />
      </div>
      

      <div className={styles.contact}>
        <form className={styles.contact_form}>
        
            <div className={styles.form_header}>
              <h4>Thank you for <br/>reaching out</h4>
              <p>You can reach me anytime via <a href='#'><i>ejiro104real@gmail.com</i></a></p>
            </div>

            <div className={styles.form_row}>
              <div className={styles.half_width}>
                <label for='firstName'>First Name</label>
                <input id='firstName' wtype="text" placeholder="First Name" />
              </div>

              <div className={styles.half_width}>
                <label for='lastName'>Last Name</label>
                <input id='lastName' type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className={styles.form_row}>
              <label for='email'>Email</label>
              <input id='email' type="email" placeholder="you@company.com" />
            </div>

            <div className={styles.form_row}>
              <label for='message'>Message</label>
              <textarea id='message' placeholder="Leave a message..."></textarea>
            </div>
             
            <button className={styles.send_button}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
