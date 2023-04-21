import React, { useState } from "react";
// import "./VendorSignUp.css";
// import "./UserSignIn.css";
import axios from "axios";
import jwtdecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const UserSignUp = (props) => {
    const navigate=useNavigate()
  const [data, setData] = useState({});
  const [view,setView]=useState("block")
  const [err, setErr] = useState("");
  const [msg1, setErrormsg1] = useState("");
  const [isUser, setIsuser] = useState(true);
  const [token, settoken] = useState();
  const handleSignUp = (e) => {
    e.preventDefault();
    props.onSignUpSuccess();
  };
  function handleSubmit(e) {
    e.preventDefault();

    if (!data.contact || !data.name || !data.email || !data.password) {
      setView("block")
      setErr("Kindly Fill all the details");
    }
    if(!data.email?.endsWith("@gmail.com")){
      setView("block")
      return setErr("Enter valid Email")
  }
  if(!data.password<8){
      setView("block")
      return setErr("Passworg length atleast 8 characters")
  }
  if(!data.contact<10){
    setView("block")
    return setErr("Enter valid contact Number")
}
    if (data.password !== data.confirmPassword) {
      setView("block")
      return setErr("Password and Confirm Password no match");
    }
    const res = axios
      .post("http://localhost:5000/register", {
        name: data.name,
        email: data.email,
        contact: data.contact,
        password: data.password,
        isUser: isUser,
      })
      .then((res) => {
        settoken(res.data);
        localStorage.setItem("token", res.data);
        navigate("/user");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="box1">
      <h4 id="SignUp-Heading">Register in your Account</h4>
      <span id="errMsg-12">{err}</span>
      <span id="errmessage11">{msg1}</span>
      <form id="form">
        <input
          type="text"
          placeholder="Name"
          id="user-name"
          value={data.name || ""}
          onChange={(e) =>
            setData(
              { ...data, name: e.target.value },
              setErr(""),setView("none")
            )
          }
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          id="user-email"
          value={data.email || ""}
          onChange={(e) => 
            setData({ ...data, email: e.target.value }, setErr(""),setView("none")
            )}
        />
        <br />
        <input
          type="number"
          placeholder="Contact"
          id="userContact"
          value={data.contact || ""}
          onChange={(e) => setData({ ...data, contact: e.target.value },setErr(""),setView("none"))}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          id="user-passowrd"
          value={data.password || ""}
          onChange={(e) =>
            setData({ ...data, password: e.target.value },setErr(""),setView("none"))
          }
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          id="user-conPassword"
          value={data.confirmPassword || ""}
          onChange={(e) =>
            setData({ ...data, confirmPassword: e.target.value },setErr(""),setView("none"))
          }
        />
        <br />
          <div className="err-msg-2" style={{"display":`${view}`}}>*{err}</div>
        <button type="submit" id="user-btn2" onClick={handleSubmit}>
          REGISTER
        </button>
      </form>
      <i class="fa-thin fa-arrow-left-long"></i>
      <span onClick={handleSignUp} id="signin-btn2">
        SignIn
      </span>
    </div>
  );
};

export default UserSignUp;
