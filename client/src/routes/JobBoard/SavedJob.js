import React, { useState } from 'react';
import userFetchedSavedJobs from './userFetchedSavedJobs'
import { Container } from 'react-bootstrap'
import Job from './Job'
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';
import JobModal from './JobModal';
import UseAlan from './chatbot/UseAlan';
import Chart from './chart/Chart';
import Saved from './Saved' ;
import axios from 'axios' ;
const SavedJob = ({ match }) => {

  /** ********BEGIN ALAN AI******** */
  UseAlan();
  /** *********END ALAN AI******* */


  const [open, setOpen] = useState(false);
  const [selectedJob, setselectedJob] = useState({});
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { savedjobs, loading, error } = userFetchedSavedJobs(params)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }
  const handleDelete = async (e) =>{
    const res = await axios.delete('http://localhost:5000/postedon/deletepostedon');

  }

  return (

    <Container className="my-4">
      <h1 className="mb-4">Networky Jobs</h1>
      {loading && <h1> Loading ...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {savedjobs.map(job => {

        return <Saved key={job._id}
          job={job}
          onClick={() => {
            console.log('clicked');
            handleClickOpen();
            setselectedJob(job)
          }}

        />
      })}
    </Container>
  )
}
export default SavedJob;


