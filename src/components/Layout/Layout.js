import React, { Component } from 'react';
import NavBar from '../Navigation/NavBar/NavBar';
import Carousel from '../Carousel/Carousel';

const layout = ( props ) => (
    <React.Fragment>
        <div>
            <NavBar />  
            <Carousel />       
        </div>
        <main>
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;