import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/ASO-CODE" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/solomon-awanle-258950136"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://twitter.com/SAwanle" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
