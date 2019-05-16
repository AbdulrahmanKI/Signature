import React, {Component} from 'react'
import {Form, Col, Row} from 'react-bootstrap';

class EnglishForm extends Component {
  render() {
    return (
        <Form className="mt-2 justify border border-secondary rounded-sm p-1">
        <Form.Group as={Row} controlId="formPlaintextName">
            <Form.Label column sm="3">
              Full Name
            </Form.Label>
            <Col sm="9">
              <Form.Control type="text" placeholder="Mohamed..."/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextJobTitle">
            <Form.Label column sm="3">
             Job Title
            </Form.Label>
            <Col sm="9">
              <Form.Control type="text" placeholder="Job Title"/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextDepartment">
            <Form.Label column sm="3">
            Department
            </Form.Label>
            <Col sm="9">
              <Form.Control type="text" placeholder="Department"/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextMobile">
            <Form.Label column sm="3">
            Mobile
            </Form.Label>
            <Col sm="9">
              <Form.Control type="tel" placeholder="0555555555"/>
            </Col>
          </Form.Group>


          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="3">
              Email
            </Form.Label>
            <Col sm="9">
              <Form.Control type="email" placeholder="email@example.com"/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextWebsite">
            <Form.Label column sm="3">
            Website
            </Form.Label>
            <Col sm="9">
              <Form.Control type="url" placeholder="www.example.com"/>
            </Col>
          </Form.Group>
        </Form>
   
    );
  }
}

export default EnglishForm;