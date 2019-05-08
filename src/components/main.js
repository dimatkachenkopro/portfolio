import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import LandingPage from './landingpage';
import Projects from './projects';


const Main = () => (<
    Switch >
    <
        Route exact path="/portfolio"
        component={
            LandingPage
        }
    />
    <
        Route path="/projects"
        component={
            Projects
        }
    />  </Switch >
)

export default Main;