import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import HeaderCard from "./HeaderCard";
import Card1 from "./user/Card1";

export function Header() {
    const navigate=useNavigate()
  const [name, setname] = useState();
  const [show, setShow] = useState(false);
const [contact,setcontact]=useState()
const [email,setemail]=useState()
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token) return navigate("/")
    const user = jwtDecode(token);
    setname(user.user.name);
    setemail(user.user.email)
    setcontact(user.user.contact)
  }, []);

  const About=()=>{
    setShow(!show)
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
            <p>{name}</p>
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
          <Outlet />
        </div>
      </div>
    </>
  );
}
