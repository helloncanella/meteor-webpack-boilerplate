// /src/HelloApp/Hello.jsx
import React, { Component, PropTypes } from 'react';
import './Hello.import.css';

export default class Hello extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    const { name } = this.props;

    return (
      <h1 className="helloMessage">
        Hello <span className="helloName">{name}</span>
      </h1>
    );
  }
}