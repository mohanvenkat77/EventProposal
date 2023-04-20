import React from 'react'
import "./styles/app.css";
import "./styles/header.css";

import "./styles/vendorProposal.css";
import "./styles/eachProposal.css";
import "./styles/newProposal.css";
import "./styles/VendorSignUp.css";
import "./styles/VendorSignIn.css";
import "./styles/UserSignIn.css"
import { AppRouter } from './routers/AppRouter';

const App = () => {
  return <>
  <AppRouter />
  </>
}

export default App;
