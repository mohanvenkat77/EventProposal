import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardItem from "./CardItem";
const Scard = ({ items }) => {
const [sitem,setsitems]=useState([])
  const navigate = useNavigate();
  console.log("cardlist id",items);
  useEffect(()=>{
axios.get(`http://localhost:5000/proposal/${items}`).then((res)=>{
    console.log(res.data);
setsitems([res.data.proposal])
}).catch((err)=> console.log(err))
  },[])
  return (
    <div className="scard-list">
      {console.log("final sitems",sitem)}
      {sitem?.map((item) => (
        <div className="cardslist">
        <CardItem
          key={item._id}
          id={item._id}
          imageSrc={item.images[0]}
          title={item.eventName}
          price={item.budget}
          locatioin={item.placeOfEvent}
        />
      </div>
      ))}
    </div>
  );
};

export default Scard;
