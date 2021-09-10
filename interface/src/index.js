import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import { Layout } from 'antd';

import Header from './Components/header/header.jsx'
import Footer from './Components/footer/footer.jsx'

import Home from './Pages/home/index';
import Shop from './Pages/shop/shop';

import './index.css'

class App extends React.Component {
  state = {
    items: [
      {
        key: '1',
        name: 'Viking Shirt',
        color: 'Red',
        size: "L",
        quantity: '2',
        price: 80,
      },
      {
        key: '2',
        name: 'Viking Shorts',
        color: 'Red',
        size: "L",
        quantity: '1',
        price: 90,
      },
      {
        key: '3',
        name: 'Viking Underwear',
        color: 'blue',
        size: "L",
        quantity: '4',
        price: 50,
      },
    ]
  }
  
  constructor(props) {
    super(props);
    this.changeQuantity = this.changeQuantity.bind(this)
  }

  changeQuantity(index, action) {
    var state = this.state;
    if (action === "+") {
      state.items[index].quantity++
    } else {
      state.items[index].quantity--
      if (state.items[index].quantity === 0) {
        delete state.items[index];
      }
    }
    this.setState(state)
  }

  render() {

    const { items } = this.state;
    const { changeQuantity } = this;

    return (
      <Layout>
        <Layout.Header><Header items={items} changeQuantity={changeQuantity} /></Layout.Header>
        <Layout.Content><Shop /></Layout.Content>
        <Layout.Footer><Footer /></Layout.Footer>
      </Layout>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));