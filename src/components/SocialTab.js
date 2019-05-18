import React, {Component} from 'react';
import { Form,Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SocialTab extends Component {
    render() {
        return (

            <Container>
                <Form className="mt-2 justify p-1 ">
                    <Form.Group controlId="formGroupLinkedIn">
                        <FontAwesomeIcon className={"mr-1"} icon={['fab', 'linkedin']} />
                        <Form.Label >Linked In</Form.Label>
                        <Form.Control type="url" placeholder="https://www.linkedin.com" />
                    </Form.Group>
                    <Form.Group controlId="formGroupTwitter">
                        <FontAwesomeIcon className={"mr-1"} icon={['fab', 'twitter']} />
                        <Form.Label >Twitter</Form.Label>
                        <Form.Control type="url" placeholder="https://www.twitter.com/" />
                    </Form.Group>
                    <Form.Group controlId="formGroupFacebook">
                        <FontAwesomeIcon className={"mr-1"} icon={['fab', 'facebook']} />
                        <Form.Label >Facebook</Form.Label>
                        <Form.Control type="url" placeholder="https://www.facebook.com/" />
                    </Form.Group>
                    <Form.Group controlId="formGroupGithub">
                        <FontAwesomeIcon className={"mr-1"} icon={['fab', 'github']} />
                        <Form.Label >Github</Form.Label>
                        <Form.Control type="url" placeholder="https://www.github.com/" />
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default SocialTab;
