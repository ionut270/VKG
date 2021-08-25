import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import Header_ from './Components/header/header.jsx'
import Footer_ from './Components/footer/footer.jsx'

import Home from './Pages/index'

import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header><Header_ /></Header>
        <Content><Home /></Content>
        <Footer><Footer_ /></Footer>
      </Layout>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));