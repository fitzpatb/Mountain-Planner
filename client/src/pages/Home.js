import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeveloperContext from "../utils/DeveloperContext";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

function Home(props) {






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
                <Row>
                  <div className="card">
                    <Row>
                      <div className="card-header">
                        Available Resorts
                      </div>
                    </Row>
                    <Row>
                      <Col size="md-6">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"><button value="Arrapahoe Basin" onClick={props.handleCity}>A-Basin</button></li>
                          <li className="list-group-item"
                          onClick={props.handleCity}
                          name="Aspen"
                          >Aspen</li>
                          <li className="list-group-item">Beaver Creek</li>
                          <li className="list-group-item">Breckenridge</li>
                          <li className="list-group-item">Copper Mountain</li>
                          <li className="list-group-item">Crested Butte</li>
                          <li className="list-group-item">Eldora</li>
                        </ul>
                      </Col>
                      <Col size="md-6">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Keystone</li>
                          <li className="list-group-item">Loveland</li>
                          <li className="list-group-item">Steamboat</li>
                          <li className="list-group-item">Telluride</li>
                          <li className="list-group-item">Vail</li>
                          <li className="list-group-item">Winter Park</li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </Row>
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
