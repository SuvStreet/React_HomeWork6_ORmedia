import React, { Component } from "react";

import TankopediaService from "../../services/tankopedia-service";

import "./item-list.css";

export default class ItemList extends Component {
  tankopediaService = new TankopediaService();

  state = {
    items: [],
  };

  // тяжёлые танки
  /* componentDidMount() {
    this.tankopediaService.getAllHeavy().then((data) => {
      this.setState({
        items: data,
      });
      //console.log(this.state);
    });
  } */

  // средние танки
  componentDidMount() {
    this.tankopediaService.getAllMedium().then((data) => {
      this.setState({
        items: data,
      });
      console.log(this.state);
    });
  } 

  render() {
    const { items } = this.state;

    return (
      <ul className="item-list list-group">
        {/* <li className="list-group-item">ИС-4</li>
        <li className="list-group-item">ОБЪЕКТ 705А</li>
        <li className="list-group-item">MAUS</li> */}
        {items.map((item) => {
          return (
            <li className="list-group-item" key={item.id} onClick={() => this.props.onSelectedItem(item.id)}>
              {item.name}
            </li>
          );
        })}
      </ul>
    );
  }
}
