import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.js';
import Corpo from './Corpo.js';
import FundoMobile from './FundoMobile.js';

const root = document.querySelector(".root");

function App() {
    return (
        <div>
            <Navbar />
            <Corpo />
            <FundoMobile />
		</div>
    );
}

ReactDOM.render(App(), root);