import React from 'react';
import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Hero from "../../containers/Hero";
import Projects from "../../containers/Projects";
import Languages from "../../containers/Languages";
import GNTReader from "../../components/GNTReader/GNTReader";
import './Nav.css'
import '../../structure.css'
import About from "../../containers/About";


function Nav() {
    return (
        <div className={"container"}>
            <nav className={"nav"}>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName={"selected"} className={"nav-link"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName={"selected"} className={"nav-link"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" activeClassName={"selected"} className={"nav-link"}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/languages" activeClassName={"selected"} className={"nav-link"}>Languages</NavLink>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/languages">
                    <Languages />
                </Route>
                <Route path="/gntreader">
                    <GNTReader />
                </Route>
                <Route path="/">
                    <Hero />
                </Route>
            </Switch>
        </div>
    );
}

export default Nav
