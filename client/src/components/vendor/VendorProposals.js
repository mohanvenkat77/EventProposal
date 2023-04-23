import React, { useEffect, useState } from "react";
import { EachProposal } from "./EachProposal";
import { NewProposal } from "./NewProposal";
import { allProposalByVendor_api } from "../../utills/api-utill";

import { useNavigate, useOutletContext } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { proposalFilter } from "../../utills/proposalFilter";
import { getCurrentUser, getToken } from "../../utills/storage-utills";
import search from "../../images/search.svg";


export function VendorProposals() {
    const navigate = useNavigate()
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
        formal: false,
        inFormal: false,
        internal: false,
        external: false,
        ["0-25000"]: false,
        ["25001-50000"]: false,
        ["50001-75000"]: false,
        ["75001-100000"]: false,
        ["> 100000"]: false,
    });

    function getProposals() {
        allProposalByVendor_api(getCurrentUser()._id)
            .then(res => {
                if (res.status === "Success") {
                    setProposals(res.proposals);
                    setOriginal(res.proposals);
                }
                else alert(res.message);
            })
    }

    useEffect(() => {
        if (!getToken() || !getCurrentUser().isVendor) return navigate("/");
        getProposals();
    }, []);

    function onFilter(key, val) {
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
                        <img src={search} />
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
                        <li>Budget</li>
                        <li>
                            <input type="checkbox" id="0-25000Filter" onChange={(e) => {
                                setFilters(ex => ({ ...ex, ["0-25000"]: e.target.checked }));
                                onFilter("0-25000", e.target.checked);
                            }} />
                            <label htmlFor="0-25000Filter">0 - 25000</label>
                        </li>
                        <li>
                            <input type="checkbox" id="25001-50000Filter" onChange={(e) => {
                                setFilters(ex => ({ ...ex, ["25001-50000"]: e.target.checked }));
                                onFilter("25001-50000", e.target.checked);
                            }} />
                            <label htmlFor="25001-50000Filter">25001 - 50000</label>
                        </li>
                        <li>
                            <input type="checkbox" id="50001-75000Filter" onChange={(e) => {
                                setFilters(ex => ({ ...ex, ["50001-75000"]: e.target.checked }));
                                onFilter("50001-75000", e.target.checked);
                            }} />
                            <label htmlFor="50001-75000Filter">50001 - 75000</label>
                        </li>
                        <li>
                            <input type="checkbox" id="75001-100000Filter" onChange={(e) => {
                                setFilters(ex => ({ ...ex, ["75001-100000"]: e.target.checked }));
                                onFilter("75001-100000", e.target.checked);
                            }} />
                            <label htmlFor="75001-100000Filter">75001 - 100000</label>
                        </li>
                        <li>
                            <input type="checkbox" id="above100000Filter" onChange={(e) => {
                                setFilters(ex => ({ ...ex, ["> 100000"]: e.target.checked }));
                                onFilter("> 100000", e.target.checked);
                            }} />
                            <label htmlFor="above100000Filter">above 100000</label>
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