import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


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
                    <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}} >Rep Your City</CardTitle>
                    <CardText>
                        Lorem Impsum   
                    </CardText>
                    <CardActions border>
                        <Button colored>Preparation</Button>
                        <Button colored>Code</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                    {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}} >Your Family App</CardTitle>
                    <CardText>
                        Lorem ipsom   
                    </CardText>
                    <CardActions border>
                        <Button colored>Preparation</Button>
                        <Button colored>Code</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                    {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}} >Weather Tracker</CardTitle>
                    <CardText>
                        Lorem ipsom   
                    </CardText>
                    <CardActions border>
                        <Button colored>Preparation</Button>
                        <Button colored>Code</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                    {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}} >Recipe Finder</CardTitle>
                    <CardText>
                        Lorem Impsum   
                    </CardText>
                    <CardActions border>
                        <Button colored>Preparation</Button>
                        <Button colored>Code</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div className="projects-grid">
                    {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}} >Eventus</CardTitle>
                    <CardText>
                        Lorem Impsum   
                    </CardText>
                    <CardActions border>
                        <Button colored>Preparation</Button>
                        <Button colored>Code</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 4) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}} >Coming Soon</CardTitle>
                    <CardText>
                        Lorem Impsum   
                    </CardText>
                    <CardActions border>
                        <Button colored>Preparation</Button>
                        <Button colored>Code</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
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
                    <Tab>"Express Node.js"</Tab>
                    <Tab>"React"</Tab>
                    <Tab>"Python / Django"</Tab>
                    <Tab>"HoM.e"</Tab>
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