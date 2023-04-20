import React from "react";

export function NewProposal({ setCreate }) {
    return <>
        <div className="proposal-form-container">
            <form>
                <span id="cross" onClick={() => setCreate(false)}><ion-icon name="close-outline"></ion-icon></span>
                <h1>Create Proposal</h1>
                <div className="section-container" >
                    <div className="left-section">
                        <div className="name-field">
                            <label htmlFor="eventName">Event Name</label>
                            <input type="text" id="eventName" name="eventName" placeholder="Name" required />
                        </div>
                        <div className="type-field">
                            <div className="type">
                                <label htmlFor="place">Place of Event</label>
                                <input type="text" id="place" name="place" placeholder="Select" required />
                                <span><ion-icon name="chevron-down-outline"></ion-icon></span>
                            </div>
                            <div className="type">
                                <label htmlFor="proposalType">Proposal Typet</label>
                                <input type="text" id="proposalType" name="proposalType" placeholder="Select" required />
                                <span><ion-icon name="chevron-down-outline"></ion-icon></span>
                            </div>
                        </div>
                        <div className="type-field">
                            <div className="type">
                                <label htmlFor="eventType">Event Type</label>
                                <input type="text" id="eventType" name="eventType" placeholder="Select" required />
                                <span><ion-icon name="chevron-down-outline"></ion-icon></span>
                            </div>
                            <div className="type">
                                <label htmlFor="budjet">Budjet</label>
                                <input type="number" id="budjet" name="budjet" placeholder="000000" required />
                            </div>
                        </div>
                        <div className="type-field">
                            <div className="type">
                                <label htmlFor="from">From</label>
                                <input type="date" id="from" name="from" required />
                            </div>
                            <div className="type">
                                <label htmlFor="to">To</label>
                                <input type="date" id="to" name="to" required />
                            </div>
                        </div>
                        <div className="description-field">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" name="description" placeholder="Description" required />
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="img-field">
                            <div className="label-field">
                                <label>Images</label>
                                <button>Add</button>
                            </div>
                            <div className="img-grid">
                                <div className="img-container"></div>
                                <div className="img-container"></div>
                                <div className="img-container"></div>
                                <div className="img-container"></div>
                                <div className="img-container"></div>
                                <div className="img-container"></div>
                                <div className="img-container"></div>
                                <div className="img-container"></div>
                                <div className="img-container"></div>
                                <div className="img-container"></div>
                            </div>
                        </div>
                        <div className="food-preference-field">
                            <label htmlFor="description">Food Preferencs</label>
                            <textarea id="description" name="description" placeholder="Preferences" required />
                        </div>
                        <div className="events-field">
                            <label htmlFor="description">Events</label>
                            <textarea id="description" name="description" placeholder="Preferences" required />
                        </div>
                    </div>
                </div>
                <div className="button-field">
                    <button type="submit" >ADD</button>
                </div>

            </form>
        </div>
    </>
}