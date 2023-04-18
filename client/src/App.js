import React from 'react'
import "./styles/app.css";
import "./styles/header.css";
import "./styles/vendorProposal.css"
import "./styles/eachProposal.css"
import { Header } from './components/Header'
import { AppRouter } from './routers/AppRouter';

const App = () => {
  return <>
  <AppRouter />
  </>
}

export default App
