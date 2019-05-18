import React, {Component} from 'react';
import {Container,Row ,Col,Image} from 'react-bootstrap';
import {ImageLogo} from "../Redux/action";
import {connect} from "react-redux";


class ImageTab extends Component {

    uploadImage= (e) =>{
        const name = e.target.files[0].name;
        //TODO: use Image reducer to upload image to state
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col className="mt-3" >
                    <Image alt="image" width={100} height={110} src={this.props.imageName} className="rounded mx-auto d-block border p-2"  fluid />
                    </Col>
                </Row>
                <Row>
                    <Col className="m-3">
                    <input type="file" onChange={this.uploadImage} className="custom-file-input" id="customFile"/>
                        <label className="custom-file-label" htmlFor="customFile">Choose image</label>
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        imageName : state.imageReducer.image,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        imageLogo: (image) => dispatch(ImageLogo(image))
    }

}

export default connect (mapStateToProps,mapDispatchToProps) (ImageTab);
