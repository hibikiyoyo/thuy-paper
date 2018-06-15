import React, { Component } from 'react';
class Menu extends Component {
  render() {
    return (
        <div className="navbar navbar-inverse">
        <a className="navbar-brand">ISCO</a>
        <ul className="nav navbar-nav" >
            <li className="active">
                <a> Home </a>
            </li>
        </ul>
    </div>
    );
  }
}

export default Menu;
