import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react'
 
export class MapContainer extends Component {
   constructor(props) {
        super(props);
        this.state = {
        };
    }
  render() {
    return <Map businesses={this.props.businesses} google={this.props.google} zoom={11} initialCenter={{ lat: 39.706524, lng: -105.01 }}>
          {this.props.businesses.map(business => {
            return business.Location.map(location => {
            return <Marker position={{lat: location.Coordinates[0], lng: location.Coordinates[1]}} />
            })
            })
            }
      </Map>
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
})(MapContainer)