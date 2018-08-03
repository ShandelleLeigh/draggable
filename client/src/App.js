import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import LeftBar from './leftbar';
import Canvas from './canvas';


import './App.css';

class App extends Component {

  state = {
    canvas: [],
    draggableItems: [],
    objects: [],
  }



  render() {
    return (
      <div className="App">
        <Grid container>
          <Grid item style={styles.leftNav}>
          <LeftBar
          />
          </Grid>
          <Grid item style={styles.canvas}>
          <Canvas

          />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = {
  leftNav: {
    width: 'auto',
    paddingTop: '15px',
    height: '100vh',
  },
  canvas: {
    width: '85%',
    height: '100vh',
    backgroundColor: '#E3F2FD',
  },
}

export default App;
