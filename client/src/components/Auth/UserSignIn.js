import React, { useState } from "react";
// import "./UserSignIn.css";
import UserSignUp from "./UserSignUp";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import jwtdecode from "jwt-decode";

import { Navigate, useNavigate } from "react-router-dom";
const UserSignIn = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [hide, setHide] = useState({ display: "none" });
  const [show, setShow] = useState({ display: "block" });
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
  const [data, setData] = useState({});
  const [err,setErr]=useState()
  const [view,setView]=useState("none")
  const [token, setToken] = useState();
  const [msg, setErrormsg] = useState("");
  function handleview(action) {
    if (action === "show") {
      setType("text");
      setHide({ display: "block" });
      setShow({ display: "none" });
    } else {
      setType("password");
      setShow({ display: "block" });
      setHide({ display: "none" });
    }
  }
  const handleCreateAccount = () => {
    setShowCreateAccountForm(true);
  };
  const handleSignUpSuccess = () => {
    setShowCreateAccountForm(false);
  };




  function handleSubmit(e) {
    e.preventDefault();

    if (!data.contact || !data.password) {
      setView("block")
      return setErr("Kindly Fill all the details");
  }
  let email=data.contact
  console.log(email);
  if(!email?.endsWith("@gmail.com")){
      setView("block")
      return setErr("Enter valid Email")
  }
  // if(!data.password<8){
  //     setView("block")
  //     return setErr("Passworg length atleast 8 characters")
  // }

    console.log("hiii");
    axios
      .post("http://localhost:5000/login", {
        email: data.contact,
        password: data.password,
      })
      .then((res) => {
        console.log("token is");
        setToken(res.data);
        console.log(res.data);
        localStorage.setItem("token", res.data);
        navigate("/user/proposals");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={`box1 ${showCreateAccountForm ? "expanded1" : ""}`}>
      {showCreateAccountForm ? (
        <UserSignUp onSignUpSuccess={handleSignUpSuccess} />
      ) : (
        <div>
          <form id="form-container">
            <h4 id="form-heading">Sign in your Account</h4>
            <input
              type="text"
              placeholder="Phone/Email"
              id="vendor-contact"
              onChange={(e) =>
                setData({ ...data, contact: e.target.value }, setErr(""),setView("none"))
              }
            />
            <br />
            <input
              type={type}
              placeholder="Password"
              id="vendor-password"
              onChange={(e) =>
                setData({ ...data, password: e.target.value }, setErr(""),setView("none"))
              }
            />
            <span className="icon-span-u">
              <AiFillEyeInvisible
                style={hide}
                className="Usereye"
                onClick={() => handleview("hide")}
              />
              <AiFillEye
                className="Usereye"
                style={show}
                onClick={() => handleview("show")}
              />
            </span>
            <br />
            <span id="forget-password">Forget Password?</span>
            <br/>
           <div className="errsign">
           <div className="error-msg-2" style={{"display":`${view}`}}> *{err}</div>
            <button type="submit" id="user-btn" onClick={handleSubmit}>
              SIGN IN
            </button>
           </div>
            <br/>
            <span id="create-account-u" onClick={handleCreateAccount}>
              Create Account
            </span>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserSignIn;
