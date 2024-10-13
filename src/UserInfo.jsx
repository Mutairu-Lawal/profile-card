import React from "react";
import Button from "./Button";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const UserInfo = () => {
  return (
    <div className="container card--details p-4">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="card--title mb-1">Lawal Mutairu</h2>
          <p className="card--subtitle">Frontend Developer</p>
          <a href="mailto:lawalmuktair@gmail.com" className="card--email">
            lawalmuktair@gmail.com
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex mt-3">
          <Button>
            <MdEmail className="me-2 fs-4" /> <p>Email</p>
          </Button>
          <Button bg="linkedin-btn ms-3">
            <FaLinkedin className="me-2 fs-4" /> <p>Linkedin</p>
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="card--description mt-3">
          <div className="description mb-3">
            <h1>About</h1>
            <p className="mt-1">
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
          <div className="description">
            <h1>Interest</h1>
            <p className="mt-1">
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
