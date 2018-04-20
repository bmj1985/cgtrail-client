import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import { createMuiTheme } from 'material-ui/styles';


// const theme = createMuiTheme({
//   palette: {
//   },
// })

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
