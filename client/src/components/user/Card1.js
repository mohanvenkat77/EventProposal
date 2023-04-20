import React from 'react';
import {useNavigate} from 'react-router-dom'
import EventInfo from './EventInfo';
const Card1 = ({items}) => {
    const { id,imageSrc,title,email,startDate,endDate,eventType,eventclass}=items[0]
console.log(items)  // const navigate=useNavigate()
  const EventHandler=()=>{
    // navigate(<EventInfo/>)
  }
  return (
    <div className="card1-item"   onClick={EventHandler}>
      <img className="card1-img" src={imageSrc} alt={title} />
        <p className='card1-id'> <span className='spanid'>ID :{id}</span></p>
        <div className='card1-body'>
      <p> <span className='namespan'>Name</span> <span  className='card1-name'>{title}</span></p>

      <p> <span className='emailspan'>Email</span> <span  className='card1-email'>{email}</span></p>

      <div className='card1-dates'>
      <p> <span className='Datespan'>Start Date</span> <span  className='card1-date'>{startDate}</span></p>
      <p> <span className='Datespan'>End Date</span> <span  className='card1-date'>{endDate}</span></p>
      </div>
     <div className='card1-events'>
     <p> <span className='Datespan'>Event Type</span> <div  className='card1-eventype'>{eventType}</div></p>
      <p> <span className='Datespan'>Event Class</span> <div  className='card1-date'>{eventclass}</div></p>
     </div>
        </div>
    </div>
  );
};


export default Card1;
