import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardMenu, IconButton } from 'react-mdl';
import './aboutme.css';


class Aboutme extends Component{
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '250px', background: 
                    'url(https://i.imgur.com/8jll1oH.jpg) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                        WORK - 22 year-old Caleb wanted nothing more than to help those dealing with internal struggles to get out of their own way and realize their true potential. So he moved to Los Angeles to acquire a Masters in Clinical Psychology with a specialization in Marriage and Family Therapy.
                    </CardText>
                </Card>
                    <a className="uclaLink" href ="https://www.youtube.com/watch?v=G07aMODcUxE">SANTA MONICA RUGBY CLUB</a>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '250px', background: 
                    'url(https://i.imgur.com/RwrOk6v.jpg) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                        PLAY - In every city he finds the closest Rugby team and picks up the perfect stress reliever and a new family to match.
                    </CardText>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '250px', background: 
                    'url(https://i.imgur.com/QbUGuhb.jpg) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                    ALL WORK NO PLAY - The wait list alone for Marine Officer Candidate School can be up to two years. After physical assessments, early morning trainings, recommendation interviews, fitness challenges, and a year of waiting, Caleb was selected to be part of the next class of Officer Candidates.  
                    </CardText>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                    <a className="uclaLink" href ="https://www.youtube.com/watch?v=RtGJr01hrWA">MARINE OCS 218</a>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '250px', background: 
                    'url(https://i.imgur.com/VWZNIOl.jpg) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                    ALL WORK NO PLAY - To be present at the very source of many PTSD instances overseas, Caleb made it to Quantico VA for Winter OCS 218. Although was never commissioned as an Officer of the Marine Corp, it was an invaluable learning experience dealing with leadership, physical/mental strength, and discipline.  
                    </CardText>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                    {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '250px', background: 
                    'url(https://i.imgur.com/bwSh8iL.jpg) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                        WORK - Caleb's opportunities took him to Los Angeles again where he trained working professionals how to teach their craft at UCLA Extension's Business and Technology departments, all while researching new technologies to incorporate into curriculums.
                    </CardText>
                </Card>
                <a className="uclaLink" href ="https://www.youtube.com/watch?v=Y4gp_MsRAaQ&feature=youtu.be">UCLA FAM</a>
                    {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '250px', background: 
                    'url(https://i.imgur.com/VnnTGbS.jpg) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                        PLAY - Rugby is damn near perfection, but have you ever played it on the beach until it's too dark to see the ball? Everyone finds their happy place. Santa Monica is definitely one of them. #beachboks
                    </CardText>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div className="projects-grid">
                    {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '250px', background: 
                    'url(https://i.imgur.com/G8qu1vV.jpg) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                        WORK - After administrative difficulties and inevitable layoffs, Caleb made the decision to more directly serve the community and pursue a career as a firefighter in Denver while utilizing his new certification as an Emergency Medical Technician. 
                    </CardText>
                </Card>
                <a className="uclaLink" href ="https://www.youtube.com/watch?v=dCv4lwGgQEg">STADIUM MEDICAL</a>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '250px', background: 
                    'url(https://i.imgur.com/Qy1WKXv.jpg) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                        PLAY - Despite being passed over for the DFD, his time as an EMT allowed him to oversee the streets of Denver AND special events including concerts, sporting events, and festivals. A great time and as always, he learned a ton. 
                    </CardText>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 4) {
            return(
                <div style={{paddingTop: '50px'}} className="nextChap-projects-grid">
                    <div className="nextChap">
                        <h1>The Final Chapter...For Now</h1>
                        <h3>Austin, TX</h3>
                    </div>
                    <div className="nextChapCard">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '250px', background: 
                    'url(https://i.imgur.com/Wv03f3g.jpg) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                        WORK
                    </CardText>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '250px', background: 
                    'url(https://i.imgur.com/t0XEr6P.jpg) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                        WORK
                    </CardText>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '250px', background: 
                    'url(https://i.imgur.com/ayqsErh.jpg) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                        WORK
                    </CardText>
                    <br></br>
                    <br></br>
                    <br></br>
                    </Card>
                    </div>
                    <div className="nextChapCard">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '250px', background: 
                    'url(https://i.imgur.com/wrHHON3.jpg) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                        PLAY
                    </CardText>
                    <br></br>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '250px', background: 
                    'url(https://i.imgur.com/ANkUZHW.jpg) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                        PLAY
                    </CardText>
                    <br></br>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '250px', background: 
                    'url(https://i.imgur.com/IYAeGJH.jpg) center / cover'}} ></CardTitle>
                    <CardText style={{fontWeight: 'bold'}}>
                        PLAY
                    </CardText>
                    </Card>
                    </div>
                </div>
            )
        }
    }
    
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>"Clinical Psychology"</Tab>
                    <Tab>"US Marine Corps"</Tab>
                    <Tab>"UCLA"</Tab>
                    <Tab>"EMT"</Tab>
                    <Tab>"New HoM.e"</Tab>
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

export default Aboutme;