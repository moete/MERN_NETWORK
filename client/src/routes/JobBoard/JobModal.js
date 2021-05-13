import React, { useState, useEffect } from "react";
//import { getProfiles } from "../../../src/appRedux/actions/profile"
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

export default function JobModal({ open, job, handleClose }) {
  //console.log(profile)
  const data = {
    description: job.description,
    job_id: job._id,
    skill: job.skill,
    user_id: localStorage.getItem("user_id")
  };
  // console.log(localStorage.getItem("user_id"))
  console.log(job.skill);
  //if(!job.skill)
  const handleSubmit = async e => {
    await axios.post("https://networkymern.herokuapp.com/postedon", data);
  };

  if (!job.title) {
    return <div> </div>;
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
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit();
              console.log("submitted");
              handleClose();
            }}
          >
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
