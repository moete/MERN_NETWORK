import React, { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'

export default function Job({ job}) {
  const [open, setOpen] = useState(false)

  return (
    <Card  className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} - <span className="text-muted font-weight-light">{job.company_id.company_name}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.posted_date).toLocaleDateString()}
            </Card.Subtitle>
            <span className="gx-mr-3">
                {job.employees_needed}  <span className="gx-text-grey">Employess needed</span>
            </span>

            <Badge variant="secondary" className="mr-2">{job.job_type}</Badge>
            <Badge variant="secondary">{job.location}</Badge>
            <div style={{ wordBreak: 'break-all' }}>
             
            </div>

          </div>
          <img className="d-none d-md-block" height="50" alt={job.company_id.company_name} />
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            variant="primary"
          >
            {open ? 'Hide Details' : 'View Details'}
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
