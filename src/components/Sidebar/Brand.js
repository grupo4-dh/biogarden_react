import React from 'react';
import '../../assets/css/app.css';
import logo from '../../assets/images/logo.png';

function Brand() {
    return (
        <div>
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '10em'}} src={logo} alt="Logo"/>
                </div>
                <div className="sidebar-brand-text mx-3">Admin</div>
            </a>
            <hr className="sidebar-divider my-0"/>
        </div>
    );
}

export default Brand;
