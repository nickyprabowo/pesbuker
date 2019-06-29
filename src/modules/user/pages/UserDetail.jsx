import React, { Component } from 'react'
import { Grid, Header, Icon } from "semantic-ui-react";

export default class UserDetail extends Component {
  constructor(props){
    super()
  }

  componentDidMount = () => {
    
  }

  render() {
      return (
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header as='h2'>
                  <Icon name='user' />
                  <Header.Content>
                    Account Settings
                    <Header.Subheader>Manage your preferences</Header.Subheader>
                  </Header.Content>
                </Header>  
              </Grid.Column>    
            </Grid.Row>  
          </Grid>
      )
  }
}
