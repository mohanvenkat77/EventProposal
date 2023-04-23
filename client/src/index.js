import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore,} from '@reduxjs/toolkit'
import App from './App';
import selectedstore from './redux/selectedstore';
import { Provider } from 'react-redux';
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