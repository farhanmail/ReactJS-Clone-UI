import React from "react";
import "../style/About.css";
import headAbout from "../assets/img/head-about.PNG"
import oBatik from "../assets/img/ornament_batik.png"
// import group from "https://www.alterra.id/wp-content/uploads/2018/12/about_alterra@2x.png"

function About() {
    return (
        <div>
            <div>
                <img className="head-about" src={headAbout} alt="head-about"></img>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 my-auto">
                        <div>
                            <h2 className="content1">
                                <strong> Who is alterra?</strong>
                            </h2>
                            <p className="about2-content1">alterra is the leading B2B tech company in Indonesia that provides a wide range of services such as Bill Payment Aggregator, Distribution Network, Promotion Platform, and Tech Academy.</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="absolute">
                                <img className="img-content1" src="https://www.alterra.id/wp-content/uploads/2018/12/about_alterra@2x.png" alt="Group 16136@2x@2x"/>
                        </div>
                        <div>
                            <img className="img2-content1" src={oBatik} alt="ornament_batik"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="about-content2">
                                <img className="img-content2" src="https://www.alterra.id/wp-content/uploads/2018/12/about_milestone@2x.png" alt="Group 16136@2x@2x" />
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="">
                                <div className="about-content3">
                                    <h2 className="text-content2">
                                        <strong>Milestone</strong>
                                    </h2>
                                    <p className="text2-content2">The company has established since 2015 under the name Sepulsa, then it evolved as the pioneer of digital bill payment services, enabling top online players in Indonesia. It also served as technology enabler for offline to online
                                        (O2O) distribution network for Telco Industries, helping thousands of telco agents across Indonesia to get better use of technology for their business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 my-auto">
                        <div className="">
                            <div className="about-content4">
                                <h2 className="text-content2">
                                    <strong> Who is alterra?</strong>
                                </h2>
                                <p className="text-content4">Alterra is connected to all telco players in Indonesia, and also licensed as the switching & aggregator for the services, processed millions of transactions every month, making it the best online telco aggregator in Indonesia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="about-content1">
                            <img className="img-content4" src="https://www.alterra.id/wp-content/uploads/2018/12/about_funfact@2x.png" alt="Group 16136@2x@2x" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5">
                        <div className="about-content2">
                            <img className="img2-content4" src="https://www.alterra.id/wp-content/uploads/2018/12/content-6.png" alt="Group 16136@2x@2x" />
                        </div>
                    </div>
                    <div className="col-sm-7 my-auto">
                        <div className="">
                            <div className="about-content3">
                                <h2 className="about-content1">
                                    <strong>Our Team</strong>
                                </h2>
                                <p className="text2-content2">
                                    Our Team Alterra team is 200 people strong (and counting!) with operations in Jakarta, Malang, and Jambi. Alterra was named the <a href="#" className="text2-content4">best work place in Indonesia by Jobplanet</a> in 2017.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="button-about">
                            <button className="btn" type="submit"><p className="btn-style">Get Started</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;