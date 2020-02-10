import React, { useContext } from "react";
import { HashRouter, Switch, Route, __RouterContext } from "react-router-dom";
import { useTransition, animated } from 'react-spring';
import Index from "./pages/App.Home";
import About from "./pages/App.About";
import Work from "./pages/App.Work";
import WorkComponent from "./components/workComponent";
import ErrorPage from "./pages/App.Error";
import SocialLinks from "./components/social";
import Header from "./components/header";
import ScrollRestoration from "./components/scrolltop";

const RouterContent = () => {
    const { location } = useContext(__RouterContext);
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    return (
        transitions.map(({ item, props, key }) => (
            <animated.div style={{ ...props, position: "absolute", height: "calc(100% - 48.4px)", width: "100%" }} key={key}>
                <Switch location={item}>
                    <Route path="/" exact component={Index} />
                    <Route path="/about/" component={About} />
                    <Route path="/work/" exact component={Work} />
                    <Route path="/work/:id" component={WorkComponent} />
                    <Route component={ErrorPage} />
                </Switch>
            </animated.div>
        ))
    )
}

class AppRouter extends React.Component {
    render() {
        return (
            <HashRouter basename='/'>
                <Header></Header>
                <RouterContent></RouterContent>
                <SocialLinks></SocialLinks>
                <ScrollRestoration />
            </HashRouter>
        )
    }
}

export default AppRouter;