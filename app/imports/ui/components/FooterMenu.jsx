import React from 'react';
import { Container, Grid, Label, List, Input} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './style.css';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Container>
            <Grid three column>
              <Grid.Column>
                NAVIGATION
                <hr/>
                <List>
                  <List.Item>About Us</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Store Locations</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                MAIN MENU
                <hr/>
                <List>
                  <List.Item>Men</List.Item>
                  <List.Item>Women</List.Item>
                  <List.Item>Kids</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                CONNECT
                <hr/>
                <List>
                  <List.Item>Sign up for the Latest Updates</List.Item>
                  <Input labeled>
                    <Input type={'text'} placeholder={'Enter Email Address'}/>
                    <Label black>
                      Join
                    </Label>
                  </Input>
                </List>
              </Grid.Column>
            </Grid>
          </Container>
        </div>

    );
  }
}
