import React from 'react'
import "./styles/app.css";
import "./styles/header.css";
import "./styles/carditem.css"
import "./styles/cardList.css"
import "./styles/user.css"
import "./styles/eventinfo.css"
import "./styles/card1.css"
import "./styles/card2.css"
import "./styles/venue.css"
import "./styles/contacts.css"
import { Header } from './components/Header'
import User from './components/user/User';
import EventInfo from './components/user/EventInfo';

const App = () => {
  return <>
  <Header />
  {/* <User/> */}
  <EventInfo/>
  </>
}

export default App
