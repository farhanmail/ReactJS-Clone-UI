import React from "react";
import "../style/Home.css";
import sportTeam from '../assets/img/sport-team.png'
import group from "../assets/img/Group 16136@2x@2x.png"
import shuterShock from "../assets/img/shutterstock_796346011@2x.png"
import imgArticle from "../assets/img/img_article.jpg"
import reward from "../assets/img/reward.png"
import project from "../assets/img/project.png"
import support from "../assets/img/support.png"
import bgPeople from '../assets/img/bg-people@2x.png'
import batik from '../assets/img/ornament_batik.png'


function Home() {
    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Muli' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
            <div class="top-wrapper1">
                <div class="flex-container">
                    <img src={group}/>
                    <div class="top-text">
                        <div class="line1">
                            <p>HI THERE !</p>
                        </div>
                        <div class="line2">
                            <p>
                                <span class="span1">We are an</span>
                                <span class="span2">Alterra Academy.</span>
                            </p>
                        </div>
                        <div class="line3">
                            <p>Alterra Academy Full-stack Program is Coding Bootcamp which transform you being professional Software Engineer within 3 months.</p>
                        </div>
                        <button>
                                <img src={sportTeam}/>
                                More About Team
                        </button>
                    </div>
                </div>
            </div>
            <div class="top-wrapper2">
                <div class="container">
                    <div class="container2">
                        <div class="container3">
                            <div class="container4">
                                <img src={reward}/>
                            </div>
                            <div class="container5">
                                <h5>4 Years Job</h5>
                                <p>Experience</p>
                            </div>
                        </div>
                        <div class="container3">
                            <div class="container4">
                                <img src={project}/>
                            </div>
                            <div class="container5">
                                <h5>500+ Projects</h5>
                                <p>Completed</p>
                            </div>
                        </div>
                        <div class="container3">
                            <div class="container4">
                                <img src={support}/>
                            </div>
                            <div class="container5">
                                <h5>Support</h5>
                                <p>Online 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="About">
                <div class="title">
                    <h1>About</h1>
                </div>
                <div class="content" style={{backgroundImage: `URL(${bgPeople})`}}>
                    <div class="content-text">
                        <div class="content-text1">
                            <h1>Alterra is For Everyone</h1>
                        </div>
                        <div class="content-text2">
                            <p>As a brandnew Catalyst, we are aiming to become one of the best tech companies in Indonesia. Joining the tech industry in Indonesia since 2015 under the name of Sepulsa, we have evolved as a B2B tech company in 4 years providing various services such as Bill Payment Aggregator, Distribution Network, Promotion Platform, and Tech Academy.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mot" style={{backgroundImage: `URL(${batik})`}}>
                <div class="title">
                    <h1>Meet Our Team</h1>
                    <p>Our Team Consists Only of the Best Talents</p>
                </div>
                <div class="mot-content">
                    <div class="mot-content2">
                        <div class="mot-content3">
                            <div class="img-frm">
                                <div class="frame"></div>
                                <img src={shuterShock}/>
                            </div>
                            <div class="mot-text">
                                <h1>Cindy Felita</h1>
                                <p>Backend Development</p>
                            </div>
                        </div>
                        <div class="mot-content4">
                            <div class="img-frm">
                                <div class="frame2"></div>
                                <img src={shuterShock}/>
                            </div>
                            <div class="mot-text">
                                <h1>Cindy Felita</h1>
                                <p>Backend Development</p>
                            </div>
                        </div>
                        <div class="mot-content5">
                            <div class="img-frm">
                                <div class="frame"></div>
                                <img src={shuterShock}/>
                            </div>
                            <div class="mot-text">
                                <h1>Cindy Felita</h1>
                                <p>Backend Development</p>
                            </div>
                        </div>
                    </div>
                    <div class="check-now">
                        <p>Check Now</p>
                    </div>
                </div>
            </div>
            <div class="Latest-Blogs">
                <div class="title">
                    <h1>Latest Blogs</h1>
                </div>
                <div class="lb-content">
                    <div class="lb-content1">
                        <img src={imgArticle}/>
                        <div class="lb-text">
                            <div class="lb-text1">
                                <h1>CREATE A WORDPRESS <br/>THEME FROM SCRATCH</h1>
                            </div>
                            <div class="lb-text2">
                                <p>
                                    <span class="name">Larry Stark</span>
                                    <span class="date">7 Januari 2020</span>
                                </p>
                            </div>
                            <div class="lb-text3">
                                <p>Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat…</p>
                            </div>
                            <div class="lb-text4">
                                <p>Read Mode</p>
                            </div>
                        </div>
                    </div>
                    <div class="lb-content1">
                        <img src={imgArticle}/>
                        <div class="lb-text">
                            <div class="lb-text1">
                                <h1>CREATE A WORDPRESS <br/>THEME FROM SCRATCH</h1>
                            </div>
                            <div class="lb-text2">
                                <p>
                                    <span class="name">Larry Stark</span>
                                    <span class="date">7 Januari 2020</span>
                                </p>
                            </div>
                            <div class="lb-text3">
                                <p>Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat…</p>
                            </div>
                            <div class="lb-text4">
                                <p>Read Mode</p>
                            </div>
                        </div>
                    </div>
                    <div class="lb-content1">
                        <img src={imgArticle}/>
                        <div class="lb-text">
                            <div class="lb-text1">
                                <h1>CREATE A WORDPRESS <br/>THEME FROM SCRATCH</h1>
                            </div>
                            <div class="lb-text2">
                                <p>
                                    <span class="name">Larry Stark</span>
                                    <span class="date">7 Januari 2020</span>
                                </p>
                            </div>
                            <div class="lb-text3">
                                <p>Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat…</p>
                            </div>
                            <div class="lb-text4">
                                <p>Read Mode</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;