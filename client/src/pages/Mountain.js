import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeveloperContext from "../utils/DeveloperContext";

function Mountain(props) {
  const { city } = useContext(DeveloperContext);

  useEffect(() => {
    console.log(city);
  }, []);

  return (
      <Container fluid>
        <Row>
          <h1>
            7-Day Forecast
          </h1>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>props.city</h1>
              <p>

              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Mountain;
