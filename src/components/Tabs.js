import React from "react";
import {Nav, Tab,Container} from 'react-bootstrap';
import GeneralTab from "./GeneralTab";

class Tabs extends React.Component {

  render() {
    return (
      <Container>
        <Tab.Container>
        <Nav justify variant="tabs" defaultActiveKey="General">
            <Nav.Item>
              <Nav.Link eventKey="General">General</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Social">Social</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Image">Image</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Style">Style</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="General">
             <GeneralTab/>
            </Tab.Pane>
            <Tab.Pane eventKey="Social"></Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    );

  }
}

export default Tabs;