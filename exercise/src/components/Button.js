import React, {Component} from 'react';

const styles = {
  button: {
    width:   100,
    margin:  8,
    padding: 8
  }
};
export default class Button extends Component {
  
  render() {
    // console.log('object', this.props);
    return (
      <button style={{...styles.button, ...this.props.style}}>
        {this.props.children}
      </button>
    );
  }
}

