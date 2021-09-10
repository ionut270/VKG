import React from 'react';

import logo from '../../props/logo.png'
import './index'

export default class footer extends React.Component {
    render() {
        return (
        <div>
            <div id="prezentare">
                <img className="huge_object" src={logo} />
                Bine ai venit la proiectul Vikingilor
            </div>
        </div>
        )
    }
}