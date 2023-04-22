import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import HeaderCard from "./HeaderCard";
import Card1 from "./user/Card1";
import { deleteCurrentUser, deleteToken, getCurrentUser, getToken } from "../utills/storage-utills";

export function Header() {
    const navigate=useNavigate()
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);
const [contact,setcontact]=useState()
const [email,setemail]=useState()
  useEffect(() => {
    if(!getToken()) return navigate("/");
    setUser(getCurrentUser());
  }, []);

  const About=()=>{
    // setShow(!show)
    deleteCurrentUser();
    deleteToken();
    navigate("/")
  }

  const onlogout=()=>{
    setShow(!show)
  }

  return (
    <>
      <div className="main-container">
        <header id="main-header">
          <h1 className="logo">LOGO</h1>
          <nav>
            <p>{user.name}</p>
            <div className="img-container">
              <img
                src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
                alt="dp"
                onClick={About}
              />
            </div>
           {show?<HeaderCard contact={contact} email={email} setShow={setShow}/>:null}
          </nav>
        </header>
        <div className="outlet-container">
          <Outlet context={{userID : user._id }}/>
        </div>
      </div>
    </>
  );
}
