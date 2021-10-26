import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Home from "../pages/Home/Home";
import Event from "../pages/Event";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Team from "../pages/Team/Team"

function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {(props) => (
                        <div className="parent">
                            <Header/>
                            <Home />
                            <Footer/>
                        </div>
                    )}
                </Route>
                <Route exact path="/event">
                    {(props) => (
                        <div className="parent">
                            <Header/>
                            <Event/>
                            <Footer/>
                        </div>
                    )}
                </Route>
                <Route exact path="/blog">
                    {(props) => (
                        <div className="parent">
                            <Header/>
                            <Blog/>
                            <Footer/>
                        </div>
                    )}
                </Route>
                <Route exact path="/about">
                    {(props) => (
                        <div className="parent">
                            <Header/>
                            <About/>
                            <Footer/>
                        </div>
                    )}
                </Route>
                <Route exact path="/team">
                    {(props) => (
                        <div className="parent">
                            <Header/>
                            <Team/>
                            <Footer/>
                        </div>
                    )}
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;