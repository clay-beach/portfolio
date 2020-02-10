import React from "react";
import { FaAdobe, FaAws, FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaGulp, FaHtml5, FaJs, FaLess, FaNodeJs, FaPython, FaJava, FaReact } from "react-icons/fa";
import { DiJqueryLogo, DiSass, DiUnitySmall } from "react-icons/di";

const descriptions = {
    Adobe: {
        title: "Adobe Suite",
        content: "Experience with Photoshop, Illustrator, Indesign, XD & Affinity Designer by Serif."
    },
    HTML5: {
        title: "HTML5",
        content: "Very proficient in writing semantic html."
    },
    CSS3: {
        title: "CSS3",
        content: "Heavy usage of CSS & preprocessors."
    },
    SASS: {
        title: "SASS",
        content: "My go to choice for a CSS preprocessors."
    },
    LESS: {
        title: "LESS",
        content: "Another preprocessor I have used on multiple projects."
    },
    Bootstrap: {
        title: "Bootstrap 3/4",
        content: "Very familiar with this framework & also Zurb Foundation."
    },
    AWS: {
        title: "AWS",
        content: "Have used multiple services: Lambda, DynamoDB, S3, CodeCommit, CloudWatch & looking to expand this knowledge."
    },
    JS: {
        title: "JavaScript",
        content: "My main language that I use on a day to day basis."
    },
    Jquery: {
        title: "Jquery",
        content: "Extensive knowledge of Jquery - useful for maintaining legacy applications."
    },
    React: {
        title: "React",
        content: "Currently in the process of learning this framework - this site is built with React."
    },
    Node: {
        title: "Node JS",
        content: "Exposure to Node when creating AWS Lambdas, another area I will continue to expand."
    },
    Gulp: {
        title: "Gulp",
        content: "My task runner of choice, I use this to automate all the annoying processes."
    },
    GIT: {
        title: "GIT",
        content: "Familiar with pull requests, branching & merging"
    },
    Github: {
        title: "Github",
        content: "Familiar with the Github ecosystem, this site is running from a Github page."
    },
    Python: {
        title: "Python",
        content: "Language I used to learn data structures & algorithms."
    },
    Java: {
        title: "Java",
        content: "My first language, it's been a while since I've used this one."
    },
    Unity: {
        title: "Unity 3D",
        content: "My focus at University, familiar with the engine & C#."
    }
}

const Tooltip = (props) => {
    return (
        <div className="tooltip">
            <div className="tooltip-title">{descriptions[props.lookup].title}</div>
            <div className="tooltip-content">{descriptions[props.lookup].content}</div>
        </div>
    )
}

const Tool = (props) => {
    return (
        <div className="tools-item">
            {props.icon}
            <Tooltip lookup={props.title} />
        </div>
    )
}

class Tools extends React.Component {
    render() {
        return (
            <div className="tools">
                <Tool title="Adobe" icon={<FaAdobe />}></Tool>
                <Tool title="HTML5" icon={<FaHtml5 />}></Tool>
                <Tool title="CSS3" icon={<FaCss3Alt />}></Tool>
                <Tool title="SASS" icon={<DiSass />}></Tool>
                <Tool title="LESS" icon={<FaLess />}></Tool>
                <Tool title="Bootstrap" icon={<FaBootstrap />}></Tool>
                <Tool title="AWS" icon={<FaAws />}></Tool>
                <Tool title="JS" icon={<FaJs />}></Tool>
                <Tool title="Jquery" icon={<DiJqueryLogo />}></Tool>
                <Tool title="React" icon={<FaReact />}></Tool>
                <Tool title="Node" icon={<FaNodeJs />}></Tool>
                <Tool title="Gulp" icon={<FaGulp />}></Tool>
                <Tool title="GIT" icon={<FaGitAlt />}></Tool>
                <Tool title="Github" icon={<FaGithub />}></Tool>
                <Tool title="Python" icon={<FaPython />}></Tool>
                <Tool title="Java" icon={<FaJava />}></Tool>
                <Tool title="Unity" icon={<DiUnitySmall />}></Tool>
            </div >
        )
    }
}

export default Tools;