import React from "react"
import './Team.css'
import shuterShock from "../../assets/img/shutterstock_796346011@2x.png"
import batik from '../../assets/img/ornament_batik.png'
import calender from "../../assets/img/calendar.png"


const Team = () => {
    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Muli' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
            <div>
                <div class="title">
                    <h1>About Our Team</h1>
                </div>
                <div class="content" style={{backgroundImage: `URL(${batik})`}}>
                    <div class="content-title">
                        <p>Backend Developer</p>
                    </div>
                    <div class="content-flex">
                        <div class="img-frm">
                            <div class="frame"></div>
                            <img src={shuterShock}/>
                        </div>
                        <div class="content-info">
                            <p>
                                <span class="span1">First Name</span><span class="span2">:</span><span class="span3">Cindy</span>
                            </p>
                            
                            <p>
                                <span class="span1">Last Name</span><span class="span2">:</span><span class="span3">Felita</span>
                            </p>
                            
                            <p>
                                <span class="span1">Birthdate</span><span class="span2">:</span><span class="span3">30 Juni 1995</span>
                            </p>
                            
                            <p>
                                <span class="span1">Nationality</span><span class="span2">:</span><span class="span3">Indonesia</span>
                            </p>
                            
                            <p>
                                <span class="span1">Address</span><span class="span2">:</span><span class="span3">Malang</span>
                            </p>
                            
                            <p>
                                <span class="span1">Email</span><span class="span2">:</span><span class="span3">cindy@alterra.id</span>
                            </p>

                            <p>
                                <span class="span1">Phone</span><span class="span2">:</span><span class="span3">085755444555</span>
                            </p>
                        </div>
                    </div>
                    <div class="content-flex2">
                        <div class="Education">
                            <h1>Education</h1>
                            <ul>
                                <li>
                                    <img src={calender}/><span>2007 - 2010</span>
                                    <p>Istanbul University</p>
                                    <p>Engineering Degree</p>
                                </li>
                                <li>
                                    <img src={calender}/><span>2007 - 2010</span>
                                    <p>Istanbul University</p>
                                    <p>Engineering Degree</p>
                                </li>
                                <li>
                                    <img src={calender}/><span>2007 - 2010</span>
                                    <p>Istanbul University</p>
                                    <p>Engineering Degree</p>
                                </li>
                            </ul>
                        </div>
                        <div class="Experience">
                            <h1>Experience</h1>
                            <ul>
                                <li>
                                    <img src={calender}/><span>2018 - 2020</span>
                                    <p>Alterra Group</p>
                                    <p>Backend Developer</p>
                                </li>
                                <li>
                                    <img src={calender}/><span>2015 - 2018</span>
                                    <p>Traveloka</p>
                                    <p>Frontend Developer</p>
                                </li>
                                <li>
                                    <img src={calender}/><span>2012 - 2015</span>
                                    <p>Bukalapak</p>
                                    <p>Quality Engineer</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="content" style={{backgroundImage: `URL(${batik})`}}>
                    <div class="content-title">
                        <p>Backend Developer</p>
                    </div>
                    <div class="content-flex">
                        <div class="img-frm">
                            <div class="frame"></div>
                            <img src={shuterShock}/>
                        </div>
                        <div class="content-info">
                            <p>
                                <span class="span1">First Name</span><span class="span2">:</span><span class="span3">Cindy</span>
                            </p>
                            
                            <p>
                                <span class="span1">Last Name</span><span class="span2">:</span><span class="span3">Felita</span>
                            </p>
                            
                            <p>
                                <span class="span1">Birthdate</span><span class="span2">:</span><span class="span3">30 Juni 1995</span>
                            </p>
                            
                            <p>
                                <span class="span1">Nationality</span><span class="span2">:</span><span class="span3">Indonesia</span>
                            </p>
                            
                            <p>
                                <span class="span1">Address</span><span class="span2">:</span><span class="span3">Malang</span>
                            </p>
                            
                            <p>
                                <span class="span1">Email</span><span class="span2">:</span><span class="span3">cindy@alterra.id</span>
                            </p>

                            <p>
                                <span class="span1">Phone</span><span class="span2">:</span><span class="span3">085755444555</span>
                            </p>
                        </div>
                    </div>
                    <div class="content-flex2">
                        <div class="Education">
                            <h1>Education</h1>
                            <ul>
                                <li>
                                    <img src={calender}/><span>2007 - 2010</span>
                                    <p>Istanbul University</p>
                                    <p>Engineering Degree</p>
                                </li>
                                <li>
                                    <img src={calender}/><span>2007 - 2010</span>
                                    <p>Istanbul University</p>
                                    <p>Engineering Degree</p>
                                </li>
                                <li>
                                    <img src={calender}/><span>2007 - 2010</span>
                                    <p>Istanbul University</p>
                                    <p>Engineering Degree</p>
                                </li>
                            </ul>
                        </div>
                        <div class="Experience">
                            <h1>Experience</h1>
                            <ul>
                                <li>
                                    <img src={calender}/><span>2018 - 2020</span>
                                    <p>Alterra Group</p>
                                    <p>Backend Developer</p>
                                </li>
                                <li>
                                    <img src={calender}/><span>2015 - 2018</span>
                                    <p>Traveloka</p>
                                    <p>Frontend Developer</p>
                                </li>
                                <li>
                                    <img src={calender}/><span>2012 - 2015</span>
                                    <p>Bukalapak</p>
                                    <p>Quality Engineer</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="content" style={{backgroundImage: `URL(${batik})`}}>
                    <div class="content-title">
                        <p>Backend Developer</p>
                    </div>
                    <div class="content-flex">
                        <div class="img-frm">
                            <div class="frame"></div>
                            <img src={shuterShock}/>
                        </div>
                        <div class="content-info">
                            <p>
                                <span class="span1">First Name</span><span class="span2">:</span><span class="span3">Cindy</span>
                            </p>
                            
                            <p>
                                <span class="span1">Last Name</span><span class="span2">:</span><span class="span3">Felita</span>
                            </p>
                            
                            <p>
                                <span class="span1">Birthdate</span><span class="span2">:</span><span class="span3">30 Juni 1995</span>
                            </p>
                            
                            <p>
                                <span class="span1">Nationality</span><span class="span2">:</span><span class="span3">Indonesia</span>
                            </p>
                            
                            <p>
                                <span class="span1">Address</span><span class="span2">:</span><span class="span3">Malang</span>
                            </p>
                            
                            <p>
                                <span class="span1">Email</span><span class="span2">:</span><span class="span3">cindy@alterra.id</span>
                            </p>

                            <p>
                                <span class="span1">Phone</span><span class="span2">:</span><span class="span3">085755444555</span>
                            </p>
                        </div>
                    </div>
                    <div class="content-flex2">
                        <div class="Education">
                            <h1>Education</h1>
                            <ul>
                                <li>
                                    <img src={calender}/><span>2007 - 2010</span>
                                    <p>Istanbul University</p>
                                    <p>Engineering Degree</p>
                                </li>
                                <li>
                                    <img src={calender}/><span>2007 - 2010</span>
                                    <p>Istanbul University</p>
                                    <p>Engineering Degree</p>
                                </li>
                                <li>
                                    <img src={calender}/><span>2007 - 2010</span>
                                    <p>Istanbul University</p>
                                    <p>Engineering Degree</p>
                                </li>
                            </ul>
                        </div>
                        <div class="Experience">
                            <h1>Experience</h1>
                            <ul>
                                <li>
                                    <img src={calender}/><span>2018 - 2020</span>
                                    <p>Alterra Group</p>
                                    <p>Backend Developer</p>
                                </li>
                                <li>
                                    <img src={calender}/><span>2015 - 2018</span>
                                    <p>Traveloka</p>
                                    <p>Frontend Developer</p>
                                </li>
                                <li>
                                    <img src={calender}/><span>2012 - 2015</span>
                                    <p>Bukalapak</p>
                                    <p>Quality Engineer</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;