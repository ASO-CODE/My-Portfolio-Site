import React from "react";
import "./footer.css";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ASO-CODE
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://now.com" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://now.com" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://now.com" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; ASO-CODE. <span id="date">{new Date().getFullYear()}</span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
