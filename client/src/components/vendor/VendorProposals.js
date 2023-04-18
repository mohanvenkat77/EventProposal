import React from "react";
import { EachProposal } from "./EachProposal";

export function VendorProposals() {
    return <>
    <div className="vendor-proposals-container">
        <header id="vendors-header">
            <section className="left-section">
            <h1>Proposals</h1>
            
                <div className="img-container">
                    <img src={require("../../images/search.svg").default} />
                </div>
                <input className="search-input" placeholder="search projects..."/>
        
            </section>
            <section className="right-section">
                <div className="img-container">
                <img src={require("../../images/1608702_filter_icon (1).svg").default} />
                </div>
                <button>CREATE</button>
            </section>
        </header>
        <EachProposal />
        <EachProposal />
        <EachProposal />
        <EachProposal />
       
    </div>
    
    </>
}