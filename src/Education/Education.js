import React, { Component } from 'react';
import '../bootstrap/css/bootstrap.min.css';
import './Education.scss'
import eduImg from './Uwin.png';
export default class Education extends Component{
    render(){
        return(
    <div>
        
        {/*Laptop image*/}
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 text-center pt-5">
                    <h1>Education</h1>
                    <h4>Bachelor of Science (Honours) Computer Science</h4>
                    <h5>UNIVERSITY OF WINDSOR, Windsor, ON</h5>
                    <h6>Sept 2010 - Dec 2014</h6>
                   
                </div> 
            </div>
            <div class="row">
                <div class="col-md-12 text-center pt-5">
                    <img src={eduImg} class="img-fluid"></img>
                </div> 
            </div>
        </div>

        
   
    </div>)
    }

}