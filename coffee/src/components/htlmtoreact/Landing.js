import React, { Component } from 'react'

export default class Landing extends Component {
    render() {
        return (
            // <div>
                
<div>

    <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">

        <div class="container">
            <a class="navbar-brand" href="#">Navbar</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="basicExampleNav">

                <ul class="navbar-nav mr-auto smooth-scroll">
                    <li class="nav-item">
                        <a class="nav-link" href="#intro">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#best-features">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#examples">Examples</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#gallery">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>

                <ul class="navbar-nav nav-flex-icons">
                    <li class="nav-item">
                        <a class="nav-link"><i class="fab fa-facebook"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><i class="fab fa-instagram"></i></a>
                    </li>
                </ul>
            </div>

        </div>

    </nav>

    <div id="intro" class="view">

        <div class="mask rgba-black-strong">

            <div class="container-fluid d-flex align-items-center justify-content-center h-100">

                <div class="row d-flex justify-content-center text-center">

                    <div class="col-md-10">

                        <h2 class="display-4 font-weight-bold white-text pt-5 mb-2">Travel</h2>

                        <hr class="hr-light"/>

                        <h4 class="white-text my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Deleniti
                            consequuntur.</h4>
                        <button type="button" class="btn btn-outline-white">Read more<i class="fa fa-book ml-2"></i></button>

                    </div>

                </div>

            </div>

        </div>

    </div>

</div>




<div class="page-footer font-small unique-color-dark" data-component="Footer">

    
    <div class="primary-color">
        <div class="container">
        
            <div class="row py-4 d-flex align-items-center">

            
                <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                    <h6 class="mb-0 white-text">Get connected with us on social networks!</h6>
                </div>
            

         
                <div class="col-md-6 col-lg-7 text-center text-md-right">
               
                    <a class="fb-ic ml-0">
                        <i class="fab fa-facebook white-text mr-4"> </i>
                    </a>
               
                    <a class="tw-ic">
                        <i class="fab fa-twitter white-text mr-4"> </i>
                    </a>
            
                    <a class="gplus-ic">
                        <i class="fab fa-google-plus white-text mr-4"> </i>
                    </a>
            
                    <a class="li-ic">
                        <i class="fab fa-linkedin white-text mr-4"> </i>
                    </a>
       
                    <a class="ins-ic">
                        <i class="fab fa-instagram white-text mr-lg-4"> </i>
                    </a>
                </div>
  

          
        </div>
    </div>
  

    
    <div class="container mt-5 mb-4 text-center text-md-left">
        <div class="row mt-3">

     
            <div class="col-md-3 col-lg-4 col-xl-3 mb-4">
                <h6 class="text-uppercase font-weight-bold">
                    <strong>Company name</strong>
                </h6>
                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;"/>
                <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit.</p>
            </div>
     

       
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase font-weight-bold">
                    <strong>Products</strong>
                </h6>
                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;"/>
                <p>
                    <a href="#!">MDBootstrap</a>
                </p>
                <p>
                    <a href="#!">MDWordPress</a>
                </p>
                <p>
                    <a href="#!">BrandFlow</a>
                </p>
                <p>
                    <a href="#!">Bootstrap Angular</a>
                </p>
            </div>
         
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase font-weight-bold">
                    <strong>Useful links</strong>
                </h6>
                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;"/>
                <p>
                    <a href="#!">Your Account</a>
                </p>
                <p>
                    <a href="#!">Become an Affiliate</a>
                </p>
                <p>
                    <a href="#!">Shipping Rates</a>
                </p>
                <p>
                    <a href="#!">Help</a>
                </p>
            </div>
 
            <div class="col-md-4 col-lg-3 col-xl-3">
                <h6 class="text-uppercase font-weight-bold">
                    <strong>Contact</strong>
                </h6>
                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;"/>
       
                <p>
                    <i class="fa fa-envelope mr-3"></i> info@example.com</p>
                <p>
                    <i class="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                <p>
                    <i class="fa fa-print mr-3"></i> + 01 234 567 89</p>
            </div>

        </div>
    </div>

    <div class="footer-copyright text-center py-3">© 2018 Copyright:
        <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
    </div>

</div>

            </div>
    
        )
    }

}
