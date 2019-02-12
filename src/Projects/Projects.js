import React, { Component } from 'react';
import '../bootstrap/css/bootstrap.min.css';
import './Projects.scss'

export default class Projects extends Component{
    render(){
        return(
    <div>
        
        {/*Laptop image*/}
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 text-center pt-5">
                    <h1>Projects</h1>
                </div> 
            </div>
            <div class="row">
                <div class="col-md-4 text-center pt-3">
                    <h1>Hopkins Logis</h1>
                </div> 
                <div class="col-md-4 text-center pt-3">
                    <h1>Data Visualization</h1>
                </div> 
                <div class="col-md-4 text-center pt-3">
                    <h1>Ecommerce</h1>
                </div> 
            </div>
        </div>

        
   
    </div>)
    }

}