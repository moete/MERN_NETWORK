import React, { useState } from "react";
import { Card, Badge, Button, Collapse } from "react-bootstrap";
import { notification } from "antd";
import axios from "axios";
import { saveAs } from "file-saver";

export default function Job({ job, onClick }) {
  const pdfData = {
    title: job.title,
    location: job.location,
    employees_needed: job.employees_needed,
    posted_date: job.posted_date
  };

  const BASE_URL = "https://networkymern.herokuapp.com/pdf/create-pdf";

  const [open, setOpen] = useState(false);
  const openNotification = () => {
    notification.open({
      message: `Your job ${job.title} is saved to pdf File`,
      description: `Maybe your next job will be located in ${job.location}`,
      onClick: () => {
        console.log(this.pdfData);
        console.log("Notification Clicked!");
      }
    });
  };

  const createAndDownloadPdf = () => {
    axios
      .post(BASE_URL, pdfData)
      .then(() =>
        axios.get("https://networkymern.herokuapp.com/pdf/fetch-pdf", {
          responseType: "blob"
        })
      )
      .then(res => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "newPdf.pdf");
      });
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title onClick={onClick}>
              {job.title} -{" "}
              <span className="text-muted font-weight-light">
                {job.company_id.company_name}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.posted_date).toLocaleDateString()}
            </Card.Subtitle>
            <span className="gx-mr-3">
              {job.employees_needed}{" "}
              <span className="gx-text-grey">Employess needed</span>
            </span>

            <Badge variant="secondary" className="mr-2">
              {job.job_type}
            </Badge>
            <Badge variant="secondary" className="mr-2">
              {job.location}
            </Badge>
            <Badge variant="secondary" className="mr-2">
              {job.skill}
            </Badge>

            <div style={{ wordBreak: "break-all" }}></div>
          </div>
          <img
            className="d-none d-md-block"
            height="50"
            alt={job.company_id.company_name}
          />
        </div>
        <Card.Text>
          <br></br>
          <Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            variant="primary"
          >
            {open ? "Hide Details" : "View Details"}
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              console.log("clicked");
              openNotification();
              createAndDownloadPdf();
            }}
          >
            Save To Pdf
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <p>{job.description} </p>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}
