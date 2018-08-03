import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



class DraggableBox extends Component {

  state = { style: styles.smallBox, activeItem: true,  }

  // handleDrop = (e) => {
  //   console.log('item released')
  // }

  render() {
    return (
      <div style={this.state.style}>
        &nbsp;
      </div>
    );
  }
}

const styles = {
  smallBox: {
    width: '35px',
    height: '35px',
    backgroundColor: '#4896ec',
    backgroundColor: 'rgba(72, 150, 236, .75)',
    border: '1px solid black',
    // draggable: 'true',
  },
  biggerBox: {
    width: '50px',
    height: '50px',
    backgroundColor: '#4896ec',
    backgroundColor: 'rgba(72, 150, 236, .75)',
    border: '1px solid black',
    // draggable: 'true',
  },
}

const mapStateToProps = state => {
  return { smallBox: state.smallBox };
};

export default DraggableBox;
