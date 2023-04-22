import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore,} from '@reduxjs/toolkit'
import App from './App';
import selectedstore, { selecteditems } from './redux/selectedstore';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
const store=configureStore({
    reducer:{
      selected:selectedstore
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware()
    
  })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

