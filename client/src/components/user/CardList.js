import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardItem from "./CardItem";
const CardList = ({ items }) => {

  return (
    <div className="card-list">
      {items?.map((item) => (
        
        <CardItem
          key={item._id}
          id={item._id}
          imageSrc={item.images[0]}
          title={item.eventName}
          price={item.budget}
          locatioin={item.placeOfEvent}
        />
      ))}
    </div>
  );
};

export default CardList;
