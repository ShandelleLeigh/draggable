import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Canvas extends Component {
  state = {
    canvas: {
      x: 0,
      y: 0,
      z: 0,
      width: 0, height: 0,
    },
    canvasObjects: {},
    objectCount: 0,
  }

  createNewShape = (activeItem) => {
    let newCount = this.state.objectCount += 1

    // console.log(this.state.objectCount);
    let newObject = { name: `Object${newCount}`, color: 'blue', type: 'box' }
    // console.log(newObject);
    const newArray =  Object.assign({}, ...this.state.canvasObjects, newObject)
    console.log('State:  ', this.state.canvasObjects.length, 'newArr: ', newArray)
    this.setState = ({objectCount: newCount, canvasObjects: newArray })
    // console.log(this.state);
  }

  componentDidMount() {
    // const canvas = this.refs.canvas
    // const ctx = canvas.getContext("2d")
    // const canvasObjects = this.refs.canvasObjects
    console.log(this.state.canvasObjects);

  }

  handleDrop = (e) => {
    console.log('canvas handle drop')
  }

  handleDragEnter = (e) => {
    console.log('canvas handle enter')
  }

  handleDrop = (e) => {
    console.log('handle drop')
    this.createNewShape(this.state.activeItem)
    //mouse coordinates
  }
  handleDragEnterCanvas = (e) => {
    console.log('handleDrag EnterCanvas')
    // e.stopPropagation();
    // e.preventDefault();
  }
  handleDragOverCanvas = (e) => {
    console.log('handleDrag OverCanvas')
    e.stopPropagation();
    e.preventDefault();
  }


  render() {
    return (
      <div style={styles.canvasBackground}>
        <Paper style={styles.canvas}>

            <canvas
              // droppable
              style={styles.canvas}
              onDragEnter={this.handleDragEnter}
              onDrop={this.handleDrop}
              onDragOver={this.handleDragOverCanvas}
              onDragEnter={this.handleDragEnterCanvas}
              className= 'droppable'
             >
            </canvas>
        </Paper>
      </div>
    );
  }
}

const styles = {
  canvasBackground: {
    padding: '30px',
    height: '100vh',
  },
  canvas: {
    width: '100%',
    height: '100%',
  },
}
const mapStateToProps = state => {
  return {
    canvas: state.canvas,
    canvasObjects: state.canvasObjects,
  };
};

export default Canvas;
