import React, { useEffect, useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Contacts from "./Contacts";
import Events from "./Events";
import Food from "./Food";
import Venue from "./Venue";
import axios from 'axios'
import { useParams } from "react-router-dom";
const EventInfo = () => {
  const params=useParams()
  const [items, setitems] = useState();


  useEffect(() => {
    axios.get(`http://localhost:5000/proposal/${params.id}`).then((res)=> {
      setitems(res.data.proposal)
    console.log(res.data.proposal);
    }).catch((err)=> console.log(err))
  
    
  }, [])
  
  return (
    <div>
   { items ?  (<><div className="col1">
        <div className="event-data"> <span className="col1-proposals">Proposals</span> <span className="col1-icon"></span> <span className="col1-contract">Jordan Contract</span></div>
        <div>
          <button className="btn"> <span className="btn-text">select</span></button>
        </div>
      </div><div className="eventPage">
          <div className="row1">
            <div className="card1">
              <Card1 items={items} />
            </div>
            <div className="card2">
              <Card2 items={items} />
            </div>
          </div>
          <div className="row2">
            <div>
              <Venue items={items}/>
            </div>
            <div className="contacts">
              <Contacts />
            </div>
          </div>
          <div className="row3">
            <div className="foodPrefernces">
              <Food items={items}/>
            </div>
            <div className="events">
              <Events items={items} />
            </div>
          </div>
        </div></>) : <></>
}
    </div>
  );
};

export default EventInfo;
