import React from 'react';

import logo from '../../props/logo.png'
import './home.css'

export default class Home extends React.Component {
    render() {
        return (
        <div id="home_main">
            <div id="home_module_1">
                <img className="large_object" src={logo} />
                <p>Bine ai venit la proiectul Vikingilor</p>
            </div>
        </div>
        )
    }
}