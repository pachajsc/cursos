import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Test from './containers/Test';
//import Library from './containers/Library';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './assets/scss/main.scss'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from "./assets/theme"
import ListItemsContextTag from './contexts/listItemsContext';
import SideBarActionsContextTag from './contexts/sideBarActionsContext';
import DataActionsContextTag from './contexts/dataContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DataActionsContextTag>
        <SideBarActionsContextTag>
          <ListItemsContextTag>
            <App />
          </ListItemsContextTag>
        </SideBarActionsContextTag>
      </DataActionsContextTag>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
