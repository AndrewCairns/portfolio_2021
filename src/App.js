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
import Experience from "./app/views/experience/experience";
import Contact from "./app/views/contact/contact";

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
                  <li className="txt--12">
                    <a href="#contact-Section" title="Contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <Home />
          <Engineer />
          <Explore />
          <Experiment />
          <Experience />
          <VerticalNav />
          <Contact />

          <div className="c-contain">
            <Switch>
              {/* <Route exact path="/explore" component={Explore} /> */}
            </Switch>
          </div>

          <footer className="u-p-enormous">
            <div className="c-contain">
              <div>
                <img src={logo} alt="Andrew Cairns' logo" />
                <p>© {getYear} Andrew Cairns. All rights reserved.</p>
              </div>

              <div className="socials">
                <a href="mailto:awcairns7@ulster.ac.uk" className="u-ph-gi">
                  <img src={mail} alt="Andrew Cairns' mail link" />
                </a>
                <a href="https://github.com/AndrewCairns" className="u-ph-gi">
                  <img src={github} alt="Andrew Cairns' github link" />
                </a>
                <a
                  href="https://www.linkedin.com/in/andrew-cairns-15888853/"
                  className="u-ph-gi"
                >
                  <img src={linkedin} alt="Andrew Cairns' linkedin link" />
                </a>
                <a href="https://twitter.com/cairnsy17" className="u-ph-gi">
                  <img src={twitter} alt="Andrew Cairns' twitter link" />
                </a>
                <a
                  href="https://www.instagram.com/cairnsy17/"
                  className="u-ph-gi"
                >
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
