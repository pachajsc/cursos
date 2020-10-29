import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Courses from './courses'
import NotFound from './NotFound'
const App = () => {
  return (
    <>
    <Router>
        <Switch>
          <Route  path="/course" component={Courses} />
          <Route component={NotFound} />
        </Switch>
      
    </Router>
    </>
  );
}

export default App;
