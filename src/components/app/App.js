import React from 'react';
import './App.css';
import {Home} from "../../views/home/Home";
import {Route} from 'react-router-dom'
import {Resume} from "../../views/resume/Resume";
import {NotFound} from "../notFound/NotFound";

function App() {
    return (
        <>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/resume'} component={Resume}/>
            <Route path={'/portafolio'} component={Resume}/>
            <Route path={'/contacto'} component={Resume}/>
            <Route path={'/blog'} component={Resume}/>
        </>
    );
}

export default App;
