import React from "react";
import { Col, Container, Row } from "reactstrap";

function Header() {
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <div className="header">
            <h2 className="header__title">Code Republic Social Network</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
