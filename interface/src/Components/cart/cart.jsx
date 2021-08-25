import React from 'react';
import { Image, Button, Divider, Menu, Spin  } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import './cart.css'

function App(items, changeQuantity) {
    return (
        <Menu className="cart_menu">
            <table>
                {items.map((item, index) =>
                    <tr key={index}>
                        <td><Image width={30} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" /></td>
                        <td>{item.name}</td>
                        <td>{item.size}</td> &nbsp;&nbsp;
                        <td>{item.price} Lei</td> &nbsp;&nbsp;
                        <td>
                            <Button
                                shape="circle"
                                size="small"
                                onClick={(e) => { e.preventDefault(); changeQuantity(index, "+") }}
                            >
                                <PlusOutlined />
                            </Button> &nbsp;
                            {item.quantity} &nbsp;
                            <Button
                                shape="circle"
                                size="small"
                                danger
                                onClick={(e) => { e.preventDefault(); changeQuantity(index, "-") }}
                            >
                                <MinusOutlined />
                            </Button>
                        </td>
                    </tr>
                )}
            </table>
            <Divider dashed />
            <Button>Checkout</Button>
        </Menu>
    )
}

export default App;