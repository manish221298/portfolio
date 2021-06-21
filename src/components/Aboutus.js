import React from 'react';
import Navitem from "./Navitem"
import manish from "../picture/manish.jpg"
import ReactTypingEffect from 'react-typing-effect';

function Aboutus(props) {
    return (
        <div>
            <div className="left">
                <Navitem />
            </div>
            <div className="right">
                <div style={{paddingTop: "5rem"}}  className="aboutus_left">
                    <img src={manish} alt="ProfilePic" className="profilepic"></img>
                </div>
                <div style={{paddingTop: "5rem"}}  className="aboutus_right">
                    <ReactTypingEffect className="typeeffect" text={["Hey ! I am Manish", "A Programmer", "Web Developer", "Full-Stack Developer"]} />
                </div>
                <div className="aboutus_bottom">
                    <h1 style={{paddingLeft: "3rem", fontFamily: "sans-serif"}}>About Me :-</h1>
                    <p className="para" style={{margin: "1rem 1rem 1rem 1rem", paddingLeft: "2rem"}}>Hi, I am Manish</p>
                    <p className="para">In 2020, I successfully completed my Engineering with specialization in 'Computer Science & Engineering.
                    Along with that, I also completed Six months of training on MERN STACK TECHNOLOGY in my last semester of Engineering.</p>
                    <p className="para">Full Stack Developer with Exposure in JavaScript Technology such as ReactJS, Redux, NodeJS, ExpressJs & mongoDB.
                    </p>
                    <p className="para">Love to build websites and web applications. I'm a quick Lerner and always try to give my best.
                    </p>
                    <b className="para">See More: </b>
                    <a href="https://www.linkedin.com/in/manish-kumar-1b8b1b13a/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACH7QFwBqTUzD4FM2K6yqVWAUu-_cLeeVR4,1609331396420)/" target="_blank" rel="noopener noreferrer">
                <button className="m-2" variant="outline-info">
                     <strong>MY RESUME</strong>
                </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;