// import React from 'react'
// import logo from '../assets/DENVERpoweredbyDU.png';


// export default function Footer () {
//   return (
//     <footer className="App-footer">
//       <img src={logo} className="poweredByDU" alt="logo" />
//     </footer>
//   )
// }

import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import logo from '../assets/DENVERpoweredbyDU.png'
import colors from '../styles/colors'

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Footer extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return <Paper zDepth={1} className="App-footer">
        <BottomNavigation selectedIndex={this.state.selectedIndex}
          style={
                { 
                  backgroundColor: colors.light,
                  height: '8vh',
                  }}>
          <BottomNavigationItem label="Recents" icon={recentsIcon} onClick={() => this.select(0)} color="action" />
          <BottomNavigationItem label="Favorites" icon={favoritesIcon} onClick={() => this.select(1)} style={{color: colors.light}} />
          <BottomNavigationItem label="Nearby" icon={nearbyIcon} onClick={() => this.select(2)} style={{color: colors.light}} />
          <BottomNavigationItem icon={<img src={logo} className="poweredByDU" alt="logo" />} />
        </BottomNavigation>
      </Paper>
  }
}

export default Footer


