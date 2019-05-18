import React, {Component} from 'react';
import { Form,Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Linkedin,Twitter ,Facebook,Github } from "../Redux/action";
import {connect} from "react-redux";

class SocialTab extends Component {


    setLinkedinLink= (e) =>{
        this.props.linkedin(e.target.value)
    }
    setTwitterLink= (e) =>{
        this.props.twitter(e.target.value)
    }
    setFacebookLink= (e) =>{
        this.props.facebook(e.target.value)
    }
    setGithubLink= (e) =>{
        this.props.github(e.target.value)
    }

    render() {
        return (

            <Container>
                <Form className="mt-2 justify p-1 ">
                    <Form.Group controlId="formGroupLinkedIn">
                        <FontAwesomeIcon className={"mr-1"} icon={['fab', 'linkedin']} />
                        <Form.Label >Linked In</Form.Label>
                        <Form.Control type="url" onChange={this.setLinkedinLink} placeholder="https://www.linkedin.com" />
                    </Form.Group>
                    <Form.Group controlId="formGroupTwitter">
                        <FontAwesomeIcon className={"mr-1"} icon={['fab', 'twitter']} />
                        <Form.Label >Twitter</Form.Label>
                        <Form.Control type="url" onChange={this.setTwitterLink} placeholder="https://www.twitter.com/" />
                    </Form.Group>
                    <Form.Group controlId="formGroupFacebook">
                        <FontAwesomeIcon className={"mr-1"} icon={['fab', 'facebook']} />
                        <Form.Label >Facebook</Form.Label>
                        <Form.Control type="url" onChange={this.setFacebookLink} placeholder="https://www.facebook.com/" />
                    </Form.Group>
                    <Form.Group controlId="formGroupGithub">
                        <FontAwesomeIcon className={"mr-1"} icon={['fab', 'github']} />
                        <Form.Label >Github</Form.Label>
                        <Form.Control type="url" onChange={this.setGithubLink} placeholder="https://www.github.com/" />
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return{
        linkedin : (linkedin) => dispatch(Linkedin(linkedin)),
        twitter : (twitter) => dispatch(Twitter(twitter)),
        facebook: (facebook) => dispatch(Facebook(facebook)),
        github: (github) => dispatch(Github(github)),

    }
}

export default  connect (null,mapDispatchToProps) (SocialTab);
