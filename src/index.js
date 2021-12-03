import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.js';
import Corpo from './components/Corpo.js';
import FundoMobile from './components/FundoMobile.js';

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