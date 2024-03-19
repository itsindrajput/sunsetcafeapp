import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="address">
          <address>
            <h3>Address</h3>
            <ul>
              <li>Cafe</li>
              <li>Plot No. 45, Street No.14</li>
              <li>Marol MIDC Industry Estate,</li>
              <li>Andheri East,Mumbai-400093</li>
            </ul>
          </address>
        </div>
        <div className="help-info">
          <h3>Help &amp; Info</h3>
          <ul>
            <li>About Cafe</li>
            <li>Careers</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <ul>
            <li>1809-908-5647</li>
            <li>Get in Touch</li>
            <li>Chat With Us</li>
          </ul>
        </div>
        <div className="useful-links">
          <h3>Useful Links</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Payment Issues</li>
            <li>Net Banking</li>
            <li>Custom Order</li>
          </ul>
        </div>
        {/*Html code for mobile view begins here*/}
        <div className="footer-dropdown-content">
          <div className="footer-dropdown">
            <legend>
              About Us <FontAwesomeIcon icon={faAngleDown} />
            </legend>
            <div className="dropdown-options">
              <a href="#">About Cafe</a>
              <a href="#">Careers</a>
              <a href="#">FAQs</a>
            </div>
          </div>
          <div className="footer-dropdown">
            <legend>
              Terms <FontAwesomeIcon icon={faAngleDown} />
            </legend>
            <div className="dropdown-options">
              <a href="#">Copyright</a>
              <a href="#">Terms Of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="footer-dropdown">
            <legend>
              Services <FontAwesomeIcon icon={faAngleDown} />
            </legend>
            <div className="dropdown-options">
              <a href="#">Book A Table</a>
              <a href="#">Net Banking</a>
              <a href="#">Custom Order</a>
            </div>
          </div>
          <div className="footer-dropdown">
            <legend>
              Contact Us <FontAwesomeIcon icon={faAngleDown} />
            </legend>
            <div className="dropdown-options">
              <a href="#">Call Us</a>
              <a href="#">Email Us</a>
              <a href="#">Chat With Us</a>
            </div>
          </div>
        </div>
      </div>
      <div className="social-icons">
        <span>Follow Us On:</span>
        <a href="https://www.facebook.com/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.whatsapp.com/" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </div>
      <div className="copyright">
        <h4>@2023 Railworld India. All Rights Reserved.</h4>
      </div>
    </footer>
  );
};

export default Footer;
