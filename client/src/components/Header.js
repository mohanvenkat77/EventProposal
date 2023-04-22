import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import HeaderCard from "./HeaderCard";
import Card1 from "./user/Card1";
import { deleteCurrentUser, deleteToken, getCurrentUser, getToken } from "../utills/storage-utills";
import UpdateDp from "./UpdateDp";

export function Header() {
  const navigate = useNavigate()
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  
  useEffect(() => {
    if (!getToken()) return navigate("/");
    setUser(getCurrentUser());
  }, []);

  const About = () => {
    setShow(!show)
  }


  const defaultDp = "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg";
  const ownDp = getCurrentUser().profilePic;
  return (
    <>
      <div className="main-container">
        <header id="main-header">
          <h1 className="logo">LOGO</h1>
          <nav>
            <p>{user.name}</p>
            <div className="img-container">
              <img
                src={ownDp? `http://localhost:5000/profile-images/${ownDp}` : defaultDp}
                alt="dp"
                onClick={About}
              />
            </div>
            {show ? <HeaderCard setProfile={setProfile} /> : null}
            {profile && <div className="dp-form-container">
              <UpdateDp setProfile={setProfile} />
            </div>}
          </nav>
        </header>
        <div className="outlet-container">
          <Outlet context={{ userID: user._id }} />
        </div>
      </div>
    </>
  );
}
