import React, { useState } from 'react'
import CardList from './CardList'

// import party2 from "./images/party2x.jpg"
const User = () => {
    const [items,setitems]=useState([
        {
            id:1,
            imageSrc:'https://images6.fanpop.com/image/photos/39400000/Party-all-night-party-39454857-1920-1080.jpg',
            title:'Bachelor Party',
            price:'23,300',
            locatioin:'Banglore'
        },
        {
            id:2,
            imageSrc:'https://images6.fanpop.com/image/photos/39400000/Party-all-night-party-39454857-1920-1080.jpg',
            title:'Bachelor Party',
            price:'23,300',
            locatioin:'Banglore'
        },
        {
            id:3,
            imageSrc:'https://images6.fanpop.com/image/photos/39400000/Party-all-night-party-39454857-1920-1080.jpg',
            title:'Bachelor Party',
            price:'23,300',
            locatioin:'Banglore'
        },
        {
            id:4,
            imageSrc:'https://images6.fanpop.com/image/photos/39400000/Party-all-night-party-39454857-1920-1080.jpg',
            title:'Bachelor Party',
            price:'23,300',
            locatioin:'Banglore'
        },
        {
            id:5,
            imageSrc:'https://images6.fanpop.com/image/photos/39400000/Party-all-night-party-39454857-1920-1080.jpg',
            title:'Bachelor Party',
            price:'23,300',
            locatioin:'Banglore'
        },
        {
            id:6,
            imageSrc:'https://images6.fanpop.com/image/photos/39400000/Party-all-night-party-39454857-1920-1080.jpg',
            title:'Bachelor Party',
            price:'23,300',
            locatioin:'Banglore'
        },
        {
            id:7,
            imageSrc:'https://images6.fanpop.com/image/photos/39400000/Party-all-night-party-39454857-1920-1080.jpg',
            title:'Bachelor Party',
            price:'23,300',
            locatioin:'Banglore'
        },
        {
            id:8,
            imageSrc:'https://images6.fanpop.com/image/photos/39400000/Party-all-night-party-39454857-1920-1080.jpg',
            title:'Bachelor Party',
            price:'23,300',
            locatioin:'Banglore'
        },
        {
            id:9,
            imageSrc:'https://images6.fanpop.com/image/photos/39400000/Party-all-night-party-39454857-1920-1080.jpg',
            title:'Bachelor Party',
            price:'23,300',
            locatioin:'Banglore'
        },
        {
            id:10,
            imageSrc:'https://images6.fanpop.com/image/photos/39400000/Party-all-night-party-39454857-1920-1080.jpg',
            title:'Bachelor Party',
            price:'23,300',
            locatioin:'Banglore'
        },
        {
            id:11,
            imageSrc:'https://images6.fanpop.com/image/photos/39400000/Party-all-night-party-39454857-1920-1080.jpg',
            title:'Bachelor Party',
            price:'23,300',
            locatioin:'Banglore'
        },
        {
            id:12,
            imageSrc:'https://images6.fanpop.com/image/photos/39400000/Party-all-night-party-39454857-1920-1080.jpg',
            title:'Bachelor Party',
            price:'23,300',
            locatioin:'Banglore'
        },
        {
            id:13,
            imageSrc:'https://images6.fanpop.com/image/photos/39400000/Party-all-night-party-39454857-1920-1080.jpg',
            title:'Bachelor Party',
            price:'23,300',
            locatioin:'Banglore'
        },
        {
            id:14,
            imageSrc:'https://images6.fanpop.com/image/photos/39400000/Party-all-night-party-39454857-1920-1080.jpg',
            title:'Bachelor Party',
            price:'23,300',
            locatioin:'Banglore'
        },
            {
            id:15,
            imageSrc:'https://images6.fanpop.com/image/photos/39400000/Party-all-night-party-39454857-1920-1080.jpg',
            title:'Bachelor Party',
            price:'23,300',
            locatioin:'Banglore'
        }
    ])
  return (
    <div>
        <div >
            <img className='headerimg' src={require("../../images/party2x.jpg")} alt='name'/>
        </div>
        <div className='proposals'>
            <p>Proposals</p>
        </div>
      <div className='eventlists'>
        <CardList items={items}/>
      </div>
    </div>
  )
}

export default User
