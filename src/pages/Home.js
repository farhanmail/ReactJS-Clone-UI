import React from "react";
import "../style/Home.css";
import image1 from "../assets/img/Group 16136@2x@2x.png";
import image2 from "../assets/img/sport-team.png"


function Home() {
    return (
        <div className="home">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div>
                        <img className="image1" src={image1} alt="Group 16136@2x@2x"></img>
                    </div>
                </div>
                <div className="col-sm-6 my-auto">
                    <div>
                        <h3  className="content1">
                            <strong> HI THERE !</strong>
                        </h3>
                        <h2  className="content1">
                            <strong>We are an</strong> <strong className="content2">Alterra Academy.</strong>
                        </h2>
                        <p className="content3">Alterra Academy Full-stack Program is Coding Bootcamp which transform you being professional Software Engineer within 3 months.</p>
                    </div>
                    <button className="btn1" type="submit">
                        <div className="d-flex justify-content-star">
                            <img className="btn-img1" src={image2} alt="sport-team"></img>
                            <p className="btn-text1">
                                More About Team
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;