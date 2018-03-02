import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Icon, Dropdown, Item, Input, Image, Grid, List, Button } from 'semantic-ui-react';
import logo from './download.svg';
import arrow from './funky-arrow.png';

// import slide1 from './slide1.jpg';

class TopMenu extends React.Component {
  render() {
    return (
        <Container>
          <Menu borderless className="topmenu">
            <Menu.Item>
              <Image src={logo} centered/>
            </Menu.Item>

            <Menu.Menu position='right'>
              <Menu.Item>
                PRODUCTS
              </Menu.Item>
              <Menu.Item>
                SUPPORT
              </Menu.Item>
              <Menu.Item>
                COMMUNITY
              </Menu.Item>
              <Menu.Item>
                GALLERY
              </Menu.Item>
              <Menu.Item>
                SHOP
              </Menu.Item>
              <Menu.Item>
                GAMING
              </Menu.Item>
            </Menu.Menu>

            <Menu.Menu position='right'>
              <Menu.Item fitted>
                <i class="black large search icon"></i>
              </Menu.Item>
              <Menu.Item fitted>
                <i class='large icons'>
                  <i class='black shopping cart icon'></i>
                  <i class='top right corner yellow circle icon'></i>
                </i>
              </Menu.Item>
              <Menu.Item>
                <i class="black large user icon"></i>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>
    )
  }
}

class Middle extends React.Component {
  render() {
    return (
        <div class="vid-background">
          <Container textAlign='center' className="white-smoke-text">
            <h1>CORSAIR ONE</h1>
            <h2>SIX CORES: STREAM GAME CREATE</h2>
            <br/>
            <Button size="huge" color='yellow'>Learn More</Button>
            <br/>
            <br/>
            <br/>
            <Grid centered columns={3}>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>

                <Image size='tiny' src={arrow} className="arrow" centered/>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid>
          </Container>

        </div>

    )
  }
}

class FooterMenu extends React.Component {
  render() {

    const options = [

      { key: 1, text: 'Global English', value: 1 },
      { key: 2, text: 'Brazil', value: 2 },
      { key: 3, text: 'Canads', value: 3 },
    ]

    return (
<div className="black-background">
        <Container>
          <Grid columns={6} className="six-column-grid-container">
            <Grid.Column>
              <List>
                <List.Item>
                  <h4>SELECT YOUR COUNTRY</h4>
                </List.Item>
                <br/>
                <List.Item>
                  <Menu compact>
                    <Dropdown text='United States' options={options} simple item/>
                  </Menu>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>

              <List>
                <List.Item>
                  <h4>SUPPORT</h4>
                </List.Item>
                <List.Item>
                FAQs
              </List.Item>
              <List.Item>
                Downloads
              </List.Item>
              <List.Item>
                Warranty
              </List.Item>
              <List.Item>
                How-To Guides
              </List.Item>
              <List.Item>
                RMAs/Returns
              </List.Item>
              <List.Item>
                Tech Support
              </List.Item>
              <List.Item>
                Memory Finder
              </List.Item>
              <List.Item>
                PSU Finder
              </List.Item>
            </List>
          </Grid.Column>


          <Grid.Column>
            <List>
              <List.Item>
                <h4>WHERE TO BUY</h4>
              </List.Item>
              <List.Item>
                Online
              </List.Item>
              <List.Item>
                Stores Near You
              </List.Item>
            </List>
          </Grid.Column>


          <Grid.Column>

            <List>
              <List.Item>
                <h4>COMPANY</h4>
              </List.Item>
              <List.Item>
                About Corsair
              </List.Item>
              <List.Item>
                Careers
              </List.Item>
              <List.Item>
                Contact
              </List.Item>
              <List.Item>
                Press
              </List.Item>

            </List>
          </Grid.Column>


          <Grid.Column>

            <List>
              <List.Item>
                <h4>COMMUNITY</h4>
              </List.Item>
              <List.Item>
                Blogs
            </List.Item>
            <List.Item>
              Forums
            </List.Item>
            <List.Item>
              SystemBuilds and <br/>Inspiration
            </List.Item>
            <List.Item>
              How-To DIY
            </List.Item>
            <List.Item>
              Corsair News
            </List.Item>
          </List>
        </Grid.Column>

    <Grid.Column>


      <i class="gray inverted bordered facebook icon"></i>


      <i class="gray inverted bordered instagram icon"></i>

      <i class="gray inverted bordered twitter icon"></i>

      <i class="gray inverted bordered youtube icon"></i>

    </Grid.Column>
  </Grid>
  </Container>
</div>
  )
  }
}

class YellowLine extends React.Component {
  render() {
    return (
        <div class="yellow-background-line">
        </div>

    )
  }
}

class FooterBottom extends React.Component {
  render() {
    const menuStyle = { backgroundColor: 'black', boxShadow: 'none', border: 'none', borderRadius: '0 px' };

    return (

        <div className="">

          <Menu inverted borderless style={menuStyle}>
            <Container>
              <Menu.Item text="Copyright © 2018 Corsair. All rights reserved.">
                Copyright © 2018 Corsair. All rights reserved.
              </Menu.Item>

                <Menu.Item fitted position="right">
                  Privacy Policy
                </Menu.Item>
                <Menu.Item>
                  -
                </Menu.Item>
                <Menu.Item fitted>
                  Terms of Use
                </Menu.Item>

            </Container>
          </Menu>

        </div>
    )
  }
}

class YourChoice extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Middle/>
          <FooterMenu/>
          <YellowLine/>
          <FooterBottom/>
        </div>
    );
  }
}

ReactDOM.render(
    <YourChoice/>
    , document.getElementById('root'));
