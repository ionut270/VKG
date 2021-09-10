import React from 'react'
import { Card, Image, Button, Divider } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import './preview.css'

export default class Preview extends React.Component {
    state = {
        shop: [
            {
                name: "Tricou Viking",
                price: "39.99 Lei",
                description: "Aratale prietenilor tai spiritul tau de viking cu un tricou sportiv realizat din materiale de calitate",
                img: "https://www.medieval-shop.co.uk/23719-large_default/black-t-shirt-viking-short-sleeve.jpg",
                link: "#"
            },
            {
                name: "Sort Viking",
                price: "29.99 Lei",
                description: "Aventureazate in apele feroce ale strandului cu sortul nostru Viking",
                img: "https://images-na.ssl-images-amazon.com/images/I/61UEML4JvEL._AC_UL1200_.jpg",
                link: "#"
            },
            {
                name: "Adidas Viking",
                price: "149.99 Lei",
                description: "Infrangeti adversarii cu la alergat cu still cu adidasii nostri",
                img: "https://i.ebayimg.com/images/g/9-oAAOSwGPNcSX2E/s-l400.jpg",
                link: "#"
            }
        ]
    }

    render() {
        return (
            <div id="preview">
                <p id='preview_title'>Produse populare</p>
                <div id="preview_items">
                    {this.state.shop.map((item, key) => (
                        <Card className="card big_object" key={key} href={item.link}>
                            <Image src={item.img} className="product_preview" />
                            <a className="card_title" href={item.link}>{item.name}</a>
                            <Divider />
                            <p className="card_description">{item.description}</p>
                            <Divider />
                            <div className="card_footer">
                                <Button icon={<DownloadOutlined />} size="middle">Adauga in cos</Button><div>{item.price}</div>
                            </div>
                        </Card>
                    ))}
                </div>
                <Button size="large" >Mergi la magazin pentru mai multe produse</Button>
            </div>
        )
    }
}