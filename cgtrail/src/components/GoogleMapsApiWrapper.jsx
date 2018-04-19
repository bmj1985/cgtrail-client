import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import React, {Component} from 'react'
import config from '../config'
import images from '../assets/images'

export class MapContainer extends Component {
  render () {
    return <Map businesses={this.props.businesses} google={this.props.google} zoom={11} initialCenter={{ lat: 39.706524, lng: -105.01 }}>
      {
        this.props.businesses.map(business => {
          return business.Location.map(location => {
            return <Marker position={{ lat: location.Coordinates[0], lng: location.Coordinates[1] }} icon={images.Imgur_Icon}  />;
          })
        })
      }
    </Map>
  }
}
const GoogleMapsApiKey = config.REACT_APP_GOOGLE_MAPS_API_KEY
export default GoogleApiWrapper({
  apiKey: GoogleMapsApiKey
})(MapContainer)
