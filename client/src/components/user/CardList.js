import React from 'react';
import CardItem from './CardItem';
const CardList = ({ items }) => {
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