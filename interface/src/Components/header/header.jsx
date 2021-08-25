import React from 'react';

import { Avatar, Menu, Dropdown, Badge, Button } from 'antd';
import { UserOutlined, ShoppingCartOutlined, HomeOutlined, ShopOutlined, InfoCircleOutlined, MessageOutlined } from '@ant-design/icons';

import Cartdropdown from '../cart/cart'

import logo from '../../props/logo.png'
import './header.css'

const profileDropdown = (
    <Menu>
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
    </Menu>
)

export default class header extends React.Component {

    render() {
        const { items } = this.props;
        const changeQuantity = this.props.changeQuantity;

        return (
            <div className="header_class">
                {/* Just empty space to center the menu */}
                <div className="header_space"></div>

                <Button className="header_option" href="/home">
                    <HomeOutlined />Acasa
                </Button>
                <Button className="header_option" href="/shop">
                    <ShopOutlined />Magazin
                </Button>

                <img className="header_logo" src={logo} alt="vikings logo" />

                <Button className="header_option" href="/about">
                    <InfoCircleOutlined />Despre
                </Button>
                <Button className="header_option" href="/contact">
                    <MessageOutlined />Contact
                </Button>

                <div className="header_extra">
                    <Dropdown overlay={Cartdropdown(items,changeQuantity)}>
                        <Badge className="header_shopping_cart" count={items.length}>
                            <ShoppingCartOutlined className="header_cart" />
                        </Badge>
                    </Dropdown>
                    <Dropdown overlay={profileDropdown}>
                        <Avatar className="profile_icon" icon={<UserOutlined />} />
                    </Dropdown>
                </div>
            </div>
        )
    }
}