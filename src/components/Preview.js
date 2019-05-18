import React, {Component} from 'react';
import {
  Row,
  Col,
  Container,
  Card,
  ListGroup
} from 'react-bootstrap';
import TabComponent from './TabComponent'
import "./Preview.css";
import SignatureDesign from "./SignatureDesign";

class Preview extends Component {

  render() {
    return (
      <div id="app" className="mt-4">
        <Container>
          <Row>
            <Col lg="5">
              <TabComponent/>
            </Col>
            <Col lg="7">
              <Card>
                <Card.Header className="bg-dark" style={{color:"white"}}>Preview</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>To: jhon-doe@email.com</ListGroup.Item>
                  <ListGroup.Item>Subject: Check my email signature</ListGroup.Item>
                  <ListGroup.Item>Hi David,<br/>Check out this awesome email signature created with MySignature<br/>Regards,</ListGroup.Item>
                  <SignatureDesign/>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Preview;
