import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/Nav";


function App() {
  return (
      <Router>
          <div className={"App"}>
              <Nav />
          </div>
      </Router>
  );
}

export default App;
