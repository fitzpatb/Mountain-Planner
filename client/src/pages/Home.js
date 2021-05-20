import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import mountainPic from "../Assets/images/mountainCarpool.jpeg"

function Home() {
  useEffect(() => {
    console.log(API)
  })

    return (
      <Container fluid>
        <Row>
          <Jumbotron>
              <h1>Mountain Carpool</h1>
              <p>Plan a trip to the mountains and have a some new friends join you!</p>
          </Jumbotron>
          <Col size="md-10">
            <Row>
              <Col size="md-6">

              </Col>
            </Row>
            <Row>
              <Col size="md-6">

              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }


export default Home;
