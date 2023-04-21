import React, { useEffect, useState } from "react";
import { EachProposal } from "./EachProposal";
import { NewProposal } from "./NewProposal";
import { allProposalByVendor_api } from "../../utills/api-utill";

import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import proposalFilter from "../../utills/proposalFilter";


export function VendorProposals() {
    const navigate=useNavigate()
    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(null);
    const [proposals, setProposals] = useState([]);
    const [original, setOriginal] = useState([]);
    const [showfilters, setShowfilters] = useState(false);
    const [filters, setFilters] = useState({
        wedding: false,
        birthday: false,
        charity: false,
        reception: false,
        party: false,
        productLaunch: false,
        formal : false,
        inFormal : false,
        internal : false,
        external : false,
    });

    function getProposals() {
        allProposalByVendor_api("sabeerForDefault")
            .then(res => {
                if (res.status === "Success") {
                    setProposals(res.proposals);
                    setOriginal(res.proposals);
                }
                else alert(res.message);
            })
    }

    useEffect(() => {
    let token=localStorage.getItem("token")
        if(!token) return navigate("/")
        let user=jwtDecode(token)
        if(!user.user.isVendor) return navigate("/")
        getProposals();
    }, []);

    function onFilter(key, val) {
        // console.log(filters)
        let inp = { ...filters, [key]: val };
        const result = proposalFilter(inp, original);
        if (!result) getProposals();
        else {
            setProposals(result);
        }
    }

    function searchBar(val) {
        if (val) {
            setProposals(ex => {
                return ex.filter(each => {
                    if (each.eventName.match(new RegExp(val, "i"))) return true
                    else return false
                })
            });
        } else {
            getProposals();
        }
    }
    return <>
        <div className="vendor-proposals-container">
            <header id="vendors-header">
                <section className="left-section">
                    <h1>Proposals</h1>

                    <div className="img-container">
                        <img src={require("../../images/search.svg").default} />
                    </div>
                    <input className="search-input" placeholder="search projects..." onChange={e => searchBar(e.target.value)} />

                </section>
                <section className="right-section" id="filter">
                    <div className="img-container" onClick={() => setShowfilters(!showfilters)}>
                        <img src={require("../../images/1608702_filter_icon (1).svg").default} />
                    </div>
                    {showfilters && <ul>
                        <li>Event-Type</li>
                        <li>
                            <input type="checkbox" id="weddingFilter" onChange={(e) => {
                                setFilters(ex => ({ ...ex, wedding: e.target.checked }));
                                onFilter("wedding", e.target.checked);
                            }} />
                            <label htmlFor="weddingFilter">Wedding</label>
                        </li>
                        <li>
                            <input type="checkbox" id="birthdayFilter" onChange={(e) => {
                                setFilters(ex => ({ ...ex, birthday: e.target.checked }));
                                onFilter("birthday", e.target.checked);
                            }} />
                            <label htmlFor="birthdayFilter">Birthday</label>
                        </li>
                        <li>
                            <input type="checkbox" id="receptionFilter" onChange={(e) => {
                                setFilters(ex => ({ ...ex, reception: e.target.checked }));
                                onFilter("reception", e.target.checked);
                            }} />
                            <label htmlFor="receptionFilter">Reception</label>
                        </li>
                        <li>
                            <input type="checkbox" id="charityFilter" onChange={(e) => {
                                setFilters(ex => ({ ...ex, charity: e.target.checked }));
                                onFilter("charity", e.target.checked);
                            }} />
                            <label htmlFor="charityFilter">Charity</label>
                        </li>
                        <li>
                            <input type="checkbox" id="partyFilter" onChange={(e) => {
                                setFilters(ex => ({ ...ex, party: e.target.checked }));
                                onFilter("party", e.target.checked);
                            }} />
                            <label htmlFor="partyFilter">Party</label>
                        </li>
                        <li>
                            <input type="checkbox" id="productLaunchFilter" onChange={(e) => {
                                setFilters(ex => ({ ...ex, productLaunch: e.target.checked }));
                                onFilter("productLaunch", e.target.checked);
                            }} />
                            <label htmlFor="productLaunchFilter">Product launch</label>
                        </li>
                        <li>Proposal-Type</li>
                        <li>
                            <input type="checkbox" id="formalFilter" onChange={(e) => {
                                setFilters(ex => ({ ...ex, formal: e.target.checked }));
                                onFilter("formal", e.target.checked);
                            }} />
                            <label htmlFor="formalFilter">Formal</label>
                        </li>
                        <li>
                            <input type="checkbox" id="informalFilter" onChange={(e) => {
                                setFilters(ex => ({ ...ex, inFormal: e.target.checked }));
                                onFilter("inFormal", e.target.checked);
                            }} />
                            <label htmlFor="informalFilter">In-Formal</label>
                        </li>
                        <li>
                            <input type="checkbox" id="internalFilter" onChange={(e) => {
                                setFilters(ex => ({ ...ex, internal: e.target.checked }));
                                onFilter("internal", e.target.checked);
                            }} />
                            <label htmlFor="internalFilter">Internal</label>
                        </li>
                        <li>
                            <input type="checkbox" id="externalFilter" onChange={(e) => {
                                setFilters(ex => ({ ...ex, external: e.target.checked }));
                                onFilter("external", e.target.checked);
                            }} />
                            <label htmlFor="externalFilter">External</label>
                        </li>
                    </ul>}
                    <button onClick={() => setCreate(true)}>CREATE</button>
                </section>
            </header>

            {
                proposals.map(proposal => {
                    return <EachProposal key={proposal._id} proposal={proposal}
                        onDelete={(id) => {
                            setProposals(proposals.filter(({ _id }) => {
                                return id !== _id;
                            }))
                        }}
                        onEdit={(data) => setEdit(data)}
                        setCreate={setCreate}
                    />
                })
            }
        </div>
        {create && <NewProposal
            setCreate={setCreate}
            onAdd={(data) => setProposals([...proposals, data])}
            onUpdate={(data) => setProposals(ex => {
                return ex.map(each => {
                    if (each._id === data._id) return data;
                    else return each;
                })
            })}
            edit={edit}
            onEdit={() => setEdit(null)} />}
    </>
}