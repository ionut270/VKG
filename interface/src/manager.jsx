import React from 'react'
import './manager.css';

import { Layout, Menu, Breadcrumb } from 'antd';
import pages from './pages/pages'
import { PageHeader } from 'antd';
const { Content, Footer, Sider } = Layout;

export default class Manager extends React.Component {
    state = {
        collapsed: false,
        activePage: pages[0]
    };

    constructor() {
        super();
        this.onPageChange = this.onPageChange.bind(this);
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    onPageChange(page) {
        this.setState({
            activePage: page
        })
    }

    render() {
        const { collapsed, pageTitle, activePage } = this.state;
        const { onPageChange } = this;
        console.log(pages);
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
                        {pages.map((page, key) => (
                            <Menu.Item key={key} onClick={() => onPageChange(page) } icon={page.icon}>
                                {page.name}
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <PageHeader className="site-layout-background" title={activePage.name} />
                    <Content style={{ margin: '0 16px' }}>
                        <br />
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {activePage.page}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Vikings ©2021</Footer>
                </Layout>
            </Layout>
        )
    }
}