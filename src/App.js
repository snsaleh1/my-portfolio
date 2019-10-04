import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import 'react-mdl/extra/material.css'; // this must be used with crete-react-app versions 0.4.+
import 'react-mdl/extra/material.js'; // this must be used with crete-react-app versions 0.4.+
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render () {
    return (
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Caleb Home</Link>} scroll>
            <Navigation>
                <Link to="/aboutme">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/testimonials">Testimonials</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <Link style={{textDecoration: 'none', color: 'black'}} to="/">Caleb Home</Link>
                <Link to="/aboutme">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/testimonials">Testimonials</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}
}

export default App;
