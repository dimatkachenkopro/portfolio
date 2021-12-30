import React, { Component } from "react";

import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <p className="avatar">DIMA TKACHENKO</p>
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>

            <hr />

            <p>HTML/CSS | Bootstrap | JavaScript | React | Java | MySQL </p>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/dima-tkachenko-632a95183"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/dimatkachenkopro"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Landing;
