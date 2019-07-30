import React, { Component } from 'react';
import axios from 'axios';
import {
  Container,
  Card,
  Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async () => {
    await axios.get('https://randomuser.me/api/?results=20')
    .then( (response) => {
      console.log(response.data.results);
      this.setState({ users: response.data.results });
    })
    .catch( (error) => {
      console.log(error);
    });
  }
  render() {
    console.log('object', this.state.users);
    let { users } = this.state;
    return (
      <Container style={{ marginTop: '20px' }}>
        <Card.Group itemsPerRow={4}>
          {users.map(user => 
          
            (<Card color = 'green' >
            {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}
              <Card.Content>
                <Card.Header>First Name: {user.name.first}</Card.Header>                
                <Card.Description>
                  Last Name: {user.name.last}
                </Card.Description>
                <Card.Meta>
                  <span className='date'>Email: {user.email}</span>
                </Card.Meta>
                <Card.Meta>
                  <span className='date'>Phone: {user.phone}</span>
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Link to={`/user-detial/${user.id.name}`}>
                  <Icon name='eye' />
                  View Profile
                </Link>
              </Card.Content>
            </Card>)
          )}
        </Card.Group>
      </Container>
    )
  }
}
