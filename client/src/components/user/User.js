import React, { useState,useEffect } from 'react'
import CardList from './CardList'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BASE_URL from "../../utills/api-utill";
import { getCurrentUser, getToken } from '../../utills/storage-utills';
import Scard from "./Scard";

const User = () => {
const navigate=useNavigate()
    const [items,setitems]=useState()
    const [list, setlist] = useState([]);

    useEffect(() => {
      if(!getToken() || !getCurrentUser().isUser) return navigate("/");
      axios.get("http://localhost:5000/proposal").then((res) => {
        setitems(res.data.proposals);
      })
      .catch((err) => {
        alert(err.message);
      });


    axios
      .get(`${BASE_URL}/singleuser/${getCurrentUser()._id}`)
      .then((res) => {
    
        setlist(res.data.data.selected);
      })
      .catch((err) => alert(err.message));
  }, []);



  return (
    <div>
      <div>
        <img
          className="headerimg"
          src={require("../../images/party2x.jpg")}
          alt="name"
        />
      </div>
      {list.length > 0 ? (
        <>

          <div className="selcteddiv">
            {" "}
            <span className="selectedtext">Selected</span>
          </div>
          <div className="slistmain">
          {list.map((lis) => (
            <div className="slist">
             
                <Scard items={lis} />
            
            </div>
          ))}
          </div>
        </>
      ) : null}
      <div className="proposals">
        <p>Proposals</p>
      </div>
      <div className="eventlists">
        {items ? <CardList items={items} /> : null}
      </div>
    </div>
  );
};

export default User;
