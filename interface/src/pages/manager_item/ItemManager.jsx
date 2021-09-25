import React from 'react';
import './itemManager.css'

import Item from '../../Components/Item/item'
import AddItem from '../../Components/addItem/addItem'

import { message, Layout, Button } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
const { Content } = Layout;

export default class ItemManager extends React.Component {
    state = {
        activeItems: []
    }
    constructor(props) {
        super(props);
        this.getItems = this.getItems.bind(this);
    }

    componentDidMount() {
        this.getItems();
    }

    getItems() {
        fetch(`${process.env.REACT_APP_SERVER}/api/item`)
            .then(res => res.json())
            .then(res => {
                this.setState({ activeItems: res })
            })
            .catch(e => {
                console.error(e);
                message.error('The request failed due to an error !');
            })
    }

    render() {
        const { activeItems } = this.state;
        const { getItems } = this;
        return (
            <div>
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24 }}>
                        <Button icon={<FileAddOutlined />}>Adauga produs</Button>
                    </div>
                </Content>
                <br />
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24 }}>
                        <AddItem />
                    </div>
                </Content>
                <br />
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24 }}>
                        {activeItems.map((item, key) => (
                            <Item getItems={getItems} item={item} key={key} />
                        ))}
                    </div>
                </Content>
            </div>
        )
    }
}