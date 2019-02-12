import React, { Component } from 'react';
import '../bootstrap/css/bootstrap.min.css';
import './Experience.scss'
import ReactDOM from 'react-dom';


export default class Experience extends Component{
    constructor(props){
        super(props);
        this.expRef = React.createRef();
    }
    render(){
    return(
        <div ref={this.expRef}>
            {/*Laptop image*/}
            <div class="container-fluid">
            <div class="row">
                    <div class="col-md-12 text-center pt-5">
                        <h1>Work Experience</h1>
                    </div>
                </div>
                <div class="row p-5">
                    <div class="col-md-12 text-center pt-5 bg-light">
                        
                        <h4>Installation Specialist</h4>
                        <h5>SCIEMETRIC INSTRUMENTS INC, Windsor ON</h5>
                        <h6>Nov 2016 - Current</h6>
                        <p class="text-center">
                         
                        
                        ● Deployed proprietary quality control systems at OEM and tier 1 manufacturing facilities
                        ● Traveled globally to support the launch of new production lines
                        ● Responsible for customer support and troubleshooting of Microsoft SQL based software
                        ● Performed training in data analytics to engineers, and system maintenance to plant IT</p>
                    </div>
                </div>
                <div class="row p-5">
                <div class="col-md-12 text-center pt-5 bg-light">
                        <h4>Computer System Analyst</h4>
                        <h5>HOPKINS CANADA INC, Blenheim ON</h5>
                        <h6>May 2014 - Nov 2016</h6>
                        <p>
                        ● Lead developer of enterprise logistics application written in VB .NET with Oracle back end
                        ● Responsible for all major I.T systems such as servers - physical and virtual, disaster
                        recovery, user support, along with purchasing for all technical equipment
                        ● Deployed automated email order confirmations ranging in excess of 100 orders a day with
                        80% performance improvement over previous system
                        ● Obligated to keep extensive documentation of infrastructure changes</p>
                    </div> 
                    </div>
                
                
            </div>

            
    
        </div>)
    }

}
