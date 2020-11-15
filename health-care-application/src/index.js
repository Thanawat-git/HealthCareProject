import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import elderlyReducer from './Reducers/elderlyReducer'
import { Provider } from 'react-redux'

const store = createStore(elderlyReducer);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

