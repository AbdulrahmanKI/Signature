import React, {Component} from 'react'
import {Nav,Tab} from 'react-bootstrap';
import EnglishForm from "./EnglishForm";
import ArabicForm from "./ArabicForm";

class GeneralTab extends Component {
  render() {
    return (
      <Tab.Container>
        <Nav justify variant="tabs" defaultActiveKey="english">
          <Nav.Item>
            <Nav.Link eventKey="english">English</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="arabic">العربية</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="english">
            <EnglishForm/>
          </Tab.Pane>
          <Tab.Pane eventKey="arabic">
           <ArabicForm/>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    )
  }
}

export default GeneralTab;
