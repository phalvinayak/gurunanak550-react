import React from 'react';
import gurunanak550logo from '../../../assets/logo_sm.png';
import './NavBar.css';

const navbar = (props) => (
      <div className="Nav-settings" >
        <div className="d-flex flex-column flex-md-row align-items-center p-3  navbar-fixed-top mb-1">
          <img src={gurunanak550logo} alt="gurunanak550" style={{width: '4%', height: '4%'}}/>
          <div>
            <nav className="nav nav-masthead ">
              <a className="nav-link active" style={{fontSize: '0.60vw'}} href="#">Home</a>
              <a className="nav-link" style={{fontSize: '0.60vw'}} href="#">About EcoSikh</a>
              <a className="nav-link" style={{fontSize: '0.60vw'}} href="#">Resources</a>
              <a className="nav-link" style={{fontSize: '0.60vw'}} href="#">Contact Us</a>
              <a className="nav-link" style={{fontSize: '0.60vw'}} href="#"></a>
              <div>
                <a className="btn btn-success" style={{fontSize: '0.60vw', width: '7vw'}} href="#">LOG IN</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a className="btn btn-success" style={{fontSize: '0.60vw', width: '7vw'}} href="#">DONATE</a>
              </div>
              
            </nav>
            
          </div>
        </div>
      </div>
  
  


  // <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  //     <header class="masthead mb-auto">
  //       <div class="inner">
  //         <h3 class="masthead-brand">Cover</h3>
  //         <nav class="nav nav-masthead justify-content-center">
  //           <a class="nav-link active" href="#">Home</a>
  //           <a class="nav-link" href="#">Features</a>
  //           <a class="nav-link" href="#">Contact</a>
  //         </nav>
  //       </div>
  //     </header>
  // </div>

  // <div>
  //       <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  //       {/* <img src={{gurunanak550logo}} style={{width: '1%', height: '1%'}}/> */}
  //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
  //       <span class="navbar-toggler-icon"></span>
  //     </button>

  //     <div class="collapse navbar-collapse" id="navbarsExampleDefault">
  //       <ul class="navbar-nav mr-auto">
  //         <li class="nav-item active">
  //           <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link" href="#">Link</a>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link disabled" href="#">Disabled</a>
  //         </li>
  //         <li class="nav-item dropdown">
  //           <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
  //           <div class="dropdown-menu" aria-labelledby="dropdown01">
  //             <a class="dropdown-item" href="#">Action</a>
  //             <a class="dropdown-item" href="#">Another action</a>
  //             <a class="dropdown-item" href="#">Something else here</a>
  //           </div>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  //     </div>
    
);

export default navbar;