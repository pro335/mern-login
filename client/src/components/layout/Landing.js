import React, { Component } from "react";
import {Link} from "react-router-dom";

import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

import './facebook.css';


class Landing extends Component {

    responseFacebook = (response) => {
        console.log(response);
      }
    
      googleLoginSuccess = ( response ) => {
    
        const gmailData = response.profileObj;
        if(gmailData === null) {
          console.log("Gmail Data error");
          return;
        }

        console.log(gmailData);

        const userData = {
          id: gmailData.googleId,
          email: gmailData.email,
          firstName: gmailData.givenName,
          lastName: gmailData.familyName,
          avatar: gmailData.imageUrl
        }
    
      }
    
      googleLoginFailure = ( response ) => {
        // alert(response);
        console.log(response);
      }

    render() {
        return (
            <div style={{height: "75vh"}} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Build</b> a login/auth app with the {" "}
                            <span style={{fontFamily: "monospace"}}>MERN</span> stack from scratch
                        </h4>
                        <p className="flow-text grey-text text-darken-1">
                            Create a (minimal) full-stack app with user authentication via passport and JWTs
                        </p>
                        <br/>
                        <div className="col s6">
                            <Link to ="/register" style={{width: "140px", borderRadius: "3px", letterSpacing: "1.5px"}} className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                Register
                            </Link>
                        </div>
                        <div className="col s6">
                            <Link to="/login" style={{width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }} className="btn btn-large btn-flat waves-effect white black-text">
                                Login
                            </Link>
                        </div>

                        <div className="col s6" style={{marginTop: 30}}>
                            <FacebookLogin
                                appId = "509511473091913"
                                autoLoad={false}
                                cssClass="btnFacebook"
                                // scope="public_profile,email"
                                fields="name,email,picture"
                                callback={this.responseFacebook}
                                icon="fa-facebook"
                                textButton = "&nbsp;"
                            >
                            </FacebookLogin>
                            <GoogleLogin
                                clientId="971721919755-1j4sir84v7j2h8st5ma32m2mtt8k5n7n.apps.googleusercontent.com"
                                onSuccess={this.googleLoginSuccess}
                                onFailure={this.googleLoginFailure}
                                // cookiePolicy={'single_host_origin'}
                                className="btnGoogle"
                            >
                                <i className="fa" /> 
                            </GoogleLogin>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;