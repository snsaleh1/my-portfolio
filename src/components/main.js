import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';
import Testimonials from './testimonials';
import SignupPage from './signuppage';
import Login from './login';

const Main = (props) => 
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/signuppage" render={({history}) => (
            <SignupPage 
                history={history}
                handleSignupOrLogin = {props.handleSignupOrLogin}
            />
        )} />
        <Route path="/login" component={Login} />
    </Switch>


export default Main;