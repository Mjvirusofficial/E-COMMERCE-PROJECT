import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
// import { Auth0Provider } from '@auth0/auth0-react';
import { CartProvider } from 'react-use-cart';

ReactDOM.render(

    <BrowserRouter>
        <CartProvider>
            {/* domain="mjvirus.us.auth0.com"
            clientId="X11bfM7pT720prQGowOBWCAZKWRhzP3e"
            redirectUri={window.location.origin}> */}
            <App />
        </CartProvider>
    </BrowserRouter>, document.getElementById('root')
)