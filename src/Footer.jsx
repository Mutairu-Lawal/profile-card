import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 footer">
            <FaSquareXTwitter className="fs-2" />
            <FaFacebookSquare className="fs-2" />
            <SlSocialInstagram className="fs-2" />
            <FaLinkedin className="fs-2" />
            <FaGithubSquare className="fs-2" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
