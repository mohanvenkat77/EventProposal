const proposalFilter = (filters, proposals) => {
    const {wedding, birthday, reception, charity, party, productLaunch, 
    formal, inFormal, internal, external} = filters;
    let arr = [];
    if(wedding || birthday || reception || charity || party || productLaunch ||
        formal || inFormal || internal || external || filters["0-25000"]) {
        if(wedding) {
            let temp = proposals.filter(({eventType}) => eventType === "Wedding");
            arr = [...arr,...temp];
        }
        if(birthday) {
            let temp = proposals.filter(({eventType}) => eventType === "Birthday");
            arr = [...arr,...temp];
        }
        if(reception) {
            let temp = proposals.filter(({eventType}) => eventType === "Reception");
            arr = [...arr,...temp];
        }
        if(charity) {
            let temp = proposals.filter(({eventType}) => eventType === "Charity");
            arr = [...arr,...temp];
        }
        if(party) {
            let temp = proposals.filter(({eventType}) => eventType === "Party");
            arr = [...arr,...temp];
        }
        if(productLaunch) {
            let temp = proposals.filter(({eventType}) => eventType === "Product launch");
            arr = [...arr,...temp];
        }
        if(formal) {
            let temp = proposals.filter(({proposalType}) => proposalType === "Formal");
            arr = [...arr,...temp];
        }
        if(inFormal) {
            let temp = proposals.filter(({proposalType}) => proposalType === "In-Formal");
            arr = [...arr,...temp];
        }
        if(internal) {
            let temp = proposals.filter(({proposalType}) => proposalType === "Internal");
            arr = [...arr,...temp];
        }
        if(external) {
            let temp = proposals.filter(({proposalType}) => proposalType === "External");
            arr = [...arr,...temp];
        }
        if(filters["0-25000"]) {
            let temp = proposals.filter(({budget}) => budget >= 0 && budget <= 25000);
            arr = [...arr,...temp];
        }

        
        return arr;
    } else return false;
}

module.exports = proposalFilter;