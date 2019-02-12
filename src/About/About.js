import React, { Component } from 'react';
import '../bootstrap/css/bootstrap.min.css';
import './About.scss'

export default class About extends Component{
    render(){
        return(
    <div>
        
        {/*Laptop image*/}
        <div class="container-fluid">
            <div class="row p-5">
            <div class="col-md-2 bg-light">
            </div>
                <div class="col-md-8 text-center pt-5 bg-light">
                    <h1 id="About">About</h1>
                    <p>
                        I am an individual who is fascinated with learning. 
                        I am passionately interested in Education, People, and Tech.
                        My passion for education and learning makes me an active listener, 
                        a curious individual, and inevitably a lifelong learner. 
                        I see myself as a self-starter and a driven learner, 
                        also enjoying a stimulating conversation, a strongly supported argument. 
                        I enjoy the challenge of problem solving, analytical thinking , 
                        being an innovative learner, and a versatile athlete. 
                        My interests are also hiking, good music, 
                        football and most importantly revamping my baking and cooking skills.
                        </p>
                </div> 
                <div class="col-md-2 bg-light">
            </div>
            </div>
        </div>

        
   
    </div>)
    }

}