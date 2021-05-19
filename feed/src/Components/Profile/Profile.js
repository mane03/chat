import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileNavigation from "./ProfileNavigation";
import { Col, Container, Row } from "reactstrap";
import Posts from "../Feed/Posts";

function Profile(props) {

  return (
    <Container>
      <Row>
        <Col ls="12">
          <div className="profile">
            <ProfileHeader path={props.match.path}/>
            <ProfileNavigation />
          </div>
        </Col>
        </Row>
      <Row>
        <Col lg={{size: 8, offset: 2}}>
          <Posts/>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
