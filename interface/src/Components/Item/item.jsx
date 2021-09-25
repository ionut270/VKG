import React from 'react';
import { Card, Avatar, Tag, message, Popconfirm } from 'antd';
import { EditOutlined, EllipsisOutlined, DeleteOutlined, SyncOutlined, StarOutlined } from '@ant-design/icons';
import './item.css'

const { Meta } = Card;

export default class Item extends React.Component {
    state = {
        visible: false,
        loading: false
    }

    constructor(props) {
        super(props);
        this.deleteItem     = this.deleteItem.bind(this);
        this.showPopConfirm = this.showPopConfirm.bind(this);
    }

    deleteItem = () => new Promise((resolve, reject) => {
        this.setState({loading: true})
        fetch(`${process.env.REACT_APP_SERVER}/api/item?id=${this.props.item.itemId}`, { method: "DELETE" })
            .then(res => {
                this.props.getItems();
                this.setState({loading: false, visible: false});
                message.success('Operatia a rulat cu sucess !');
                resolve()
            })
            .catch(e => {
                console.error(e);
                message.error('A aparut o eroare la stergerea produsului. Va rugam reincercati mai tarziu.')
                reject();
            })
    })
    
    showPopConfirm  (){ this.setState( {visible: true } ); }
    handleCancel    (){ this.setState( {visible: false} ); }

    render() {
        const { item } = this.props;
        const { visible, loading } = this.state;
        const { showPopConfirm, handleCancel, deleteItem } = this;
        return (
            <Card style={{ width: 300, marginTop: 16 }}
                actions={[
                    <Popconfirm
                        title="Esti sigur ca vrei sa stergi acest produs ?"
                        visible={visible}
                        onConfirm={deleteItem}
                        okButtonProps={{ loading: loading }}
                        onCancel={handleCancel}
                    ><DeleteOutlined key="setting" onClick={showPopConfirm} /></Popconfirm>,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}>
                <Meta
                    avatar={<Avatar shape="square" size={100} src={item.print} />}
                    title={item.title}
                    description={item.details}
                />
                <br />
                <div className="label_list">
                    <Tag color={item.stoc < 10 ? "red" : "green"} >Stoc : {item.stoc}</Tag >
                    <Tag color="processing" icon={<SyncOutlined spin />} >Comenzi : 50</Tag >
                    <Tag color="gold" >Vanzari : 100 </Tag >
                    <Tag color="gold" icon={<StarOutlined spin />}> Rating : {item.rating}/5 </Tag >
                    <Tag> Pareri : 500 </Tag >
                </div>
            </Card>)
    }
}