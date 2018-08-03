import React, { Segment, Component } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';

class LeftBar extends Component {

  state = {
    activeItem: '',
  }
  componentDidMount() {
    // console.log(this.state)
  }
  handleDrag = (e) => {
    // console.log(e.target);
    // console.log('not and empty formula')
    //get mouse coordinates, map item coordinates to mouse coordinates
  }

  handleDragStart = (e) => {
    console.log('value', e.target.value);
    this.setState({activeItem: e.target.name})
    // e.stopPropagation();
    // e.preventDefault();
  }
  handleDragEnd = (e) => {
    console.log(this.state)
    // e.stopPropagation();
    // e.preventDefault();
  }
  handleDrop = (e) => {
    console.log(this.state.activeItem, 'dropped!!')
    // e.stopPropagation();
    // e.preventDefault();
  }

  icons = () => {
    const items = [
    {name: 'redIcon', value: 'redBox', color: 'rgba(254, 83, 91, .75)' },
    {name: 'yellowIcon', value: 'yellowBox', color: 'rgba(246, 238, 98, .75)' },
    {name: 'blueIcon', value: 'blueBox', color: 'rgba(72, 150, 236, .75)' },
  ];

  return items.map( item => {
    let name = item.name
    let value = item.value
    let color = item.color
    return(
      <ListItem >
        <Button
          style={{backgroundColor: color, ...styles.smallBox}}
          name={name}
          value={value}
          draggable
          onDrag={this.handleDrag}
          onDragStart={this.handleDragStart}
          onDragEnd={this.handleDragEnd}
          onDrop={this.handleDrop}

        >
          &nbsp;
        </Button>
      </ListItem>
    )
  })


}

  render() {
    return (
      <div className="LeftBar">
        <List>
          <this.icons/>
        </List>
      </div>
    );
  }
}

const styles = {
  smallBox: {
  width: '35px',
  height: '35px',
  border: '1px solid black',
  draggable: 'true',
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
  return { activeItem: state.activeItem };
};

export default LeftBar;
