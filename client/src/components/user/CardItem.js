import React from 'react';
import {useNavigate} from 'react-router-dom'
import EventInfo from './EventInfo';
const CardItem = ({ imageSrc, title, price, locatioin }) => {
  // const navigate=useNavigate()
  const EventHandler=()=>{
    // navigate(<EventInfo/>)
  }
  return (
    <div className="card-item"   onClick={EventHandler}>
      <img className="card-img" src={imageSrc} alt={title} />
      <p className='card-name'>{title}</p>
      <p className='card-price'>{price}/-</p>
      <span className='card-location'>{locatioin}</span>
    </div>
  );
};


export default CardItem;
