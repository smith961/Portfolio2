import "./AboutContentStyles.css";
import React from 'react'
import { Link } from "react-router-dom";
import octavian from "../assests/images/octavian.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> WHO AM I?</h1>
            <p>I'm a react front-end developer. I create resposive secure and discentralised websites for my clients.</p>
            <Link to="./contact">
                <button className="btn">Contact</button>
                </Link>
        </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src = {octavian} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={octavian} className="img" alt="true"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutContent