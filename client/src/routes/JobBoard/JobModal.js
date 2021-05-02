import React, { useState } from 'react';
import { Modal , Button } from 'react-bootstrap' ; 

export default function JobModal ( {open,job,handleClose}) {

   const data = {
     description : job.description
   }
   console.log(data)
  if(!job.title) {
    return (<div>   </div>) ;
  }
  return (
    <>
      

      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {job.title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>{job.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}