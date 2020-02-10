import React from "react";
import { Link } from "react-router-dom";
import Image1 from '../img/1.png';
import Image2 from '../img/2.png';
import Image3 from '../img/3.png';
import Image4 from '../img/4.png';
import Image5 from "../img/movie-search.jpg";

const list = [{
    key: 5,
    img: undefined,
    title: "Development Work",
    style: "bg__white",
    target: undefined,
    desc: "I have worked on a number of projects whilst in my current position as a web developer. Primarily I use JavaScript, AWS, HTML and SASS on a day to day basis, utilising various libraries to create complex applications that meet client requirements. These applications can vary greatly in scope but will generally serve the purpose of improving a clients business processes (Document Automation, Task Workflows, Reporting Functionality). Previously I also created eCommerce websites for clients in the Construction and Agriculture industry. These sites had a heavy focus on UI/UX and SEO. If you would like to talk about any of my work or see examples please contact me via LinkedIn.",
    desc2: "",
    btn: ""
},
{
    key: 6,
    img: Image5,
    title: "Movie Search Application",
    style: "",
    target: "https://github.com/clay-beach/movie-search",
    desc: "This small application was created with the functionality to render movie details and reviews by querying the themoviedb.org api. The app is constructed utilising vanilla javaScript and SASS, in combination with the fetch api to make calls. The app also uses Anime.js for some small animations and readMore.js to handle content that was too large for the page.",
    desc2: "",
    btn: "View on github"
},
{
    key: 1,
    img: Image2,
    title: "Mountain Website Concept",
    style: "reverse",
    target: "/work/mountain",
    desc: "This design is intended to play with the balance of the layout, by intentionally offsetting titles and allowing content to flow into the space of other sections. This allows for a modern and clean design. The header and footer are the same image split with a mountain range silhouette to create a uniformity between the top and bottom of the page.",
    btn: "View full design"
},
{
    key: 2,
    img: Image1,
    title: "Aviation Website Design",
    style: "",
    target: "/work/aviation",
    desc: "This design incorporates a monotone colour palette, with an orange highlight to emphasise key features and information. The functionality includes an inventory search form and contact form, as key aspects of the client business requirements.",
    btn: "View full design"
},
{
    key: 3,
    img: Image4,
    title: "Construction Website Design",
    style: "reverse",
    target: "/work/construction",
    desc: "This design features the use of a background pattern and colour theory to integrate the site content into the overall design, easing the transition between sections.",
    btn: "View full design"
},
{
    key: 4,
    img: Image3,
    title: "Construction Website Design",
    style: "",
    target: "/work/construction2",
    desc: "This was an early concept that I created when i began doing designs, although it is not my best work, I believe it's important to demonstrate the growth I have had over the years.",
    btn: "View full design"
}];

const Btn = ({ target, text }) => {
    if (target.indexOf("http") !== -1) {
        return <a className="btn section-btn" href={target} target="_blank" rel="noopener noreferrer">{text}</a>
    }
    return <Link className="btn section-btn" to={target}>{text}</Link>
};

const Section = ({ styleName, src, title, children, buttonTarget, buttonTxt }) => {
    let sectionClass = src !== undefined ? "section-container" : "hide";
    let sectionClass2 = src !== undefined ? "section-container" : "section-container__fullWidth";
    return (
        <div className={`section ${styleName}`}>
            <div className={sectionClass}>
                <img src={src} className="section-img" alt="" />
            </div>
            <div className={sectionClass2}>
                <h2 className="section-title">{title}</h2>
                <div className="section-description">{children}</div>
                {buttonTarget !== undefined && <Btn target={buttonTarget} text={buttonTxt}></Btn>}
            </div>
        </div>
    )
};

class Work extends React.Component {
    render() {
        return (
            <div className="page-content__no-pad">
                {list.map(item => (
                    <Section src={item.img} title={item.title} styleName={item.style} buttonTarget={item.target} buttonTxt={item.btn} key={item.key}>
                        <p>{item.desc}</p>
                        <p style={{ marginTop: "30px" }}>{item.desc2}</p>
                    </Section>
                ))}
            </div>
        )
    }
};

export default Work;