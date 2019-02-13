import React, { Component } from 'react';
import '../bootstrap/css/bootstrap.min.css';
import './About.scss'

export default class About extends Component{
    render(){
        return(
    <div>
        {/*Laptop image*/}
        <div class="container-fluid container-about">
            <div class="row">
                <div class="col-md-12 text-center pt-5">
                    <h1>About</h1>
                </div>
            </div>
            <div class="row p-5">
                <div class="col-md-4 text-center border-right">
                    <i className ="fas fa-beer fa-9x"></i>
                    <p>I work with HTML5, CSS3 and pure JavaScript. I love coding as such and I am currently learning cool JS frameworks and libraries.</p>
                </div>
                <div class="col-md-4 text-center border-right">
                    <i className ="fas fa-gamepad fa-9x"></i>
                    <p>I work with HTML5, CSS3 and pure JavaScript. I love coding as such and I am currently learning cool JS frameworks and libraries.</p>
                </div>
                <div class="col-md-4 text-center">
                    <i className ="fas fa-football-ball fa-9x"></i>
                    <p>I work with HTML5, CSS3 and pure JavaScript. I love coding as such and I am currently learning cool JS frameworks and libraries.</p>
                </div>
            </div>
         
            </div>
        </div>

    )
    }

}