import React, { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import {notification} from 'antd'
import axios from 'axios';
import { saveAs } from 'file-saver';

export default function Saved({ job}) {
  
 
  console.log(job)
  const BASE_URL = 'http://localhost:5000/pdf/create-pdf' ;
  
  const [open, setOpen] = useState(false)
  const openNotification = () => {
    notification.open({
      message: `Your job ${job.title} is saved to pdf File`,
      description:
        `Maybe your next job will be located in ${job.location}`,
      onClick: () => {
    
        console.log('Notification Clicked!');
      },
    });
  };
  
 
 
  

  return (
    <Card className="mb-3">
      <Card.Body  >
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title   >
              {job.title} - <span className="text-muted font-weight-light"></span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.posted_date).toLocaleDateString()}
            </Card.Subtitle>
            <span className="gx-mr-3">
                {job.employees_needed}  <span className="gx-text-grey">Employess needed</span>
            </span>

            <Badge variant="secondary">{job.location}</Badge>
            <div style={{ wordBreak: 'break-all' }}>
             
            </div>

          </div>
          <img className="d-none d-md-block" height="50" alt="" />
        </div>
        <Card.Text>
          <br></br>
          <Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            variant="primary"
          >
            {open ? 'Hide Details' : 'View Details'}
          </Button>
          <Button 
           variant="primary"
           onClick = {() => {
            console.log('clicked');
            openNotification() ;
         //   createAndDownloadPdf();
          }}
           >
             Deny your applied job 
           </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <p >{job.description} </p>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  )
}
