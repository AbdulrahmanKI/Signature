import React, {Component} from 'react'
import {Form, Col, Row} from 'react-bootstrap';

class ArabicForm extends Component {
  render() {
    return (
      <Form className="mt-2 justify   p-1 ">
        <Form.Group as={Row} controlId="formPlaintextName">
          <Col sm="7">
            <Form.Control className="text-right" type="text" placeholder="...محمد"/>
          </Col>
          <Form.Label column sm="5" className="text-right">
            الأسم الكامل
          </Form.Label>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextJobTitle">
          <Col sm="7">
            <Form.Control type="text" className="text-right" placeholder="المسمى الوظيفي"/>
          </Col>
          <Form.Label column className="text-right" sm="5">
            المسمى الوظيفي
          </Form.Label>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextDepartment">
          <Col sm="7">
            <Form.Control type="text" className="text-right" placeholder="القسم"/>
          </Col>
          <Form.Label className="text-right" column sm="5">
            القسم
          </Form.Label>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextMobile">
          <Col sm="7">
            <Form.Control className="text-right" type="tel" placeholder="05xxxxxxxx"/>
          </Col>
          < Form.Label className="text-right" column sm="5">
            الجوال
          </Form.Label>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Col sm="7">
            <Form.Control
              className="text-right"
              type="email"
              placeholder="email@example.com"/>
          </Col>
          <Form.Label className="text-right" column sm="5">
            البريد الإلكتروني
          </Form.Label>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextWebsite">
          <Col sm="7">
            <Form.Control className="text-right" type="url" placeholder="www.example.com"/>
          </Col>
          <Form.Label className="text-right" column sm="5">
            الموقع الشخصي
          </Form.Label>
        </Form.Group>
      </Form>
    )
  }
}

export default ArabicForm;
