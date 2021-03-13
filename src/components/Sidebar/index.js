import React from 'react';
import Brand from './Brand';
import Title from './Title';
import Actions from './Actions';

import '../../assets/css/app.css';      // Importamos el css con los estilos

function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">    
            <Brand/>
            <Title/>
            <Actions/>
        </ul>
    );
}

export default Sidebar;
