import React, {Component} from 'react';
import { Nav ,Tab} from 'react-bootstrap';
class InputForm extends Component {


    render() {
        return (
            <div className={"Tabs"}>

                <h2>Your Information</h2>
            <Tab.Container defaultActiveKey={"english"}>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="english">English</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="arabic">العربية</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="social">Social</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="style">Style</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="english">
                        <p style={{color:"black"}}>-MAIL SIGNATURE IS A BLOCK OF TEXT THAT IS APPENDED TO THE END OF AN E-MAIL MESSAGE YOU SEND. GENERALLY, A SIGNATURE IS USED TO PROVIDE THE RECIPIENT WITH YOUR NAME, E-MAIL ADDRESS, BUSINESS CONTACT INFORMATION</p>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            </div>
        );
    }
}

export default InputForm;
