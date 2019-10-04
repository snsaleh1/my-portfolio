import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component{
    render(){
        return(
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://i.imgur.com/h7jbqrD.png?1"
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr />

                            <p>HTML/CSS | JavaScript | Python | React | NodeJS | Express | MongoDB | SQL | Project Management </p>

                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/calebsaleh/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            {/* Github */}
                            <a href="https://github.com/snsaleh1" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                            {/* Medium */}
                            <a href="https://medium.com/@snsaleh11" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-medium" aria-hidden="true" />
                            </a>
                            {/* Youtube */}
                            {/* <a href="https://github.com/snsaleh1" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a> */}

                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;