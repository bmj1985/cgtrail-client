import React, { Component } from 'react'
import logo from './assets/DUShield.png'
import './App.css'
import GoogleMapsApiWrapper from './components/GoogleMapsApiWrapper.jsx'
import { BrowserRouter as Router, Link } from 'react-router-dom'

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
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Crimson and Gold Trail Project</h1>
      </header>
      <Router>
      <main>
        <GoogleMapsApiWrapper businesses={this.state.businesses}/>
      </main>
      </Router>
    </div>
  }
}

export default App
