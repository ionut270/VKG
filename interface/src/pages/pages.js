import React from 'react'
import {
    ShoppingCartOutlined,
    UserSwitchOutlined,
    BarcodeOutlined,
    MessageOutlined,
    AreaChartOutlined
} from '@ant-design/icons';

import ItemManager from './manager_item/ItemManager'

const pages = [
    {
        name: "Manager Produse",
        icon: <ShoppingCartOutlined />,
        page: <ItemManager />
    },
    {
        name: "Utilizatori",
        icon: <UserSwitchOutlined />,
        page: ''
    },
    {
        name:"Manager Comenzi",
        icon: <BarcodeOutlined />,
        page: ''
    },
    {
        name: "Mesaje clienti",
        icon: <MessageOutlined />,
        page: ''
    },
    {
        name : "Statistici",
        icon : <AreaChartOutlined />,
        page : ""
    }
]

export default pages;
