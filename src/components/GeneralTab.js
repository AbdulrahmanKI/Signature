import React, {Component} from 'react'
import {Container, Tab, Tabs} from 'react-bootstrap';
import EnglishForm from "./EnglishForm";
import ArabicForm from "./ArabicForm";

class GeneralTab extends Component {



  render() {
    return (
        <Container >
          <Tabs justify defaultActiveKey="english" className="bg-secondary border border-dark rounded-top mt-1 "  transition={false} id="noanim-tab-example">

            <Tab  eventKey="english" className="border-0 rounded-0" title="English">
            <EnglishForm/>
            </Tab>

            <Tab eventKey="arabic" className="border-0 " title="العربية">
                <ArabicForm/>
            </Tab>

          </Tabs>
        </Container>
    )
  }
}

export default GeneralTab;
