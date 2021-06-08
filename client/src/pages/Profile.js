import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid";

function Profile() {
  const [profile, setProfile] = useState({
    first: "",
    last: "",
    username: "",
    email: ""
  })

  return (
    <Container fluid>
      <Row>
        <Col size="6">
          <img src="profile-image.png" />
        </Col>
        <Col size="6">
          <div className="card">
            <div className="card-header">
              User Profile
            </div>
            <div className="card-body">
              <ul>
                <li>
                  Name: {profile.first} {profile.last}
                </li>
                <li>
                  Username: {profile.username}
                </li>
                <li>
                  Email: {profile.email}
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="6">

        </Col>
        <Col size="6">

        </Col>
      </Row>
    </Container>
  )
}

export default Profile;