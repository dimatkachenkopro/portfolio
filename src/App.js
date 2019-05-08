import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">My Portfolio</Link>} scroll>
                    <Navigation>
                        <Link to="/projects">Projects</Link>
                    </Navigation>
                </Header>
                <Drawer title="My Portfolio">
                    <Navigation>
                        <Link to="/projects">Projects</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
    );
}

export default App;
