import React, { useState,useEffect } from 'react';
import { getProfiles } from "../../../appRedux/actions/profile";
import { Modal , Button } from 'react-bootstrap' ; 
import axios from 'axios' ;

export default function JobModal ( {open,job,handleClose,getProfiles, profile: { profiles }}) {
  useEffect(() => {

    getProfiles();
  }, []);
  console.log(profile)
   const data = {
     description : job.description,
     job_id : job._id ,
     user_id : localStorage.getItem('user_id')
   }
   console.log(localStorage.getItem("user_id"))

   const handleSubmit = async (e) => {
    await axios.post('http://localhost:5000/postedon', data);        
};

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
          <Button variant="primary"  onClick={() => {
           

            handleSubmit();
            console.log('submitted');
            handleClose();
          }}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}