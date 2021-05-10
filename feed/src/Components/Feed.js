import React from 'react';
import Account from "./Account";
import Posts from "./Posts";
import Classes from "./Classes";
import {Col, Container, Row} from "reactstrap";
import Suggested from "./Suggested";


function Feed({theme, themeToggler}) {
    return (
            <Container fluid={true}>
                <Row>
                    <Col lg="3" >
                        <Account theme={theme} themeToggler={themeToggler}/>
                    </Col>
                    <Col lg="6">
                        <Posts />
                    </Col>
                    <Col lg="3">
                        <Classes />
                        <Suggested/>
                    </Col>
                </Row>
            </Container>

    );
}

export default Feed;