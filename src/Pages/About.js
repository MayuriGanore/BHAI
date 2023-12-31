import React from "react";
import "./Pages.css";
const About = () => {
  return (
    <div>
      <div className="container">
        <div className="container1">
          <h3>ABOUT US</h3>
        </div>
        <div className="container-content">
          <div className="row">
            <div className="col-lg-4">
              <h3 id="title">Why to Choose Us.</h3>
              <p id="about">
                At ShopVista, we strive to be your preferred online shopping
                destination, offering a myriad of compelling reasons to choose
                us.We prioritize your security and convenience with a secure
                payment process and reliable checkout. Moreover, our exceptional
                customer service team is dedicated to assisting you promptly.
                Choose ShpoVista for a comprehensive and
                enjoyable online shopping experience
              </p>
            </div>
            <div className="col-lg-4">
              <h3 id="title">Our Mission.</h3>
              <p id="about">
                At ShopVista, our mission is to redefine the online shopping
                experience by providing a curated selection of high-quality
                products that cater to the diverse needs and tastes of our
                customers.Our goal is to empower individuals to make informed
                and satisfying purchase decisions. Through innovation and
                integrity creating a community of satisfied customers who choose
                ShopVista for their every need.
              </p>
            </div>
            <div className="col-lg-4">
              <h3 id="title">What We Do.</h3>
              <p id="about">
                At ShopVista, we are dedicated to revolutionizing the way you
                shop online.Our user-friendly website is designed to provide a
                seamless shopping experience.We prioritize transparency and
                offering detailed product information.With a commitment to
                excellence, we strive to go beyond just selling products-we aim
                to enhance your lifestyle by providing reliable online shopping
                destination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
