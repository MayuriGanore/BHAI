import React from "react";
import "./Pages.css";
import callImage from "../Images/call.png";
import locationImg from "../Images/location.png";
import mailImg from "../Images/mail.png";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="container1">
          <h3 id="head">CONTACT US</h3>
        </div>
      </div>
      <div className="container3">
        <div id="container3">
        <ul className="col-mg-4">
          <li className="contact-item">
            <img src={callImage} alt="Call Image" id="img" />
            <span id="text">
              Phone
              <br />
              +91 1234567891
            </span>
          </li>
          <li className="contact-item">
            <img src={mailImg} alt="Mail Image" id="img" />
            <span id="text">
              Email
              <br />
              bhaiofficial@gmail.com
            </span>
          </li>
          <li className="contact-item">
            <img src={locationImg} alt="Location Image" id="img" />
            <span id="text">
              Location
              <br />
              Hinjewadi,Pune
            </span>
          </li>
        </ul>
        </div>
      </div>
      <div className="container4">
        <div id="container4">
            <br/>
        <h2 id="texth">Subscribe to BHAI </h2>
        <h6>get quick solution to any problem...</h6>
        </div>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Enter Your Email here" aria-label="Search"/>
        <button class="btn btn-light" type="submit"><b>Submit</b></button>
      </form>
      </div>
    </div>
  );
};

export default About;
