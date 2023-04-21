import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderCard = ({ name, contact, email}) => {
    const navigate=useNavigate()
    const onLogout=()=>{
        localStorage.removeItem("token")
        navigate("/")
    }
  return (
    <div className="Headercard">
      <div className="card-body">
        <p className="card-subtitle">87887656</p>
        <p id="Hcard">mohan@gmail.com</p>
        <button className="btn btn-danger logout" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default HeaderCard;
