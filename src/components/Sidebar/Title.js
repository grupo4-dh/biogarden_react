import React from 'react';
import '../../assets/css/app.css';      // Importamos el css con los estilos

function Title() {
    return (
        <div>
            <li className="nav-item active">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
            </li>
            <hr className="sidebar-divider"/>
        </div>
    );
}

export default Title;