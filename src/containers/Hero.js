import React from 'react';
import './Hero.css';
import '../structure.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faDownload} from "@fortawesome/free-solid-svg-icons";

function Hero() {
    return (
        <div className={"hero-box"}>
            <div className={"flex-one"}> </div>
            <div className={"flex-one"}>
                <div className={"text-container"}>
                    <h1 className={"title"}>Eric P. Jobe, Ph.D.</h1>
                </div>
            </div>
            <div className={"flex-one"}>
                <div className={"text-container"}>
                    <h3 className={"subtitle"}>Full Stack Web Development • Computational Linguistics • Philology</h3>
                </div>
            </div>
            <div className={"flex-one"}>
                <div className={"icons-container"}>
                    <div className={"icon"}><FontAwesomeIcon icon={faGithub} /></div>
                    <div className={"icon"}><FontAwesomeIcon icon={faLinkedin} /></div>
                </div>
            </div>
            <div className={"flex-one"}>
                <div className={"resume-button"}>
                    <div className={"download-icon"}><FontAwesomeIcon icon={faDownload} /></div>
                    <div><p>Download Resume</p></div>
                </div>
            </div>
            <div className={"flex-one"}> </div>
            <div className={"flex-one"}> </div>
            <div className={"flex-one"}> </div>
            {/*<div className={"icons-container"}>*/}
            {/*    <div className={"icon"}><FontAwesomeIcon icon={faAngular} /></div>*/}
            {/*    <div className={"icon"}><FontAwesomeIcon icon={faReact} /></div>*/}
            {/*    /!*<img src={require("../assets/Haskell-Logo.svg")} alt={"Haskell logo"}/>*!/*/}
            {/*</div>*/}
        </div>
    );
}

export default Hero

//className={"flex-container h-center v-center"}
