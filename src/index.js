import React from "react";
import { render } from "react-dom";
import App from "./containers/app";

import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/index";

const store = createStore(reducers, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
