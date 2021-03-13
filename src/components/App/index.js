import React from 'react';
import Main from '../Main';
import Sidebar from '../Sidebar';
import '../../assets/css/app.css';      // Importamos el css con los estilos

function App() {
    return (
        <div id="wrapper">
            <Sidebar/>
            <Main/>
        </div>
    );
}

export default App;
