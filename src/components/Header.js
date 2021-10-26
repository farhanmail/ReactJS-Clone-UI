import React from 'react';
import "../style/Header.css";
import { useHistory } from 'react-router-dom';
import logo from "../assets/img/logo-ALTA@2x.png";

const Header = () => {
    let history = useHistory()
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto bg-white">
            <div className="content1">
                <div className="row">
                    <div className="col-sm-3">
                        <a onClick={() => history.push(`/`)}>
                            <img src={logo} alt="logo" className="logo"></img>
                        </a>
                    </div>
                    <div className="col-sm-9">
                        <div className="col1">
                            <div className="d-flex justify-content-end">
                                <button aria-current="page" onClick={() => history.push(`/`)} className="button2">Home</button>
                                <button aria-current="page" onClick={() => history.push(`/about`)} className="button1">About</button>
                                <button aria-current="page" onClick={() => history.push(`/team`)} className="button1">Team</button>
                                <button aria-current="page" onClick={() => history.push(`/blog`)} className="button1">Blog</button>
                                <button aria-current="page" onClick={() => history.push(`/event`)} className="button1">Event</button>
                                <button type="submit" className="button3" onClick={() => history.push(`/contact`)}>Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export {Header};