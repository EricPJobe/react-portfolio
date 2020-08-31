import React from 'react';
import './Projects.css';
import '../structure.css';

function Projects() {
    return (
        <div className={"container"}>
            <div className={"flex-one"}> </div>
            <div className={"text-container"}>
                <h1 className={"title"}>My Projects</h1>
            </div>
            <div className={"projects-group"}>
                <div id="professional" className={"project-container"}>
                    <p className={"header-text"}>Professional Projects for Apache Corporation:</p>
                    <ul>
                        <li>
                            <p className={"text label"}>UCMS:</p>
                            <p className={"text"}>A chemical management system for operations in the Apache San Antonio region
                            My work included front-end development of the sampling module as well as
                            feature requests and bug fixes on the main injection point module and master
                            data lookups. Tools used: Angular, Bootstrap</p>
                        </li>
                        <li>
                            <p className={"text label"}>Client Data Services:</p>
                            <p className={"text"}>CA suite of Angular services that served all of our applications
                            including a data service for wrapping the Angular HttpClient to hydrate objects
                            and an O-Data query string builder from a search model, a context service for
                            state management, an alert service for global error messaging, a worker service
                            for getting user permissions and id, a token service for getting an authentication
                            token, and HTTP interceptors for error handling. My role featured a significant
                            rewrites of existing services and the addition of new services.</p>
                        </li>
                        <li>
                            <p className={"text label"}>Flow:</p>
                            <p className={"text"}>A data integration application for Apache users to find and resend failed
                            integration messages in the Tibco TMS system. It featured an extensive search
                            form with a custom multi-select for process codes as well as granular data views
                            with parsing of BLOB data into raw XML. Tools used: Angular, Angular Material Design</p>
                        </li>
                        <li>
                            <p className={"text label"}>Foresite Staging:</p>
                            <p className={"text"}>A application for staging well data before being entered into the Weatherford
                            Foresite well optimization system. It allowed engineers to view well data for
                            multiple lift types and enter engineer-to-enter data that could not be integrated
                            from other systems. Tools used: Angular, Angular Material Design</p>
                        </li>
                        <li>
                            <p className={"text label"}>Geologic Prognosis:</p>
                            <p className={"text"}>Lists and forms for the creation of a geologic prognosis as a step in planning
                            to create a well. My role consisted of creating an ArcGIS map from the ESRI
                            SDK to be used to chart wellbores as well as a printable report combining
                            all data from the application. Tools used: Angular, Angular Material Design
                            ESRI SDK for ArcGIS</p>
                        </li>
                        <li>
                            <p className={"text label"}>Access Control:</p>
                            <p className={"text"}>A rewrite of the primary security application for Apache's custom applications
                            It featured a worker lookup, application selector, a worker-role assignment
                            form, and lookup tables. The worker-role assignment features complex logic
                            for structuring worker, application, roles, and asset data into a single
                            interface. Tools used: Angular, Angular Material Design</p>
                        </li>
                        <li>
                            <p className={"text label"}>Workforce:</p>
                            <p className={"text"}> tool for managing non-employ workers at Apache. Data could be viewed grouped
                            by department, which featured multiple Material tables grouped within
                            Material expansion components. Other features included URL parsing for
                            email driven search parameters. Tools used: Angular, Angular Material Design</p>
                        </li>
                        <li>
                            <p className={"text label"}>ADEX-Qu:</p>
                            <p className={"text"}>A tool for entering non-interest wells in the ProSource database.
                            Well API numbers could be entered individually or in batch with
                            realtime state, county, and field display on number entry. It also
                            featured a custom state multi-picker. Tools used: Angular, Angular
                            Material Design</p>
                        </li>
                    </ul>
                </div>
                <div id="professional" className={"project-container"}>
                    <p className={"header-text"}>Personal Projects:</p>
                    <ul>
                        <li>
                            <p className={"text label"}><a href={"https://github.com/EricPJobe/fundingo-native"}>Fundingo:</a></p>
                            <p className={"text"}>A Fandango clone designed to demonstrate the logic required to implement COVID-19
                            restrictions on a seat selector screen. The application marks occupied and
                            selected seats as well as seats that are unavailable due to constraints. When 30% of the
                            theater's capacity is reached, it will disable seat selection until seats are deselected.
                            Tools used: Angular (POC), React Native</p>
                        </li>
                        <li>
                            <p className={"text label"}><a href={"https://github.com/EricPJobe/react-portfolio"}>This Website!</a></p>
                            <p className={"text"}>This website was written with Reach and React Router to demonstrate basic
                            proficiency in React, HTML, and CSS.</p>
                        </li>
                        <li>
                            <p className={"text label"}><a href={"https://github.com/EricPJobe/GNT-reader"}>GNT Reader (in progress):</a></p>
                            <p className={"text"}>This application is a front-end consumer of the open source Greek New
                            Testament at <a href={"#"}>MorphGNT</a>. The data is stored in AWS S3 and is loaded
                            into DynamoDB through an REST API and a Lambda written in the Boto3 Python SDK.
                            The front-end will soon be rewritten in React, and it will feature mouseover.
                            parsing data for each word in the Greek New Testament.</p>
                        </li>
                        <li>
                            <p className={"text label"}>Applicative Universal Grammar (in progress):</p>
                            <p className={"text"}>This is a planned rewrite of a <a href={"http://web.cecs.pdx.edu/~mpj/pubs/augupdated.hs"}>
                            Haskell implementation</a> of Sebastian Shaumyan's applicative universal grammar originally developed by
                            Mark P. Jones in 1995. The aim is to resurrect this system of grammar for modern computational
                            linguistics projects</p>
                        </li>
                        <li>
                            <p className={"text label"}>Unilingo (in progress):</p>
                            <p className={"text"}>This is a planned Duolingo clone designed to implement applicative
                            universal grammar as a middle tier to generate Duolingo exercises through the AUG type system.
                            It will focus on ancietn and classical languages</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects
