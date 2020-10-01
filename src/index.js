import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Test from './containers/Test';
//import Library from './containers/Library';
import Home from './containers/Home';
import * as serviceWorker from './serviceWorker';
import './assets/scss/main.scss'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from "./assets/theme"
import ListItemsContextTag from './contexts/listItemsContext';
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ListItemsContextTag>
        <Home />
      </ListItemsContextTag>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
