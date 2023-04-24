export const proposalFilter = (filters, proposals) => {
    const {wedding, birthday, reception, charity, party, productLaunch, 
    formal, inFormal, internal, external} = filters;
    let arr = [];
    if(wedding || birthday || reception || charity || party || productLaunch ||
        formal || inFormal || internal || external || filters["0-25000"] ||
        filters["25001-50000"] || filters["50001-75000"] || filters["75001-100000"] || filters["> 100000"]) {
        if(wedding) {
            let temp = proposals.filter(({eventType, _id}) => eventType === "Wedding" && checkDuplicate(arr, _id).length === 0);
            arr = [...arr,...temp];
        }
        if(birthday) {
            let temp = proposals.filter(({eventType, _id}) => eventType === "Birthday" && checkDuplicate(arr, _id).length === 0);
            arr = [...arr,...temp];
        }
        if(reception) {
            let temp = proposals.filter(({eventType, _id}) => eventType === "Reception" && checkDuplicate(arr, _id).length === 0);
            arr = [...arr,...temp];
        }
        if(charity) {
            let temp = proposals.filter(({eventType, _id}) => eventType === "Charity" && checkDuplicate(arr, _id).length === 0);
            arr = [...arr,...temp];
        }
        if(party) {
            let temp = proposals.filter(({eventType, _id}) => eventType === "Party" && checkDuplicate(arr, _id).length === 0);
            arr = [...arr,...temp];
        }
        if(productLaunch) {
            let temp = proposals.filter(({eventType, _id}) => eventType === "Product launch" && checkDuplicate(arr, _id).length === 0);
            arr = [...arr,...temp];
        }
        if(formal) {
            let temp = proposals.filter(({proposalType, _id}) => proposalType === "Formal" && checkDuplicate(arr, _id).length === 0);
            arr = [...arr,...temp];
        }
        if(inFormal) {
            let temp = proposals.filter(({proposalType, _id}) => proposalType === "In-Formal" && checkDuplicate(arr, _id).length === 0);
            arr = [...arr,...temp];
        }
        if(internal) {
            let temp = proposals.filter(({proposalType, _id}) => proposalType === "Internal" && checkDuplicate(arr, _id).length === 0);
            arr = [...arr,...temp];
        }
        if(external) {
            let temp = proposals.filter(({proposalType, _id}) => proposalType === "External" && checkDuplicate(arr, _id).length === 0);
            arr = [...arr,...temp];
        }
        if(filters["0-25000"]) {
            let temp = proposals.filter(({budget, _id}) => budget >= 0 && budget <= 25000 && checkDuplicate(arr, _id).length === 0);
            arr = [...arr,...temp];
        }
        if(filters["25001-50000"]) {
            let temp = proposals.filter(({budget, _id}) => budget >= 25001 && budget <= 50000 && checkDuplicate(arr, _id).length === 0);
            arr = [...arr,...temp];
        }
        if(filters["50001-75000"]) {
            let temp = proposals.filter(({budget, _id}) => budget >= 50001 && budget <= 75000 && checkDuplicate(arr, _id).length === 0);
            arr = [...arr,...temp];
        }
        if(filters["75001-100000"]) {
            let temp = proposals.filter(({budget, _id}) => budget >= 75001 && budget <= 100000 && checkDuplicate(arr, _id).length === 0);
            arr = [...arr,...temp];
        }
        if(filters["> 100000"]) {
            let temp = proposals.filter(({budget, _id}) => budget > 100000 && checkDuplicate(arr, _id).length === 0);
            arr = [...arr,...temp];
        }

        function checkDuplicate(arr, id) {
            return arr.filter(each => each._id === id);
        }
        
        return arr;
    } else return false;
}

