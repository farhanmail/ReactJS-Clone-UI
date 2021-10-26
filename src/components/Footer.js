import React from 'react';
import "../style/Footer.css";
import logo from "../assets/img/logo-ALTA-v2@2x.png";
import icFb from "../assets/img/ic_fb.png";
import icTwitter from "../assets/img/ic_twitter.png";
import icIg from "../assets/img/ic_ig.png";
import icLinkedin from "../assets/img/ic_linkedin.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="p-3 ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="d-flex justify-content-center ">
                                <img src={logo} alt="logo" className="logo"></img>
                            </div>
                        </div>

                        <div className="col-sm-6 text-center my-auto">
                            <div className="footer-color-text">
                                Social Media
                            </div>
                            <div className="d-flex justify-content-center ">
                                <img className="logo-ic " src={icFb} alt="ic_fb "></img>
                                <img className="logo-ic " src={icTwitter} alt="ic_twitter "></img>
                                <img className="logo-ic " src={icIg} alt="ic_ig.png "></img>
                                <img className="logo-ic " src={icLinkedin} alt="ic_linkedin.png "></img>
                            </div>
                        </div>
                        <div className="col-sm-3 text-center my-auto">
                            <div className="footer-color-text">
                                Copyright © 2019 Alterra
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
)
}

export {Footer};