import React, { Component } from 'react'
import logo from './assets/DUShield.png'
import './App.css'
import GoogleMapsApiWrapper from './components/GoogleMapsApiWrapper.jsx'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent.jsx'
import Home from './views/Home.jsx'
import Header2 from './components/Header2.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

const api_Url =
  'https://crimsonandgoldtrail.herokuapp.com/api/alpha/businesses'

class App extends Component {
  state = {businesses: []}

  componentDidMount() {
    this.getBusinesses()
  }

  getBusinesses = () => {
    return fetch(api_Url)
      .then(response => response.json())
      .then(businesses => this.setState({businesses}))
  } 

  render() {
    return <div className='App'>
        <MuiThemeProvider>
          <Header2 className='App-header' />
          <main className='App-main'>
            <Home businesses={this.state.businesses} />
          </main>
          <Footer />
        </MuiThemeProvider>
      </div>
  }
}

export default App

