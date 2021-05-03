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
          <Form.Check onChange={onParamChange} value={params.job_type} name="job_type" id="job_type" label="Only Full Time" type="checkbox" className="mb-2" />
        </Form.Group>
      </Form.Row>
    </Form>
  )
}
