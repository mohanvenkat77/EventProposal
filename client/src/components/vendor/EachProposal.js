import React, { useState } from "react";
import { deleteProposalByVendor_api } from "../../utills/api-utill";

export function EachProposal({ proposal, onDelete, onEdit, setCreate }) {
    const { eventName, placeOfEvent, proposalType, eventType, budget, From, To, _id, foodPreferences, events, description } = proposal;
    const [confirmDelete, setConfirmDelete] = useState(false);
    return <>
        <div className="eachProposal-container">
            <section className="top-section">
                <h1>{eventName}</h1>
                <p>{description} Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </section>
            <section className="bottom-section">
                <section className="event-details" >
                    <div>
                        <p>Event Type</p>
                        <h1>{eventType}</h1>
                    </div>
                    <div>
                        <p>Proposal Type</p>
                        <h1>{proposalType}</h1>
                    </div>
                    <div>
                        <p>From Date</p>
                        <h1>{From}</h1>
                    </div>
                    <div>
                        <p>To Date</p>
                        <h1>{To}</h1>
                    </div>
                    <div>
                        <p>Budget</p>
                        <h1>{budget}</h1>
                    </div>
                </section>
                <section className="feature">
                    <div className="img-container" onClick={() => {
                        onEdit(proposal);
                        setCreate(true);
                    }}>
                        <img src={require("../../images/pencil-edit-button.svg").default} />
                    </div>
                    <div className="img-container" onClick={() => {
                        setConfirmDelete(true)
                    }}>
                        <img src={require("../../images/bin.svg").default} />
                    </div>
                    {confirmDelete && <div className="delete-confirmation" >
                        <p>Are you sure!<br /> Do you want to delete?</p>
                        <div className="btns">
                            <button onClick={() => {
                                deleteProposalByVendor_api(_id)
                                    .then(res => {
                                        if (res.status === "Success") onDelete(_id);
                                        else {
                                            console.log(res.message)
                                            alert("Error occured, Please try again!")
                                        }
                                    })
                            }}>YES</button>
                            <button onClick={() => {
                                setConfirmDelete(false)
                            }}>NO</button>
                        </div>
                    </div>}
                </section>
            </section>
        </div>
    </>
}