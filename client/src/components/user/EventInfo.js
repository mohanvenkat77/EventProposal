import React, { useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Contacts from "./Contacts";
import Events from "./Events";
import Food from "./Food";
import Venue from "./Venue";

const EventInfo = () => {
  const [items, setitems] = useState([
    {
      id: "0001",
      imageSrc:
        "https://images6.fanpop.com/image/photos/39400000/Party-all-night-party-39454857-1920-1080.jpg",
      title: "Bachelor Party",
      email: "mohannani@12gmail.com",
      startDate: "20 Dec 2021",
      endDate: "22 Dec 2021",
      eventType: "Marriage",
      eventclass: "Class A",
    },
  ]);
  return (
    <div>
      <div className="col1">
        <div className="event-data"> <span className="col1-proposals">Proposals</span> <span className="col1-icon"></span> <span className="col1-contract">Jordan Contract</span></div>
        <div>
          <button className="btn"> <span className="btn-text">select</span></button>
        </div>
      </div>
    <div className="eventPage">
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
          <Venue />
        </div>
        <div className="contacts">
          <Contacts />
        </div>
      </div>
      <div className="row3">
        <div className="foodPrefernces">
          <Food/>
        </div>
        <div className="events">
          <Events/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventInfo;
