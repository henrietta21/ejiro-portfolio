import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Contact.css"; // Import your CSS file for styling
import Nav from "../Nav/Nav";

const Contact = () => {
  const { isDark } = useTheme();
  return (
    <div className={`content-page  ${isDark ? "dark" : "light"}`}>
      <div className="top_nav">
        <Nav />
      </div>
      <div className="contact">
        <form className="contact_form">
          <div className="form_header">
            <h4>
              Thank you for <span>reaching out</span>
            </h4>
            <p>
              You can reach me anytime via{" "}
              <a href="#">
                <i>ejiro104real@gmail.com</i>
              </a>
            </p>
          </div>

          <div className="form_row">
            <div className="half_width">
              <label for="firstName">First name</label>
              <input id="firstName" type="text" placeholder="First name" />
            </div>

            <div className="half_width">
              <label for="lastName">Last name</label>
              <input id="lastName" type="text" placeholder="Last name" />
            </div>
          </div>

          <div className="form_row">
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="you@company.com" />
          </div>

          <div className="form_row">
            <label for="message">Message</label>
            <textarea id="message" placeholder="Leave a message..."></textarea>
          </div>

          <button className="send_button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
