import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import FlatMap from './flat_map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlatLatitude: 0,
      selectedFlatLongitude: 0
    };
  }

  selectFlat = (lat, lng) => {
    this.setState({
      selectedFlatLatitude: lat,
      selectedFlatLongitude: lng
    });
  }

  render() {
    return (
      <div className="main-container">
        <div className="left-scene">
          <FlatList flats={flats} />
        </div>
        <div className="right-scene">
          <FlatMap
            latitude={this.state.selectedFlatLatitude}
            longitude={this.state.selectedFlatLongitude}
          />
        </div>
      </div>
    );
  }
}

export default App;
