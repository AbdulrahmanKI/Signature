import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class SignatureDesign extends Component {


    render() {
        return (
            <Container>
                <Row>
                <Col lg={3} >
                    <div>
                    <img width={98} height={110} src={this.props.imageName} className="mt-2 mx-auto d-block"/>
                    </div>
                    <Row className="mt-2 mx-auto my-0">
                        <Col xs={2}><a target="_blank" href={this.props.linkedin}><FontAwesomeIcon style={{color:"#0077B5"}} icon={['fab', 'linkedin']}/></a></Col>
                        <Col xs={2}><a target="_blank" href={this.props.twitter}><FontAwesomeIcon style={{color:"#1DA1F2"}} icon={['fab', 'twitter']}/></a></Col>
                        <Col xs={2}><a target="_blank" href={this.props.facebook}><FontAwesomeIcon style={{color:"#3B5998"}} icon={['fab', 'facebook']}/></a></Col>
                        <Col xs={2}><a target="_blank" href={this.props.github}><FontAwesomeIcon style={{color:"#24292E"}} icon={['fab', 'github']}/></a></Col>
                    </Row>
                </Col>
                <Col lg={7} className="mr-3">
                    <Row className="mt-1" style={{fontSize:"1.2em",color:"#0687BE",fontWeight:"bold",marginBottom:"-4px"}}>{this.props.name}</Row>
                    <Row>{this.props.jobTitle}</Row>
                    <Row>{this.props.department}</Row>
                    <Row>{this.props.mobile}</Row>
                    <Row style={{borderBottom: "1px solid #0687BE"}}>{this.props.email}</Row>
                    <Row style={{color:"#06608b",fontWeight:"bold"}}>{this.props.website}</Row>
                </Col>
                </Row>

            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        name : state.reducer.name,
        email:state.reducer.email,
        jobTitle:state.reducer.jobTitle,
        department:state.reducer.department,
        mobile:state.reducer.mobile,
        website:state.reducer.website,
        imageName : state.imageReducer.image,
        linkedin : state.socialReducer.linkedin,
        twitter : state.socialReducer.twitter,
        facebook : state.socialReducer.facebook,
        github : state.socialReducer.github,
    }
}

export default connect(mapStateToProps , )(SignatureDesign);
