import React from 'react';
import "./Banner.css"
import {MDBIcon} from "mdbreact";

const HeaderBanner = () => {
    return (
        <div className={"banner"}>
            <div className={"pipe"}>
                <p >e-mail signature is a block of text that is appended to the end of an e-mail message you send. Generally,
                    a signature is used to provide the recipient with your name,
                    e-mail address, business contact information, or Web site URL. </p>
                <br/>
                <div className={"icon"}>
                    <MDBIcon icon="edit" />
                    <h5>Fill the form</h5>
                </div>
                <div className={"icon"}>
                    <MDBIcon far icon="copy"  />
                    <h5>Copy your Signature</h5>
                </div>
                <div className={"icon"}>
                    <MDBIcon icon="paste" />
                    <h5>paste it to your E-mail</h5>
                </div>
            </div>

        </div>
    );
};

export default HeaderBanner;
