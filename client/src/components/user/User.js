import React, { useState,useEffect } from 'react'
import CardList from './CardList'
import axios from 'axios';
// import party2 from "./images/party2x.jpg"
const User = () => {


// useEffect(() => {
//   const token=localStorage.getItem("token")
// const user=
// }, [])

    const [items,setitems]=useState()
    useEffect(() => {
      axios.get("http://localhost:5000/proposal").then((res) => {
        setitems(res.data.proposals);
      }).catch((err) => {
        console.log(err);
      });
    }, [])
    
  return (
    <div>
        <div >
            <img className='headerimg' src={require("../../images/party2x.jpg")} alt='name'/>
        </div>
        <div className='proposals'>
            <p>Proposals</p>
        </div>
      <div className='eventlists'>
       {items? <CardList items={items}/>:null}
      </div>
    </div>
  )
}

export default User
