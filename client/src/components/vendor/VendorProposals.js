import React, { useState } from "react";
import { EachProposal } from "./EachProposal";
import { NewProposal } from "./NewProposal";

export function VendorProposals() {
    const [create, setCreate] = useState(false);
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
                <button onClick={() => setCreate(true)}>CREATE</button>
            </section>
        </header>
        <EachProposal />
        <EachProposal />
        <EachProposal />
        <EachProposal />
       
    </div>
    {create && <NewProposal setCreate = {setCreate} />}
    </>
}