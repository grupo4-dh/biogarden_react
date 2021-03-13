import React from 'react';          // Permite crear interfaces
import ReactDOM from 'react-dom';   // Permite crear interfaces entre la web
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
