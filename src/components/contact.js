import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid style={{borderRadius: '10%'}} className="contact-grid">
                    <Cell col={6}>
                        <h2>Caleb Saleh</h2>
                        <img 
                            src="https://i.imgur.com/c3OPaVJ.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', fontSize: '16px'}}>
                            I'm always looking for an excuse to try a new restaurant here in Austin so if you have any questions about programming, would like to bounce ideas, or just catch up, please feel free to contact me anytime.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                        <List>
                            {/* <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                 Cell: 614-405-4257 
                                </ListItemContent>
                            </ListItem> */}
                            <ListItem>
                                <ListItemContent style={{fontSize: '24px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                 Calebsaleh1@gmail.com 
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '24px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-video-camera" aria-hidden="true" />
                                 https://zoom.us/j/5474927184 
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '24px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-video-camera" aria-hidden="true" />
                                 Zoom ID: 547-492-7184 
                                </ListItemContent>
                            </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;