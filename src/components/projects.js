import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions } from 'react-mdl';


class Projects extends Component{
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '176px', background: 
                    'url(https://i.imgur.com/HQVaEQM.png) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                        REP YOUR CITY - JavaScript/HTML/CSS  
                    </CardText>
                    <CardActions border>
                    <a href ="https://github.com/snsaleh1/GAProject1">CODE____________________</a>
                    <a href ="http://rep-your-city-ga19.surge.sh/">LIVE DEMO</a>
                    </CardActions>
                </Card>
                </div>
            )
        } //else if(this.state.activeTab === 1) {
        //     return(
        //         <div className="projects-grid">
        //             {/* Project 2 */}
        //         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        //             <CardTitle style={{color: 'black', height: '176px', background: 
        //             'url(https://i.imgur.com/r3eun0n.png) center / cover'}} ></CardTitle>
        //             <CardText style={{fontWeight: 'bold'}}>
        //                 FAMILY EVENTS - Express/Node.JS   
        //             </CardText>
        //             <CardActions border>
        //             <a href ="https://github.com/snsaleh1/project2">CODE____________________</a>
        //             <a href ="https://github.com/snsaleh1/project2">LIVE DEMO</a>
        //             </CardActions>
        //         </Card>
        //         </div>
        //     )
        // } 
            else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                    {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://i.imgur.com/abzkLR6.png) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                        Weather Tracker - REACT/JS   
                    </CardText>
                    <CardActions border>
                    <a href ="https://github.com/snsaleh1/weather-app">CODE____________________</a>
                    <a href ="https://caleb-city-weather.herokuapp.com/">LIVE DEMO</a>
                    </CardActions>
                </Card>
                    {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://i.imgur.com/gqLwdjY.png) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                        Recipe Finder - REACT/JS
                    </CardText>
                    <CardActions border>
                    <a href ="https://github.com/snsaleh1/recipe-app">CODE____________________</a>
                    <a href ="http://caleb-react-recipe.herokuapp.com/">LIVE DEMO</a>
                    </CardActions>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                    {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '176px', background: 
                    'url(https://i.imgur.com/LpOpzGv.jpg) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                        EVENTUS - Python/Django/API   
                    </CardText>
                    <CardActions border>
                    <a href ="https://github.com/snsaleh1/EventUs">CODE____________________</a>
                    <a href ="https://unit3eventus.herokuapp.com/">LIVE DEMO</a>
                    </CardActions>
                </Card>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>"JavaScript"</Tab>
                    <Tab>"React"</Tab>
                    <Tab>"Python / Django"</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;