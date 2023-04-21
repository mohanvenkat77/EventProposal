import React from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { VendorProposals } from "../components/vendor/VendorProposals";
import VendorSignIn from "../components/Auth/VendorSign";
import PrivateRouter from "../components/Private/PrivateRouter";
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
import EventInfo from "../components/user/EventInfo";
import PrivateVendor from "../components/Private/PrivateVendor";

export function AppRouter() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<VendorSignIn/>}/>
          
          <Route path="/vendor" element={
            <PrivateVendor child={<Header/>}></PrivateVendor>
          }>
            <Route path="proposals" element={<VendorProposals />} />
          </Route>


          <Route
            path="/user"
            element={<PrivateRouter child={<User />}></PrivateRouter>}
          />
          <Route
            path="/user/:id"
            element={<PrivateRouter child={<EventInfo />}></PrivateRouter>}
          />
        </Routes>
      </HashRouter>
    </>
  );
}
