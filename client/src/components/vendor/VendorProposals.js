import React, { useEffect, useState } from "react";
import { EachProposal } from "./EachProposal";
import { NewProposal } from "./NewProposal";
import { allProposalByVendor_api } from "../../utills/api-utill";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export function VendorProposals() {
    const navigate=useNavigate()
    const [create, setCreate] = useState(false);
    const [proposals, setProposals] = useState([]);
    let summa = [1,2,3];
    useEffect(() => {
        let token=localStorage.getItem("token")
        if(!token) return navigate("/")
        let user=jwtDecode(token)
        if(!user.user.isVendor) return navigate("/")
        allProposalByVendor_api("sabeerForDefault") 
        .then(res => {
            if(res.status === "Success") setProposals(res.proposals);
            else alert(res.message);
        })
    }, [])
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

        {
            proposals.map(proposal => {
                return <EachProposal key={proposal._id} proposal={proposal} onDelete ={ (id) => {
                    setProposals(proposals.filter(({_id}) => {
                        return id !== _id ;
                    }))
                }}/>
            })
        }
    </div>
    {create && <NewProposal setCreate = {setCreate} onAdd={(data) => setProposals([...proposals, data])} />}
    </>
}