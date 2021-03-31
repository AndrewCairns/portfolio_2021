import React from "react";
import { BrowserRouter, Switch, Link } from "react-router-dom";
import Home from "./app/views/home/home";
import Explore from "./app/views/explore/explore";
import VerticalNav from "./app/components/verticalNav/verticalNav";
import "./App.scss";
import logo from "./assets/images/logo.svg";
import mail from "./assets/images/mail.png";
import github from "./assets/images/github.png";
import linkedin from "./assets/images/linkedin.png";
import twitter from "./assets/images/twitter.png";
import insta from "./assets/images/instagram.png";
import { ScrollingProvider } from "react-scroll-section";
import Engineer from "./app/views/engineer/engineer";
import Experiment from "./app/views/experiment/experiment";

function App() {
  var getDate = new Date();
  var getYear = getDate.getFullYear();

  return (
    <div>
      <ScrollingProvider>
        <BrowserRouter>
          <header>
            <div className="c-contain">
              <div className="logo">
                <Link to="/home">
                  <img src={logo} alt="Andrew Cairns' Logo" />
                </Link>
              </div>
              <nav>
                <ul>
                  <li className="txt--14">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <Home />
          <Engineer />
          <Explore />
          <Experiment />
          <VerticalNav />

          <div className="c-contain">
            <Switch>
              {/* <Route exact path="/explore" component={Explore} /> */}
            </Switch>
          </div>

          <footer className="u-p-gi">
            <div className="c-contain">
              <div>
                <img src={logo} alt="Andrew Cairns' logo" />
                <p className="txt--14">
                  © {getYear} Andrew Cairns. All rights reserved.
                </p>
              </div>

              <div className="socials">
                <a href="mailto:cairns-a3@ulster.ac.uk">
                  <img src={mail} alt="Andrew Cairns' mail link" />
                </a>
                <a href="https://github.com/AndrewCairns">
                  <img src={github} alt="Andrew Cairns' github link" />
                </a>
                <a href="https://www.linkedin.com/in/andrew-cairns-15888853/">
                  <img src={linkedin} alt="Andrew Cairns' linkedin link" />
                </a>
                <a href="https://twitter.com/cairnsy17">
                  <img src={twitter} alt="Andrew Cairns' twitter link" />
                </a>
                <a href="https://www.instagram.com/cairnsy17/">
                  <img src={insta} alt="Andrew Cairns' instagram link" />
                </a>
              </div>
            </div>
          </footer>
        </BrowserRouter>
      </ScrollingProvider>
    </div>
  );
}

export default App;
