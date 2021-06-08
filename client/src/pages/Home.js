import React from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
//import DeveloperContext from "../utils/DeveloperContext";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

//import { Input, TextArea, FormBtn } from "../components/Form";

function Home(props) {
  //const [ cityId, setCityId ] = useState();
  // if(props.userInfo.firstname !== "") {
  //   console.log(props.userInfo);
  // } else {
  //   console.log("did not set user")
  // }




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
                          <li className="list-group-item"  data-lon="-106.04335" data-lat="39.63026" onClick={props.handleCity}>A-Basin</li>
                          <li className="list-group-item" data-lon="-106.817543" data-lat="39.191101" onClick={props.handleCity}>Aspen</li>
                          <li className="list-group-item" data-lon="-106.038353" data-lat="39.481651" onClick={props.handleCity}>Breckenridge</li>
                          <li className="list-group-item" data-lon="-106.097519" data-lat="39.574429" onClick={props.handleCity}>Copper Mountain</li>
                          <li className="list-group-item" data-lon="-106.987823" data-lat="38.869709" onClick={props.handleCity}>Crested Butte</li>
                          <li className="list-group-item"
                          data-lon="-105.510834" data-lat="39.96138" onClick={props.handleCity}>Eldora</li>
                        </ul>
                      </Col>
                      <Col size="md-6">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item" data-lon="-105.987244" data-lat="39.59943" onClick={props.handleCity}>Keystone</li>
                          <li className="list-group-item" data-lon="-105.074982" data-lat="40.397758" onClick={props.handleCity}>Loveland</li>
                          <li className="list-group-item" data-lon="-106.831718" data-lat="40.484982" onClick={props.handleCity}>Steamboat</li>
                          <li className="list-group-item" data-lon="-107.812286" data-lat="37.937489" onClick={props.handleCity}>Telluride</li>
                          <li className="list-group-item" data-lon="-106.374199" data-lat="39.640259" onClick={props.handleCity}>Vail</li>
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
