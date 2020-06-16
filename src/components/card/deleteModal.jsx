import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import cookie from 'react-cookies'

import api from '../../server-api/api'

function DeleteApartmentModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true)};
    const handleDelete = async function(){
        await api.removeApartment(props.id)
        props.setData(cookie.load('auth').id);
    }
    return (
      <>
        <button  className="deleteButton" onClick={handleShow}>delete property</button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete apartment</Modal.Title>
          </Modal.Header>
          <Modal.Body>are sure you want to delete this apartment?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="btn btn-danger" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default DeleteApartmentModal;