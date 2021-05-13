import React, { useState } from "react";
import { Card, Badge, Button, Collapse } from "react-bootstrap";
import { notification, message } from "antd";
import axios from "axios";
import { saveAs } from "file-saver";

export default function Saved({ job, count }) {
  const BASE_URL = "https://networkymern.herokuapp.com/pdf/create-pdf";

  const [open, setOpen] = useState(false);
  const key = "updatable";

  const openNotification = () => {
    notification.open({
      message: `Your job ${job.job_id.title} is saved to pdf File`,
      description: `Maybe your next job will be located in ${job.job_id.location}`,
      onClick: () => {
        console.log("Notification Clicked!");
      }
    });
  };
  const openMessage = () => {
    message.loading({ content: "Loading...", key });
    setTimeout(() => {
      message.success({ content: "Deleted!", key, duration: 2 });
    }, 500);
  };
  const deleteJob = async postedon => {
    await axios.delete(
      "https://networkymern.herokuapp.com/postedon/deletepostedon",
      {
        data: {
          id: postedon
        }
      }
    );
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.job_id.title} -{" "}
              <span className="text-muted font-weight-light"></span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <span className="gx-mr-3">
              {job.job_id.employees_needed}{" "}
              <span className="gx-text-grey">Employess needed</span>
            </span>

            <Badge variant="secondary">{job.job_id.location}</Badge>
            <div style={{ wordBreak: "break-all" }}></div>
          </div>
          <img className="d-none d-md-block" height="50" alt="" />
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
              openMessage();
              deleteJob(job._id);
              count();
              //   createAndDownloadPdf();
            }}
          >
            Deny your applied job
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <p>{job.job_id.description} </p>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}
