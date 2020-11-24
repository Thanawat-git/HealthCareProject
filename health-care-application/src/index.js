import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(reducers, applyMiddleware(thunk, logger));

// store.subscribe(()=>{
//   console.log(store.getState())
// })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
