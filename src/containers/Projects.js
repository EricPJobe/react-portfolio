import React from 'react';
import {useHistory} from 'react-router-dom'
import './Projects.css';
import '../structure.css';

function Projects() {
    const history = useHistory();

    const navToGNT = () => {
        history.push("/gntreader")
    }

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
                            <p className={"text"}>A chemical management system for operations in the Apache San Antonio region.
                            My work included front-end development of the sampling module as well as
                            feature requests and bug fixes on the main injection point module and master
                            data lookups. Tools used: Angular, Bootstrap</p>
                        </li>
                        <li>
                            <p className={"text label"}>Client Data Services:</p>
                            <p className={"text"}>A suite of Angular services that serves all Apache custom applications. It
                            includes a data service for wrapping the Angular HttpClient to hydrate objects
                            and an OData query string builder from a search model, a context service for
                            state management, an alert service for global error messaging, a worker service
                            for getting user permissions and IDs, a token service for fetching an authentication
                            token, and HTTP interceptors for error handling. My role featured significant
                            rewrites of existing services and the addition of new services.</p>
                        </li>
                        <li>
                            <p className={"text label"}>Flow:</p>
                            <p className={"text"}>A data integration application for Apache users to find and resend failed
                            integration messages in the Tibco TMS integration system. It features an extensive search
                            form with a custom multi-select control for process codes as well as granular data views
                            with parsing of BLOB data into raw XML. Tools used: Angular, Angular Material Design</p>
                        </li>
                        <li>
                            <p className={"text label"}>Foresite Staging:</p>
                            <p className={"text"}>An application for staging well data before being entered into the Weatherford
                            Foresite well optimization system. It allows engineers to view well data for
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
                            It features a worker lookup typeahead control, application selector, a worker-role assignment
                            form, and lookup tables. The worker-role assignment features complex logic
                            for structuring worker, application, roles, and asset data into a single
                            interface. Tools used: Angular, Angular Material Design</p>
                        </li>
                        <li>
                            <p className={"text label"}>Workforce:</p>
                            <p className={"text"}>A tool for managing non-employ workers at Apache. Data could be viewed grouped
                            by department, which features multiple Material Design tables grouped within
                            Material expansion components. Other features include URL parsing for
                            email driven search parameters. Tools used: Angular, Angular Material Design</p>
                        </li>
                        <li>
                            <p className={"text label"}>ADEX-Qu:</p>
                            <p className={"text"}>A tool for entering non-interest wells in the ProSource database.
                            Well API numbers can be entered individually or in batch with
                            real-time state, county, and field display on number entry. It also
                            features a custom state multi-picker. Tools used: Angular, Bootstrap</p>
                        </li>
                    </ul>
                </div>
                <div id="professional" className={"project-container"}>
                    <p className={"header-text"}>Personal Projects:</p>
                    <ul>
                        <li>
                            <p className={"text label"}><a href={"https://github.com/EricPJobe/fundingo-native"}  className={"link"}>Fundingo:</a></p>
                            <p className={"text"}>A Fandango clone designed to demonstrate the logic required to implement COVID-19
                            restrictions on a movie theater seat selector screen. The application marks occupied and
                            selected seats as well as seats that are unavailable due to constraints. When 30% of the
                            theater's capacity is reached, it will disable seat selection until seats are deselected.
                            Tools used: Angular (POC), React Native. View demo of the Angular POC <a href={"http://ericjobe-fundingo-poc.s3-website-us-east-1.amazonaws.com"}  className={"link"}>here </a>
                            and the React Native version <a href={"https://snack.expo.io/@ilimilku/fundingo-native"}  className={"link"}>here</a></p>
                        </li>
                        <li>
                            <p className={"text label"}><a href={"https://github.com/EricPJobe/react-portfolio"}  className={"link"}>This Website!</a></p>
                            <p className={"text"}>This website was written with React and React Router to demonstrate basic
                            proficiency in React, HTML, and CSS.</p>
                        </li>
                        <li>
                            <p className={"text label"}><a href={"https://github.com/EricPJobe/GNT-reader"} className={"link"}>GNT Reader:</a></p>
                            <p className={"text"}>This application is a consumer of the open source Greek New
                            Testament at <a href={"https://github.com/morphgnt/sblgnt"}  className={"link"}>MorphGNT</a>. The raw data files are stored in AWS S3 and loaded
                            into a PostgreSQL database hosted in AWS RDS. Data was loaded into the database with custom Node.js scripts.
                            A GraphQL API implemented in Node.js performs all CRUD operations to fetch a reference and words as well
                            as create, update, and delete flashcards. The front-end is written in React Native with the Apollo Client
                            and React-Navigation libraries. Parsing data for each word is revealed on touch, and a long touch will reveal
                            a modal for creating flashcards. A flashcard trainer tab allows users to review unfamiliar vocabulary
                            encountered while reading. Due to current issues with Expo Snacks and Apollo, the UI is not currently hosted, but
                            screen shots are accessible <span className={"link"} onClick={() => navToGNT()}>here.</span></p>
                        </li>
                        <li>
                            <p className={"text label"}>Applicative Universal Grammar (in progress):</p>
                            <p className={"text"}>This is a planned rewrite of a <a href={"http://web.cecs.pdx.edu/~mpj/pubs/augupdated.hs"}  className={"link"}>
                            Haskell implementation</a> of Sebastian Shaumyan's applicative universal grammar originally developed by
                            Mark P. Jones in 1995. The aim is to resurrect this system of grammar for modern computational
                            linguistics projects</p>
                        </li>
                        <li>
                            <p className={"text label"}>Unilingo (in progress):</p>
                            <p className={"text"}>This is a planned Duolingo clone POC designed to implement applicative
                            universal grammar as a middle tier to generate Duolingo exercises through the AUG type system.
                            It will focus on ancient and classical languages</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects
