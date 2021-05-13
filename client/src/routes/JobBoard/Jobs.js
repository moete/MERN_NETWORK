import React, { useState } from "react";
import useFetchJobs from "./userFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./Job";
import JobsPagination from "./JobsPagination";
import SearchForm from "./SearchForm";
import JobModal from "./JobModal";
import UseAlan from "./chatbot/UseAlan";
import Chart from "./chart/Chart";
const jobs = ({ match }) => {
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

  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  console.log("aaaaaaaa");
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
  console.log("bbbbbbbbbbbbbbbb");
  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams(prevParams => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <Container className="my-4">
      <JobModal open={open} job={selectedJob} handleClose={handleClose} />
      <h1 className="mb-4">Networky Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1> Loading ...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map(job => {
        return (
          <Job
            key={job._id}
            job={job}
            onClick={() => {
              console.log("clicked");
              handleClickOpen();
              setselectedJob(job);
            }}
          />
        );
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
};
export default jobs;
