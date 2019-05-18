import React, {Component} from 'react'
import {Form, Col, Row} from 'react-bootstrap';
import {connect} from "react-redux";
import {Name,Email,JobTitle,Department,Mobile,Website} from "../Redux/action";

class EnglishForm extends Component {


  setNameValue = event => {this.props.name(event.target.value)}
  setEmailValue = event => {this.props.email(event.target.value)}
  setJobTitleValue = event => {this.props.jobTitle(event.target.value)}
  setDepartmentValue = event => {this.props.department(event.target.value)}
  setMobileValue = event => {this.props.mobile(event.target.value)}
  setWebsiteValue = event => {this.props.website(event.target.value)}

  render() {
    return (
        <Form className="mt-sm-1 justify p-1 border-0 " >
        <Form.Group as={Row} controlId="formPlaintextName">
            <Form.Label column sm="3" >
              Full Name
            </Form.Label>
            <Col sm="9">
              <Form.Control type="text"  onChange={this.setNameValue} placeholder="Mohamed..."/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextJobTitle">
            <Form.Label column sm="3" >
             Job Title
            </Form.Label>
            <Col sm="9">
              <Form.Control type="text" onChange={this.setJobTitleValue} placeholder="Job Title"/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextDepartment">
            <Form.Label column sm="3">
            Department
            </Form.Label>
            <Col sm="9">
              <Form.Control type="text" onChange={this.setDepartmentValue} placeholder="Department"/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextMobile">
            <Form.Label column sm="3">
            Mobile
            </Form.Label>
            <Col sm="9">
              <Form.Control type="tel" onChange={this.setMobileValue} placeholder="05xxxxxxxx"/>
            </Col>
          </Form.Group>


          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="3">
              Email
            </Form.Label>
            <Col sm="9">
              <Form.Control type="email" onChange={this.setEmailValue} placeholder="email@example.com"/>
            </Col>
          </Form.Group>

          <Form.Group as={Row}  controlId="formPlaintextWebsite">
            <Form.Label column sm="3">
            Website
            </Form.Label>
            <Col sm="9">
              <Form.Control type="url" onChange={this.setWebsiteValue} placeholder="www.example.com"/>
            </Col>
          </Form.Group>
        </Form>
   
    );
  }
}

function mapDispatchToProps(dispatch) {
  return{
    name : (name) => dispatch(Name(name)),
    email : (email) => dispatch(Email(email)),
    jobTitle: (job) => dispatch(JobTitle(job)),
    department: (department) => dispatch(Department(department)),
    mobile: (mobile) => dispatch(Mobile(mobile)),
    website: (website) => dispatch(Website(website)),
  }
}


export default connect (null,mapDispatchToProps) (EnglishForm);
