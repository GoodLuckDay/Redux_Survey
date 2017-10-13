import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/App";

import {createStore} from 'redux';
import reducers from './reducers';
import * as actions from './actions';

const store = createStore(reducers);


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
