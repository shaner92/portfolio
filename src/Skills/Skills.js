import React, { Component } from 'react';
import '../bootstrap/css/bootstrap.min.css';
import './Skills.scss'
import '../fontawesome-free-5.7.1-web/css/all.min.css'

export default class Skills extends Component{
    render(){
        return(
    <div>
        
        {/*Laptop image*/}
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 text-center pt-5">
                    <h1>Skills</h1>
                </div>
            </div>
            <div class="row p-5">
            <div class="col-md-3 center-block text-center">
                <i className ="fab fa-html5 fa-9x"></i>
                <p>place holder text</p>
            </div>
            <div class="col-md-3 center-block text-center">
                <i className ="fab fa-css3-alt fa-9x"></i>
                <p>place holder text</p>
            </div>
            <div class="col-md-3 center-block text-center">
                <i className ="fab fa-react fa-9x"></i>
                <p>place holder text</p>
            </div>
            <div class="col-md-3 center-block text-center">
                <i className ="fab fa-js fa-9x"></i>
                <p>place holder text</p>
            </div>
            </div>
            <div class="row p-5">
            <div class="col-md-3 center-block text-center">
                <i className ="fab fa-node fa-9x"></i>
                <p>place holder text</p>
            </div>
            <div class="col-md-3 center-block text-center">
                <i className ="fas fa-database fa-9x"></i>
                <p>place holder text</p>
            </div>
            <div class="col-md-3 center-block text-center">
                <i className ="fab fa-react fa-9x"></i>
            </div>
            <div class="col-md-3 center-block text-center">
                <i className ="fab fa-github fa-9x"></i>
            </div>
            </div>
        </div>

        
   
    </div>)
    }

}