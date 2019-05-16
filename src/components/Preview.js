import React, {Component} from 'react';
import {
  Row,
  Col,
  Container,
  Card,
  ListGroup
} from 'react-bootstrap';
import Tabs from './Tabs'
import "./Preview.css";

class Preview extends Component {

  render() {
    return (
      <div id="app" className="mt-4">
        <Container>
          <Row>
            <Col lg="5">
              <Tabs/>
            </Col>
            <Col lg="7">
              <Card>
                <Card.Header>Preview</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>To: jhon-doe@email.com</ListGroup.Item>
                  <ListGroup.Item>Subject: Check my email signature</ListGroup.Item>
                  <ListGroup.Item>Hi David,<br/>Check out this awesome email signature created with MySignature<br/>Regards,</ListGroup.Item>
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
