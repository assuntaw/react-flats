import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <div className="left-scene">
          <FlatList flats={flats} />
        </div>
        <div className="right-scene">MAP GOES HERE</div>
      </div>
    )
  }
}

export default App;
