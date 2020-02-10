import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

class Social extends React.Component {
    render() {
        return (
            <div className="social">
                <a href="https://www.linkedin.com/in/clay-beauchamp/" target="_blank" className="social__linkedin" rel="noopener noreferrer"><FiLinkedin /></a>
                <a href="https://github.com/clay-beach/" target="_blank" className="social__github" rel="noopener noreferrer"><FiGithub /></a>
            </div>
        )
    }
}

export default Social;