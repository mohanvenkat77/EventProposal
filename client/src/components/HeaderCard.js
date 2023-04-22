import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteCurrentUser, deleteToken, getCurrentUser } from '../utills/storage-utills';

const HeaderCard = ({setProfile}) => {

    const navigate=useNavigate()
    const onLogout=()=>{
        deleteToken();
        deleteCurrentUser();
        navigate("/")   
    }

    const {contact, email} = getCurrentUser();

  return (
    <div className="Headercard">
      <ul>
        <li>
            {contact}
        </li>
        <li>
          {email}
        </li>
        <li onClick={() => setProfile(true)}>
          Change DP
        </li>
        <li onClick={onLogout}>
          <button >Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default HeaderCard;
