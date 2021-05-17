import React from "react";
import Account from "./Account";
import Posts from "./Posts";
import Classes from "./Classes";
import { Col, Container, Row } from "reactstrap";
import Suggested from "./Suggested";
import Homeworks from "../Homeworks/Homeworks";

function Feed({ theme, themeToggler, path }) {
  const isHomework = path === "/homeworks";

  return (
    <Container fluid={true} className="feed">
      <Row>
        <Col lg="3" md="3" className="d-lg-block d-md-none d-sm-none d-none">
          <Account theme={theme} themeToggler={themeToggler} />
        </Col>
        <Col lg="6" md="8" sm="12">
          {isHomework ? <Homeworks /> : <Posts />}
        </Col>
        <Col lg="3" md="4" sm="4" className="d-md-block d-sm-none d-none">
          {isHomework ? <></> : <Classes />}
          <Suggested />
        </Col>
      </Row>
    </Container>
  );
}

export default Feed;
