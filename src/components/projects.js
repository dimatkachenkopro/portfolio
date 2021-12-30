import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="wrapper">
          <div className="projects-grid">
            <Card shadow={5}>
              <CardTitle className="card-title">
                Portfolio for designer
              </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu className="card-menu">
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5}>
              <CardTitle className="card-title">Weather App</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu className="card-menu">
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5}>
              <CardTitle className="card-title">React Project #3</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu className="card-menu">
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="wrapper">
          <div className="projects-grid">
            <Card shadow={5} className="card-body">
              <CardTitle className="card-title">React Project #1</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu className="card-menu">
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} className="card-body">
              <CardTitle className="card-title">React Project #2</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored></Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu className="card-menu">
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} className="card-body">
              <CardTitle className="card-title">React Project #3</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu className="card-menu">
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1> Angular coming soon</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>ALL</Tab>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
