import React from 'react'

const Card2 = ({items}) => {
    const { id,imageSrc,title,email,startDate,endDate,eventType,eventclass}=items[0]
    console.log(items)
  return (
    <div>
    <div className='card2-text'>My albums</div>
    <div className='card2-albums'>
        <img className='card2-img' src={imageSrc} alt={title}/>
        <img className='card2-img' src={imageSrc} alt={title}/>
        <img className='card2-img' src={imageSrc} alt={title}/>
        <img className='card2-img' src={imageSrc} alt={title}/>
          <img className='card2-img' src={imageSrc} alt={title}/>  
          <img className='card2-img' src={imageSrc} alt={title}/>  
    </div>
    </div>
  )
}

export default Card2
