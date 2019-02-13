import React, { Component } from 'react';
import '../bootstrap/css/bootstrap.min.css';
import './Footer.scss';

export default class Footer extends Component{
    render(){
        return(
    <div>

<footer class="page-footer font-small indigo">
    <div class="container text-center text-md-left"> 
        <div class="row">
            <div class="col-md-12 mx-auto text-center">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Contact Me</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 mx-auto text-center">
               
                <ul class="list-unstyled">
                    <li>
                    <a href="#!">Very long link 1</a>
                    </li>
                    <li>
                    <a href="#!">Very long link 2</a>
                    </li>
                    <li>
                    <a href="#!">Very long link 3</a>
                    </li>
                    <li>
                    <a href="#!">Very long link 4</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 mx-auto text-center">
                <ul class="list-unstyled">
                    <li>
                    <a href="#!">Very long link 1</a>
                    </li>
                    <li>
                    <a href="#!">Very long link 2</a>
                    </li>
                    <li>
                    <a href="#!">Very long link 3</a>
                    </li>
                    <li>
                    <a href="#!">Very long link 4</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
    </div>
</footer>
   


    </div>)
    }

}