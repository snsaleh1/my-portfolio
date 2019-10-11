import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import 'react-mdl/extra/material.css'; // this must be used with crete-react-app versions 0.4.+
import 'react-mdl/extra/material.js'; // this must be used with crete-react-app versions 0.4.+
import Main from '../../components/main';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
// import tokenService from './utils/tokenService';

class App extends Component {
    state = {
        isLoggedIn: false,
        user: userService.getUser(),
    }
    handleSignupOrLogin = () => {
        this.setState({
            user: userService.getUser()
        })
    }
    handleLogout = () => {
        userService.logout()
        this.setState({
            user: null
        })
    }
  render () {
      const showS = this.state.user ? null : <Link to="/signuppage">Sign Up</Link>
      const showL = this.state.user ? null : <Link to="/login">Log in</Link>
      const showLo = this.state.user ? <Link to='' onClick={this.handleLogout} >Logout</Link> : null
    return (
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Caleb Home</Link>} scroll>
            <Navigation>
                <Link to="/aboutme">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <a href ="http://localhost:4000">Testimonials</a>
                {showS}
                {showL}
                {showLo}
            </Navigation>
        </Header>
        <Drawer style={{position: 'fixed'}} title="Menu">
            <Navigation>
                <Link style={{textDecoration: 'none', color: 'black'}} to="/">Caleb Home</Link>
                <Link to="/aboutme">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <a href ="https://port-testimonials.herokuapp.com">Testimonials</a>
                {showS}
                {showL}
                {showLo}
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main 
                handleSignupOrLogin = {this.handleSignupOrLogin}
                user={this.state.user}   
                />
        </Content>
    </Layout>
</div>
  );
}
}

export default App;
