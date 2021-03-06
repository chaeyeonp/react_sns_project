import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {Menu, Input, Button, Row, Col, Card, Avatar, Form} from 'antd';
import LoginForm from "./LoginForm";

const dummy = {
    nickname: 'chaeyeon',
    Post: [],
    Following: [],
    Follower: [],
    isLoggedIn: false
};

const AppLayout = ({children}) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>Home</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile">Profile</Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{verticalAlign: 'middle'}}/>
                </Menu.Item>
            </Menu>
            <Row>
                <Col xs={24} md={6}>
                    {dummy.isLoggedIn
                    ?<Card
                        actions={[
                            <div key="twit"> 짹짹<br/>{dummy.Post.length}</div>,
                            <div key="following"> 짹짹<br/>{dummy.Post.length}</div>,
                            <div key="follower"> 짹짹<br/>{dummy.Post.length}</div>
                        ]}>
                        <Card.Meta
                            avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                            title={dummy.nickname}
                        />
                    </Card>
                  : <LoginForm/>}
                </Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6}>3</Col>


            </Row>

        </div>
    );
}

AppLayout.propTypes = {
    children: PropTypes.node,
}

export default AppLayout;