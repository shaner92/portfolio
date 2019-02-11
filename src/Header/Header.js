import React, { Component } from 'react';
import '../bootstrap/css/bootstrap.min.css';
import mainImg from './main.jpg'
import './Header.scss'

export default class Header extends Component{
    render(){
        return(
    <div>
        
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-md-12">
                    <img src={mainImg} class="img-fluid"></img>
                    
                    <div class="carousel-caption">
                        <h1>Shane Regnier</h1>
                        <br/>
                        <h2>Web Developer, Application Specialist, Home Brewer</h2>
                    </div>
                  
                    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Education</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Work Experience</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            </ul>
                    </div>
                </nav>
                </div> 
            </div>
        </div>
        
    </div>)
    }

}