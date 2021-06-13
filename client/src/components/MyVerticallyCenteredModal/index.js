import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Diver Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6" id="modal-pic">
              <img className="driver-pic" src="profile-image.png" alt="placeholder"></img>
            </div>
            <div className="col-6" id="modal-content">
              <ul>Driver
                <li id="modal-driver">{props.modalDriver.firstname}</li>
                <li id="modal-driver">{props.modalDriver.lastname}</li>
                <li id="modal-driver">{props.modalDriver.username}</li>
                <li id="modal-driver">{props.modalDriver.email}</li>
              </ul>
              <ul>Car
                <li id="modal-car">{props.modalCar.make}</li>
                <li id="modal-car">{props.modalCar.model}</li>
                <li id="modal-car">{props.modalCar.year}</li>
                <li id="modal-car">{props.modalCar.color}</li>
              </ul>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default MyVerticallyCenteredModal;