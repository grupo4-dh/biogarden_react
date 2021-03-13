import React from 'react';
import NavButton from './NavButton';
import NavBar from './NavBar';

import avatar from '../../../assets/images/dummy-avatar.jpg';         // with import

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">            
            <NavButton/>
            <NavBar avatar = { avatar }/>
        </nav>            
    );
}

export default Nav;
