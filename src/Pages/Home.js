import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";
import FoodImg from "../Images/FoodImg.jpg";
import AutomobileImg from "../Images/AutomobileImg.jpeg";
import AccomodationImg from "../Images/AccomodationImg.png";
const Home = () => {
  return (
    <>
      <div className="container6">
        <Link to="/Automobile">
        <img id="img1" src={AutomobileImg}  alt="Automobile" />
        </Link>
        <Link to="/Food">
        <img id="img1" src={FoodImg}  alt="Food"/>
        </Link>
        <Link to="/Accomodation">
        <img id="img1" src={AccomodationImg}  alt="Accomodation" />
        </Link>
      </div>
      <div >
      <ul className="container5">
        <li>
          <Link id="names1" to="/Automobile">Automobile</Link>
        </li>
        <li>
          <Link id="names2" to="/Food">Food</Link>
        </li>
        <li>
          <Link id="names3" to="/Accomodation">Accomodation</Link>
        </li>
      </ul>
      </div>
    </>
  );
};
export default Home;
