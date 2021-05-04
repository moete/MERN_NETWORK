import React from 'react'
import { Form, Col } from 'react-bootstrap'

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Titre</Form.Label>
          <Form.Control onChange={onParamChange} value={params.title} name="title" type="text" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control onChange={onParamChange} value={params.location} name="location" type="text" />
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Label>Job Type</Form.Label>
          <Form.Control onChange={onParamChange} value={params.job_type} name="job_type"  as="select"  defaultValue=''>
             <option value="">No preferences</option>

              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Remote">Remote</option>
            </Form.Control>
         
        </Form.Group>
    
      </Form.Row>
    </Form >
  )
}
