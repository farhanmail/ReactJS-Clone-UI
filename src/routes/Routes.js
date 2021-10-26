import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Home from "../pages/Home";
import Event from "../pages/Event";
import Blog from "../pages/Blog";
import About from "../pages/About";

function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {(props) => (
                        <div className="parent">
                            <Header/>
                            <Home {...props}/>
                            <Blog/>
                            <About/>
                            <Footer/>
                        </div>
                    )}
                </Route>
                <Route exact path="/event">
                    {(props) => (
                        <div className="parent">
                            <Header/>
                            <Event {...props}/>
                            <Footer/>
                        </div>
                    )}
                </Route>
                <Route exact path="/blog">
                    {(props) => (
                        <div className="parent">
                            <Header/>
                            <Blog {...props}/>
                            <Footer/>
                        </div>
                    )}
                </Route>
                <Route exact path="/about">
                    {(props) => (
                        <div className="parent">
                            <Header/>
                            <About {...props}/>
                            <Footer/>
                        </div>
                    )}
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;