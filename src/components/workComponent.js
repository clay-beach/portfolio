import React from "react";
import { Link } from "react-router-dom";
import Image1 from '../img/mock.jpg';
import Image2 from '../img/mock2.jpg';
import Image3 from '../img/mock3.jpg';
import Image4 from '../img/mock4.jpg';

const matrix = {
    mountain: {
        img: Image2,
        title: "Mountain Website Concept",
        desc: "lorem ipsum dolar"
    },
    aviation: {
        img: Image1,
        title: "Aviation Website Design",
        desc: "lorem ipsum dolar"
    },
    construction: {
        img: Image4,
        title: "Construction Website Design",
        desc: "lorem ipsum dolar"
    },
    construction2: {
        img: Image3,
        title: "Construction Website Design",
        desc: "lorem ipsum dolar"
    }
}

function WorkComponent(props) {
    var settings = matrix[props.match.params.id];
    return (
        <div className="page-content work">
            <Link className="btn" to="/work">Return to work</Link>
            <img src={settings.img} alt="" />
        </div>
    )
}

export default WorkComponent;