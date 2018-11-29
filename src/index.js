import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
 import { Provider } from 'react-redux'
 import { createStore, applyMiddleware } from "redux";
 import thunk from "redux-thunk";
import reducersCombined from './redux';

export const store = createStore(
    reducersCombined,
    applyMiddleware(thunk)
  );
console.log(store.getState());

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
