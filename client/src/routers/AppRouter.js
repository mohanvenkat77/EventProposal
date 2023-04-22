import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { VendorProposals } from "../components/vendor/VendorProposals";
import User from "../components/user/User";
import "../styles/app.css";
import "../styles/card1.css";
import "../styles/card2.css";
import "../styles/carditem.css";
import "../styles/cardList.css";
import "../styles/contacts.css";
import "../styles/eachProposal.css";
import "../styles/eventinfo.css";
import "../styles/header.css";
import "../styles/newProposal.css";
import "../styles/user.css";
import "../styles/venue.css";
import "../styles/HeaderCard.css";
import EventInfo from "../components/user/EventInfo";
import Home from "../components/LoginAndRegister/Home";

export function AppRouter() {
  return <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/vendor" element={<Header />}>
            <Route path="proposals" element={<VendorProposals />} />
          </Route>
            <Route path="/user/proposals" element={<User />} />
          <Route path="/user/:id" element={<EventInfo />} />
        </Routes>
      </BrowserRouter>
    </>
}
