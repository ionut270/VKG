import React from 'react'
import './manager.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Layout, Menu } from 'antd';
import pages from './pages/pages'
import { PageHeader } from 'antd';
const { Footer, Sider } = Layout;

export default class Manager extends React.Component {
    state = {
        collapsed: false,
        activePage: pages[0],
        activeIndex : "0"
    };

    constructor() {
        super();
        this.onPageChange = this.onPageChange.bind(this);
    }

    componentDidMount(){
        const location = window.location.pathname.split(/\//);
        if(!location[1]){
            window.location = this.state.activePage.name;
        } else {
            let i = pages.findIndex(x=>x.name === decodeURI(location[1]));
            this.setState({
                activePage: pages[i],
                activeIndex: ""+i
            })
        }
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    onPageChange(page) {
        let i = pages.findIndex(x=>x.name === page.name);
        this.setState({
            activePage: page,
            activeIndex: ""+i
        })
    }

    render() {
        const { collapsed, activePage, activeIndex } = this.state;
        const { onPageChange } = this;
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" selectedKeys={[activeIndex]} mode="inline">
                            {pages.map((page, key) => (
                                <Menu.Item key={key} to="/about" onClick={() => onPageChange(page)} icon={page.icon}>
                                    <Link to={`/${page.name}`}>{page.name}</Link>
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <PageHeader className="site-layout-background" title={activePage.name} />
                        <br />
                        <Switch>
                            {pages.map((page,key) => {
                                return (<Route key={key} path={`/${page.name}`}>
                                    {page.page}
                                </Route>)
                            })}
                        </Switch>
                        <Footer style={{ textAlign: 'center' }}>Vikings ©2021</Footer>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}