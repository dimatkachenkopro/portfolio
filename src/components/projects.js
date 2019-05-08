import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


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
            {/* Project 1 */}
            <Card shadow={5}  >
              <CardTitle style={{ height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAquf9cOdR7mWsQweMb364ogMzlmBC8DWAV9hnnBlrfOOXJakz)' }} >Portfolio for designer</CardTitle>
              <CardText>
                Resposible web page using only HTML5/CSS3
                </CardText>
              <CardActions border style={{ textAlign: 'center', margin: ' auto' }}>
                <Button colored href="https://github.com/dimatkachenkopro/portfolio-website">GitHub</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 2 */}
            <Card shadow={5}  >
              <CardTitle style={{ height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAquf9cOdR7mWsQweMb364ogMzlmBC8DWAV9hnnBlrfOOXJakz)' }} >Weather App</CardTitle>
              <CardText>
                React app with Reast API, HTML5/CSS3
                </CardText>
              <CardActions border style={{ textAlign: 'center', margin: ' auto' }}>
                <Button colored href="https://github.com/dimatkachenkopro/weather-app">GitHub</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 3 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #3</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

          </div></div>
      )
    }
    else if (this.state.activeTab === 1) {
      return (
        <div className="wrapper">
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #1</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
              <CardActions border style={{ textAlign: 'center' }}>
                <div></div>
                <Button colored>GitHub</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #2</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored></Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 3 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #3</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

          </div></div>

      )
    } else if (this.state.activeTab === 2) {
      return (
        <div><h1> Angular coming soon</h1></div>
      )
    }
  }

  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
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
    )
  }
}

export default Projects;