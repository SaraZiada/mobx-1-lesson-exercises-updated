import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
  
  checkItem = (event) => {
    this.props.store.checkItem(event.target.value)
  }
  editItem = () => {
    let newLocation = prompt("Please enter your name", this.props.i.location);
    if(newLocation != null)
      this.props.store.editItem(this.props.i.name, newLocation)
  }
  deleteItem = (event) => {
    this.props.store.deleteItem(this.props.i.name)
  }
  render() {
    let item = this.props.i
    let divClassName = item.completed ? "crossed" : "item"
    return (
      <div className={divClassName}>
        <input type="checkbox" value={item.name} onChange={this.checkItem} />{item.name} at {item.location}
        <button onClick={this.editItem}>Edit</button>
        <button onClick={this.deleteItem}>Delete</button>
      </div>)
  }
}

export default observer(Item)