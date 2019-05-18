import React from "react";
import {Tabs, Tab,Container } from 'react-bootstrap';
import GeneralTab from "./GeneralTab";
import SocialTab from "./SocialTab";
import "./tabscomponent.css";
import ImageTab from "./ImageTab";
import StyleTab from "./StyleTab";



class TabComponent extends React.Component {
  render() {
    return (
      <Container  >
          <Tabs justify defaultActiveKey="general" className="bg-dark border-bottom-0 border border-dark rounded-top"  transition={false} id="noanim-tab-example">

              <Tab eventKey="general" className="shadow" title="General">
                  <GeneralTab/>
              </Tab>
              <Tab eventKey="social"  title="Social">
                    <SocialTab/>
              </Tab>
              <Tab eventKey="image"  title="Image" >
                    <ImageTab/>
              </Tab>
              <Tab eventKey="style" title="Style" >
                  <StyleTab/>
              </Tab>
          </Tabs>


      </Container>
    );

  }
}

export default TabComponent;
