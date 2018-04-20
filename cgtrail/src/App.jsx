import React, { Component } from 'react'
import logo from './assets/DUShield.png'
import './App.css'
import GoogleMapsApiWrapper from './components/GoogleMapsApiWrapper.jsx'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Home from './views/Home.jsx'
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
      <Header />
      <Router>
        <main className="App-main">
        <Home businesses={this.state.businesses} ></Home>
        </main>
      </Router>
      <Footer />
    </div>
  }
}

export default App
