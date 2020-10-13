import React from 'react';
import './About.css';
import '../structure.css';

function About() {
    return (
        <div className={"container"}>
            <div className={"flex-one"}> </div>
            <div className={"text-container"}>
                <h1 className={"title"}>My Story</h1>
            </div>
            <div className={"text-container main-text"}>
                <p className={"text"}>In December 2015 I completed my Ph.D. at the University of Chicago studying ancient
                Near Eastern languages and civilizations. My specialities included Classical Hebrew,
                Aramaic (including Syriac), and Greek with particular interest in the Dead Sea Scrolls
                and the history of early Judaism and Christianity. My dissertation, entitled "Innovations
                in Post-Biblical Hebrew Poetry: A Stylistic Analysis of the Hymns of Qumran", featured
                a linguistic analysis of poetic figuration and its application in the poetry of the Dead
                Sea Scrolls.</p>
                <p className={"paragraph-break"}> </p>
                <p className={"text"}>After graduating, the academic job market was extremely poor, so I made the decision
                to pursue a career in computer science. Little did I know that my years of preparation
                in Semitic philology would directly translate to programming, particularly in a functional
                paradigm. At the present time, I develop web applications while pursuing the knowledge
                and tools to be able to create ground-breaking innovations in computational linguistics
                and and natural language processing.</p>
                <p className={"paragraph-break"}> </p>
                <p className={"text"}>As a programmer, I have developed professional expertise in Angular and React front-end
                application development with 2½ years of experience in the enterprise. Other technologies
                I have experience with are C/C++, Typescript, Oracle, PostgreSQL, GraphQL, Apollo, Haskell, Node.js/Express, D3.js,
                Bootstrap, Angular Material Design, Ionic, Go, Python, AWS serverless architecture, and Linux.
                I am currently developing experience with React Native, GraphQL/Apollo, Scala, Clojure, and Rust</p>
            </div>
            <div className={"flex-one"}> </div>
            <div className={"flex-one"}> </div>
            <div className={"flex-one"}> </div>
            <div className={"flex-one"}> </div>
        </div>
    );
}

export default About
