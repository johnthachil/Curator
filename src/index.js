import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize.css';
import './index.css';

import App from './components/App';
import Header from './components/Header';
import MovieDetails from './components/MovieDetails';
import ShowDetails from './components/ShowDetails';


const Root = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/shows/:id" component={ShowDetails} />
      </Switch>
    </div>
  </Router>
);


ReactDOM.render(<Root />, document.getElementById('root'));
