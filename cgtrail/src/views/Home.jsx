import React, {Component} from 'react'
import GoogleMapsApiWrapper from '../components/GoogleMapsApiWrapper'


class Home extends Component {
    render () {
        return <main>
            <GoogleMapsApiWrapper businesses={this.props.businesses} />
          </main>;
    }
}

export default Home