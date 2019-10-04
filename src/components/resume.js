import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component{
    render(){
        return(
            <div style={{paddingTop: '60px' }}>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src="https://i.imgur.com/wheDzKD.jpg?2"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Caleb Saleh</h2>
                        <h2 style={{color: 'gray'}}>Software Developer</h2>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>LOREM IPSOM...</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Address</h5>
                        <p>Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>(614) 405-4257</p>
                        <h5>Email</h5>
                        <p>Calebsaleh1@gmail.com</p>
                        <h5>Web</h5>
                        <p>www.HouseofMediciEnterprises.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education 
                            startYear={2007}
                            endYear={2011}
                            schoolName="The Ohio State University"
                            schoolDescription="Lorem Ipsom"
                        />
                        <Education 
                            startYear={2011}
                            endYear={2013}
                            schoolName="The Chicago School of Professional Psychology"
                            schoolDescription="Lorem Ipsom"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience 
                            startYear={2015}
                            endYear={2018}
                            jobName="University of California at Los Angeles - Instructional Technologist"
                            jobDescription="- Trained working professionals online course instruction including deep dive navigation of Learning Management Systems increasing instructor retention rate by 40%
                            - Developed and organized graduate level courses using advanced media production and pedagogical design models
                            - Created and led training workshop series, supporting documentation outlining higher standards of academic content
                            - Researched new technological methods of course instruction involving simulations, labs, and virtual reality applications"
                        />
                        <Experience 
                            startYear={2018}
                            endYear={2019}
                            jobName="The Saleh Group - Business Opportunities Specialist"
                            jobDescription="- Develop persuasive techniques to acquire 30% more new sellers per month
                            - Mediate contract negotiations acting as objective liaison for both parties
                            - Manage, coach, train, and develop a team of brokers increasing to 4-man teams - Provide and prepare detailed appraisal reports to share with clients"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>

                        <Skills 
                            skill="JavaScript"
                            progress={90}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={98}
                        />
                        <Skills 
                            skill="Node.JS"
                            progress={65}
                        />
                        <Skills 
                            skill="React"
                            progress={75}
                        />
                        <Skills 
                            skill="SQL"
                            progress={75}
                        />
                        <Skills 
                            skill="Project Management"
                            progress={95}
                        />
                        <Skills 
                            skill="Conflict Resolution"
                            progress={99}
                        />
                        <Skills 
                            skill="Strategic Planning"
                            progress={85}
                        />
                        <Skills 
                            skill="Cooking"
                            progress={75}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;