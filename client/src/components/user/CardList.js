import React from "react";
import { useNavigate } from "react-router-dom";
import CardItem from "./CardItem";
const CardList = ({ items }) => {
  const navigate = useNavigate();
  return (
    <div className="card-list">
      {items.map((item) => (
        <CardItem
          key={item.id}
          imageSrc={item.imageSrc}
          title={item.title}
          price={item.price}
          locatioin={item.locatioin}
        />
      ))}
    </div>
  );
};

export default CardList;
