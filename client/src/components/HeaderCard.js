import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderCard = ({contact, email,setShow}) => {
    const navigate=useNavigate()



    const onLogout=()=>{
        localStorage.removeItem("token")
        setShow(false)
        navigate("/")
        
    }


  return (
    <div className="Headercard">
      <div className="card-body">
        <p className="card-subtitle">{contact}</p>
        <p id="Hcard">{email}</p>
        <button className="btn btn-danger logout" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default HeaderCard;
