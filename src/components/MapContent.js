//cai nay gan voi home 

import React, { Component } from 'react';
import { Map ,InfoWindow, GoogleApiWrapper ,Marker } from 'google-maps-react';
//import Map from './../components/Map'
//import Marker from './Marker'
 // for use google 
var info = {
  url: "https://maps.google.com/mapfiles/kml/shapes/camera.png", // url
  
  //Size : (22,32)
};

export class MapContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  render() {
    const style = {
      width: 1100,
      height: 550,
      textAlign: 'center'
    }
    return (
      <div>
        <Map //google={this.props.google}
          onClick={this.onMapClicked}
          google={window.google}
          style={{ height: `72%` ,width : `95%`}}
          initialCenter={{
            lat: 52.5149304,
            lng: 13.318743
          }}
          zoom={15}
          >
         </Map>
         </div>
    );


  }
}

export default MapContent
