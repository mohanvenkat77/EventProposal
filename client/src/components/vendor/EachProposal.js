import React from "react";

export function EachProposal() {
    return <>
        <div className="eachProposal-container">
            <section className="top-section">
                <h1>Event Name</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </section>
            <section className="bottom-section">
                <section className="event-details" >
                    <div>
                        <p>Event Type</p>
                        <h1>Marriage</h1>
                    </div>
                    <div>
                        <p>Proposal Type</p>
                        <h1>Venue</h1>
                    </div>
                    <div>
                        <p>From Date</p>
                        <h1>21-JAN-2019</h1>
                    </div>
                    <div>
                        <p>To Date</p>
                        <h1>21-JAN-2019</h1>
                    </div>
                    <div>
                        <p>Budget</p>
                        <h1>20000</h1>
                    </div>
                </section>
                <section className="feature">
                    <div className="img-container">
                        <img src={require("../../images/pencil-edit-button.svg").default} />
                    </div>
                    <div className="img-container">
                        <img src={require("../../images/bin.svg").default} />
                    </div>
                </section>
            </section>
        </div>
    </>
}