import React, { Component } from 'react';
import '../bootstrap/css/bootstrap.min.css';
import mainImg from './main.jpg';
import './Header.scss';
import '../fontawesome-free-5.7.1-web/css/all.min.css'

export default class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
    <div>
        
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-md-12">
                    <div class="thumbnail text-primary">
                        <img src={mainImg} class="img-fluid"></img>
                        <div class="caption post-content">
                        <h1>Shane Regnier</h1>
                        <h2>Web Developer, Application Specialist, Home Brewer</h2>
                    
            <div class="row">
                            <div class="col-md-4 col-xs-4">
                                <i className ="fab fa-github fa-3x"></i>
                            </div>
                            <div class="col-md-4 col-xs-4">
                            <i class="fab fa-linkedin fa-3x"></i>
                            </div>

                        </div>
                    </div>
                </div>
                   
               </div>  
            </div>
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg fixed-top">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                            <a class="nav-link" href="#" onClick = {window.scrollTo(0, 0)}>Home <span class="sr-only">(current)</span></a>
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
                                <a class="nav-link" href="#"> Work Experience</a>
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