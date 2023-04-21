import React from 'react'

const Card2 = ({items}) => {
    const {images,eventName}=items
    console.log(items)
  return (
    <div>
    <div className='card2-text'>My albums</div>
    <div className='card2-albums'>
       {
        images.map((img)=>(
          <>
           <img className='card2-img' src={`http://localhost:5000/proposal/images/${img}`} alt={eventName}/>
          </>
        ))
       }
    </div>
    </div>
  )
}

export default Card2
