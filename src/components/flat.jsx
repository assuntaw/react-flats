import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const cardBackground = {
      backgroundImage: `url(${this.props.imageUrl})`
    };

    return (
      <div className="flat-card" style={ cardBackground }>
        <div className="flat-price">{this.props.price} {this.props.priceCurrency}</div>
        <div className="flat-name">{this.props.name}</div>
      </div>
    );
  }
}

export default Flat;
