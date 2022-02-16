import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { Provider } from "react-redux";
import {applyMiddleware,createStore} from "redux";
import rootreducers from "./reducers";
import thunk from "redux-thunk"


var createstoremiddleware = createStore(rootreducers,applyMiddleware(thunk))

ReactDOM.render(


<Provider store={createstoremiddleware}>

    <App />

</Provider>

,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
