import React, { useEffect, useState } from "react";
import { editProposal_api, newProposal_api } from "../../utills/api-utill";
import { useOutletContext } from "react-router-dom";

export function NewProposal({ setCreate, onAdd, onUpdate, edit, onEdit }) {

    const [formData, setFormData] = useState({
        eventName: "",
        placeOfEvent: "",
        proposalType: "",
        eventType: "",
        budget: "",
        From: "",
        To: "",
        description: "",
        foodPreferences: "",
        events: ""
    });
    const [boo, setBoo] = useState(true);
    const [imgArray, setImgArray] = useState([]);
    useEffect(() => {
        if (edit) {
            setFormData({ ...edit });
            setImgArray(edit.images.map(each => `http://localhost:5000/proposal/images/${each}`));
        }
    }, []);

    function setPreview(files) {
        setImgArray("");
        for (let i = 0; i < files.length; i++) {
            let url = URL.createObjectURL(files[i]);
            setImgArray(arr => ([...arr, url]));
        }
    }
    const { userID } = useOutletContext();
    function formSubmission(e) {
        e.preventDefault();
        setBoo(false);
        let result = new FormData(e.target);
        result.append("vendorId", userID)
        if (!edit) {
            newProposal_api(result)
                .then(res => {
                    if (res.status === "Success") {
                        onAdd(res.proposal);
                        setCreate(false);
                        setBoo(true);
                    } else alert(res.message);
                })
                .catch(err => {
                    setBoo(true);
                    alert("Error occured, Please try again!");
                })
        } else {
            editProposal_api(result, edit._id)
                .then(res => {
                    if (res.status === "Success") {
                        onUpdate(res.proposal);
                        onEdit(null);
                        setCreate(false);
                        setBoo(true);
                    } else alert(res.message);
                })
                .catch(err => {
                    setBoo(true);
                    alert("Error occured, Please try again!");
                })
        }
    }

    return <>
        <div className="proposal-form-container">
            <form onSubmit={formSubmission}>
                <span id="cross" onClick={() => {
                    setCreate(false);
                    onEdit(null);
                }}><ion-icon name="close-outline"></ion-icon></span>
                <h1>Create Proposal</h1>
                <div className="section-container" >
                    <div className="left-section">
                        <div className="name-field">
                            <label htmlFor="eventName">Event Name</label>
                            <input type="text" id="eventName" name="eventName" value={formData.eventName} placeholder="Name" required onChange={(e) => setFormData(ex => ({ ...ex, eventName: e.target.value }))} />
                        </div>
                        <div className="type-field">
                            <div className="type">
                                <label htmlFor="place">Place of Event</label>
                                <select id="place" name="placeOfEvent" value={formData.placeOfEvent} onChange={(e) => setFormData(ex => ({ ...ex, placeOfEvent: e.target.value }))}>
                                    <option value={"Select"} >Select</option>
                                    <option value={"Tamilnadu"} >Tamilnadu</option>
                                    <option value={"Bengaluru"} >Bengaluru</option>
                                    <option value={"Hydrabad"} >Hydrabad</option>
                                    <option value={"Kerala"} >Kerala</option>
                                </select>
                                {/* <input type="text" id="place" name="place" placeholder="Select" required />
                                <span><ion-icon name="chevron-down-outline"></ion-icon></span> */}
                            </div>
                            <div className="type">
                                <label htmlFor="proposalType">Proposal Type</label>
                                <select id="proposalType" name="proposalType" value={formData.proposalType} onChange={(e) => setFormData(ex => ({ ...ex, proposalType: e.target.value }))}>
                                    <option value={"Select"} >Select</option>
                                    <option value={"Formal"} >Formal</option>
                                    <option value={"In-Formal"} >In-Formal</option>
                                    <option value={"Internal"} >Internal</option>
                                    <option value={"External"} >External</option>
                                </select>
                                {/* <input type="text" id="proposalType" name="proposalType" placeholder="Select" required />
                                <span><ion-icon name="chevron-down-outline"></ion-icon></span> */}
                            </div>
                        </div>
                        <div className="type-field">
                            {/* <div className="type">
                                <label htmlFor="eventType">Event Type</label>
                                <input type="text" id="eventType" name="eventType" placeholder="Select" required />
                                <span><ion-icon name="chevron-down-outline"></ion-icon></span>
                            </div> */}
                            <div className="type">
                                <label htmlFor="eventType">Event Type</label>
                                <select id="eventType" name="eventType" value={formData.eventType} onChange={(e) => setFormData(ex => ({ ...ex, eventType: e.target.value }))}>
                                    <option value={"Select"} >Select</option>
                                    <option value={"Wedding"} >Wedding</option>
                                    <option value={"Birthday"} >Birthday</option>
                                    <option value={"Reception"} >Reception</option>
                                    <option value={"Charity"} >Charity</option>
                                    <option value={"Party"} >Party</option>
                                    <option value={"Product launch"} >Product launch</option>
                                </select>
                            </div>
                            <div className="type">
                                <label htmlFor="budjet">Budget</label>
                                <input type="number" id="budjet" name="budget" value={formData.budget} placeholder="000000" required onChange={(e) => setFormData(ex => ({ ...ex, budget: e.target.value }))} />
                            </div>
                        </div>
                        <div className="type-field">
                            <div className="type">
                                <label htmlFor="from">From</label>
                                <input type="date" id="from" name="From" value={formData.From} required onChange={(e) => setFormData(ex => ({ ...ex, From: e.target.value }))} />
                            </div>
                            <div className="type">
                                <label htmlFor="to">To</label>
                                <input type="date" id="to" name="To" value={formData.To} required onChange={(e) => setFormData(ex => ({ ...ex, To: e.target.value }))} />
                            </div>
                        </div>
                        <div className="description-field">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" name="description" value={formData.description} placeholder="Description" required onChange={(e) => setFormData(ex => ({ ...ex, description: e.target.value }))} />
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="img-field">
                            <div className="label-field">
                                <label>Images</label>
                                <input type="file" id="img-file" name="images" multiple="multiple" accept="image/*" onChange={(e) => setPreview(e.target.files)} />
                                <label id="img-btn" htmlFor="img-file" >Add</label>
                            </div>
                            <div className="img-grid">
                                <div className="img-container"><img src={imgArray[0]} alt="" /></div>
                                <div className="img-container"><img src={imgArray[1]} alt="" /></div>
                                <div className="img-container"><img src={imgArray[2]} alt="" /></div>
                                <div className="img-container"><img src={imgArray[3]} alt="" /></div>
                                <div className="img-container"><img src={imgArray[4]} alt="" /></div>
                                <div className="img-container"><img src={imgArray[5]} alt="" /></div>
                                <div className="img-container"><img src={imgArray[6]} alt="" /></div>
                                <div className="img-container"><img src={imgArray[7]} alt="" /></div>
                                <div className="img-container"><img src={imgArray[8]} alt="" /></div>
                                <div className="img-container"><img src={imgArray[9]} alt="" /></div>
                            </div>
                        </div>
                        <div className="food-preference-field">
                            <label htmlFor="foodPreferences">Food Preferencs</label>
                            <textarea id="foodPreferences" name="foodPreferences" value={formData.foodPreferences} placeholder="Preferences" required onChange={(e) => setFormData(ex => ({ ...ex, foodPreferences: e.target.value }))} />
                        </div>
                        <div className="events-field">
                            <label htmlFor="events">Events</label>
                            <textarea id="events" name="events" placeholder="Preferences" value={formData.events} required onChange={(e) => setFormData(ex => ({ ...ex, events: e.target.value }))} />
                        </div>
                    </div>
                </div>
                <div className="button-field">
                    <button type="submit">{boo ? (edit ? "Edit" : "ADD") : <span className="loader"></span>}</button>
                </div>

            </form>
        </div>
    </>
}