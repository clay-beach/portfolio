import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./App.Router";
import 'normalize.css';
import "./sass/app.scss";

const App = () => {
    return (
        <AppRouter></AppRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
