import React from 'react';
import logo from '../../props/logo.png'

import { Breadcrumb } from 'antd';
import './landscape.css'
import './portrait.css'

export default class footer extends React.Component {
    render() {
        return (
            <div className="footer_class">
                <img src={logo} className="footer_logo" />
                <p>Vikings 2021 All rights reserved</p>
                <Breadcrumb>
                    <Breadcrumb.Item className="footer_item">
                        <a href="">Contact</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="footer_item">
                        <a href="">Home</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}