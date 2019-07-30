import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';

export default class TopBar extends Component {
  state: { loggedIn: false }
  
  logIn = () => {

    this.setState({loggedIn: !this.state.loggedIn});
    // cl
  };

  onToggleList = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn,
    }));
  }

  render() {
    
    console.log("logged", this.state);

    return (
      <header style={{
        height:          48,
        width:           '100%',
        backgroundColor: 'rgb(102,63,180)',
        color:           'white',
        padding:         '6px 10px',
        display:         'flex',
        flexDirection:   'row',
        alignItems:      'center'
      }}
      >
        <div style={styles.logo}>
          <Link to="/">
            <img alt={'logo'} style={{ maxHeight: 40, flex: 1}} src="favicon-196x196.png"/>
          </Link>
        </div>
        <div>
          {'Modus Create'}
        </div>
        <div style={{float: 'left', color: 'white', flex: 1}} />
        <div style={{float: 'right', paddingRight: 20}}>
          <Button style={{backgroundColor: 'blue', color: 'white'}} onClick={this.onToggleList}>Login</Button>
          <Button style={{backgroundColor: 'red', color: 'white'}}>Signup</Button>
        </div>
      </header>
    );
  } 
}

const styles = {
  logo: {
    float:  'left',
    margin: 8
  }
};

