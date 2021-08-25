import { Button } from 'antd';
import React from 'react';

import { Avatar, Menu, Dropdown, Badge } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import logo from '../../props/logo.png'
import './header.css'

const profileDropdown = (<Menu>
    <Menu.Item key="0">
        <a href="/profile">Profil</a>
    </Menu.Item>
    <Menu.Item key="1">
        <a>Comenzi</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
        <a>Log Out</a>
    </Menu.Item>
</Menu>)

export default class header extends React.Component {
    render() {
        return (
            <div className="header_class">
                <div className="header_space"></div>
                <Button className="header_option" href="/home">Acasa</Button>
                <Button className="header_option" href="/shop">Magazin</Button>
                <img className="header_logo" src={logo} />
                <Button className="header_option" href="/about">Despre</Button>
                <Button className="header_option" href="/contact">Contact</Button>

                <div className="header_extra">
                    <a href="#">
                        <Badge className="header_shopping_cart" count={5}>
                            <ShoppingCartOutlined className="header_cart" />
                        </Badge>
                    </a>
                    <Dropdown overlay={profileDropdown}>
                        <Avatar size={40} icon={<UserOutlined />} />
                    </Dropdown>,
                </div>

            </div>
        )
    }
}