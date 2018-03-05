import React from 'react';
import { Container, Menu, Dropdown, Icon, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './style.css';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className={'middlemenu'}>
          <Container>
            <Grid centered>
              <Dropdown.item>
                <Dropdown text>MEN</Dropdown>
                <Menu>
                  <Dropdown.Item>TANK TOPS</Dropdown.Item>
                  <Dropdown.Item>SHIRTS</Dropdown.Item>
                </Menu>
              </Dropdown.item>

              <Dropdown.Item>
                <Dropdown text>WOMEN</Dropdown>
                <Menu>
                  <Menu.Item>TANK TOPS</Menu.Item>
                  <Menu.Item>SHIRTS</Menu.Item>
                </Menu>
              </Dropdown.Item>

              <Dropdown.Item>KIDS </Dropdown.Item>

              <Dropdown.Item>
                <Dropdown text>BRANDS</Dropdown>
                <Menu>
                  <Icon name={'search'}/>
                  <Menu.Item>My cart is currently empty</Menu.Item>
                </Menu>
              </Dropdown.Item>

              <a className="item">SEARCH</a>

            </Grid></Container>
        </Menu>

    )
  }
}
