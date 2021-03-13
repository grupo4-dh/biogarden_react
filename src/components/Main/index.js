import React from 'react';

import Nav from './Nav';
import Container from './Container';
import Footer from './Footer';

function Main() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">    
            <div id="content">
                <Nav/>
                <Container/>
            </div>
            <Footer/>
        </div>
    );
}

export default Main;
