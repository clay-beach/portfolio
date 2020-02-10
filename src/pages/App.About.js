import React from "react";
import Img from "../img/developer.svg";
import Tools from "../components/tools.js";

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="page-content flex">
                    <div className="about-description">
                        <h2>Who am I</h2>
                        <p>
                            My name is Clay, I'm a Web Developer with a passion for a rich user experience & coffee. Currently I build client applications that enhance business processes and provide in-depth reporting functionality, working primarily with <span className="highlight">JavaScript</span>, <span className="highlight">HTML</span> and <span className="highlight">SASS</span>.
                            I am familiar with both functional and object oriented coding paradigms, but tend to favour the functional style.
                            In the past I worked as an Interactive Designer, creating eCommerce websites and designing advertisement material (both print and web), whilst completing my bachelor of Multimedia.
                        </p>
                    </div>
                    <div className="about-img">
                        <img src={Img} alt="profile"></img>
                    </div>
                </div>
                <div className="page-content page-content__grey">
                    <Tools />
                </div>
            </div>
        )
    }
}

export default About;