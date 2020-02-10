import React from "react";
import { useSpring, animated } from 'react-spring';
import { ReactComponent as Img } from "../img/code.svg";

const Hero = (props) => {
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
    const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
    const [props2, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 250, friction: 240 } }));

    return (
        <div className="hero" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <div className="hero__text">
                <h4 className="hero__name">{props.name}</h4>
                <h3 className="hero__title">Frontend Developer <br /><span className="color__orange">&</span> Designer</h3>
            </div>
            <animated.div style={{ transform: props2.xy.interpolate(trans1), height: "70%", width: "50%" }}>
                <Img className="motion-image" />
            </animated.div>
        </div>
    )
}

class Index extends React.Component {
    render() {
        return (
            <Hero name='Clay Beauchamp' />
        )
    }
}

export default Index;