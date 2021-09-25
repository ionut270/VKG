import React from 'react'
import './addItem'

import { Upload, Form, Input, Button, message, DatePicker } from 'antd';
import { UploadOutlined, PlusCircleTwoTone, MinusCircleTwoTone } from '@ant-design/icons';

export default class AddItem extends React.Component {

    state = {
        title: "",
        description: "",
        details: "",
        price: "",
        extra: "",
        discount: "",
        fileList: [],
        stoc: [
            { size: "", quantity: "" }
        ]
    }

    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
        this.changeStoc = this.changeStoc.bind(this);
        this.removeStoc = this.removeStoc.bind(this);
        this.addStoc = this.addStoc.bind(this);
        this.onFinish = this.onFinish.bind(this);
        this.loadImage = this.loadImage.bind(this);
    }

    // [TODO]
    // componentDidMount() {
    //     var location = window.location.pathname.split(/\//);
    //     if (location[2]) {
    //         let state = JSON.parse(window.atob(location[2]))
    //         state.fileList = [];
    //         message.warn('Va rugam reincarcati imaginile.')
    //         window.history.replaceState({ additionalInformation: 'Updated the URL with JS' }, "Vikings Admin", `${state}`);
    //         this.setState(state);
    //     } else {
    //         let state = window.btoa(JSON.stringify(this.state))
    //         window.history.replaceState({ additionalInformation: 'Updated the URL with JS' }, "Vikings Admin", `${location[1]}/${state}`);
    //     }
    // }

    // componentDidUpdate() {
    //     var location = window.location.pathname.split(/\//);
    //     var state = window.btoa(JSON.stringify(this.state))
    //     if (location[2] !== state) {
    //         window.history.replaceState({ additionalInformation: 'Updated the URL with JS' }, "Vikings Admin", `${state}`);
    //     }
    // }

    onFinish(values) {
        const formData = new FormData();
        const state = this.state;

        state.fileList.forEach(file => {
            formData.append('files[]', file);
        });

        fetch(`${process.env.REACT_APP_SERVER}/api/item`, { method: "POST", body: formData })
            .then(res => {
                message.success('Operatia a rulat cu sucess !');
            })
            .catch(e => {
                console.error(e);
                message.error('A aparut o eroare la stergerea produsului. Va rugam reincercati mai tarziu.')
            })
    }

    onFinishFailed(e) { message.error(e) }

    changeValue(key, value) {
        var state = this.state;
        state[key] = value.target.value;
        this.setState(state);
    }
    changeStoc(index, key, value) {
        var { stoc } = this.state;
        stoc[index][key] = value.target.value;
        this.setState({ stoc: stoc })
    }
    removeStoc(index) {
        var { stoc } = this.state;
        if (stoc.length === 1) {
            message.error('Nu poti sterge toate fieldurile de stoc !')
        } else {
            var start = stoc.splice(0, index + 1);
            start.pop();
            stoc = start.concat(stoc);
            this.setState({ stoc: stoc })
        }
    }
    loadImage = file => {
        if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
            message.error(`${file.name} is not a png or jpeg file`);
            return;
        }

        this.setState(state => ({
            fileList: [...state.fileList, file],
        }));
        return false;
    }
    removeImage = file => {
        this.setState(state => {
            const index = state.fileList.indexOf(file);
            const newFileList = state.fileList.slice();
            newFileList.splice(index, 1);
            return {
                fileList: newFileList,
            };
        })
    }

    addStoc(index) {
        var { stoc } = this.state;
        var start = stoc.splice(0, index + 1);
        start.push({ size: "", quantity: "" });
        stoc = start.concat(stoc);
        this.setState({ stoc: stoc })
    }

    render() {
        const { onFinish, changeValue, loadImage, removeImage, changeStoc, removeStoc, addStoc } = this;
        const { stoc, fileList, discount } = this.state;

        return (
            <Form
                className="addItemForm"
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 19 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item label="Titlu" rules={[{ required: true, message: 'Titlu ex : Pantaloni Viking' }]}>
                    <Input onChange={(e) => { e.preventDefault(); changeValue("title", e) }} />
                </Form.Item>

                <Form.Item label="Imagini" rules={[{ required: false }]} >
                    <Upload beforeUpload={loadImage} onRemove={removeImage} fileList={fileList} multiple={true} listType="picture">
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item label="Descriere" rules={[{ required: true, message: 'Text cu descrierea produsului' }]}>
                    <Input.TextArea onChange={(e) => { e.preventDefault(); changeValue("description", e) }} placeholder="Text cu descrierea produsului" rows={4} />
                </Form.Item>

                <Form.Item label="Detalii" rules={[{ required: true, message: 'Versiune scurta a descrieriii (~ 5-10 cuvinte)' }]}>
                    <Input.TextArea onChange={(e) => { e.preventDefault(); changeValue("details", e) }} placeholder="Versiune scurta a descrieriii (~ 5-10 cuvinte)" rows={1} />
                </Form.Item>

                <Form.Item label="Pret" rules={[{ required: true, message: 'Pret in LEI' }]}>
                    <Input placeholder="Numar in lei" onChange={(e) => { e.preventDefault(); changeValue("price", e) }} suffix="RON" />
                </Form.Item>

                <Form.Item label="Stoc">
                    {stoc.map((item, key) => {
                        return (
                            <div className="line" key={key} style={{ justifyContent: "flex-start" }}>
                                <Button shape="circle" onClick={(e) => { e.preventDefault(); removeStoc(key) }} icon={<MinusCircleTwoTone twoToneColor="#eb2f96" />} />
                                &nbsp;&nbsp;
                                <Input value={item.size} onChange={(e) => { e.preventDefault(); changeStoc(key, "size", e) }} label="size" style={{ width: "100px" }} />
                                <Input placeholder="Cantitate" onChange={(e) => { e.preventDefault(); changeStoc(key, "quantity", e) }} value={item.quantity} style={{ width: "100px" }} />
                                &nbsp;&nbsp;
                                <Button shape="circle" onClick={(e) => { e.preventDefault(); addStoc(key) }} icon={<PlusCircleTwoTone twoToneColor="#52c41a" />} />
                            </div>
                        )
                    })}
                </Form.Item>

                <Form.Item label="Extra" rules={[{ required: false }]}>
                    <Input placeholder='Text scurt extra, ex : Editie limitata' onChange={(e) => { e.preventDefault(); changeValue("extra", e) }} />
                </Form.Item>

                <Form.Item label="Discount" rules={[{ required: false }]}>
                    <div className="line">
                        <DatePicker.RangePicker />
                        <Input value={discount} placeholder='Discount numar (%)' prefix="%" onChange={(e) => { e.preventDefault(); changeValue("discount", e) }} />
                    </div>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 3, span: 19 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form >
        )
    }
}