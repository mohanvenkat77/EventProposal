import axios from "axios";

const BASE_URL = "http://localhost:5000";


//TO GET ALL PROPOSALS
export function allProposal_api() {

    return axios.get(`${BASE_URL}/proposal`)
        .then(res => res)
        .catch(err => alert("FROM SERVER : " + err.message));
}

//TO GET ALL PROPOSALS (SPECIFIC)
export function allProposalByVendor_api(id) {

    return fetch(`${BASE_URL}/proposal/vendor/${id}`)
        .then(res => res.json())
        .catch(err => alert("FROM SERVER : " + err.message));
}

//TO CREATE NEW PROPOSAL
export function newProposal_api(data) {

    return fetch(`${BASE_URL}/proposal`, {
        method: "POST",
        body: data
    })
        .then(res => res.json())
        .catch(err => alert("FROM SERVER : " + err.message));
}

//
export function editProposal_api(data, id) {

    return fetch(`${BASE_URL}/proposal/${id}`, {
        method: "PUT",
        body: data
    })
        .then(res => res.json())
        .catch(err => alert("FROM SERVER : " + err.message));
}

//TO DELETE THE PROPOSAL
export function deleteProposalByVendor_api(id) {

    return fetch(`${BASE_URL}/proposal/${id}`, { method: "DELETE" })
        .then(res => res.json())
        .catch(err => alert("FROM SERVER : " + err.message));
}

export default BASE_URL;
