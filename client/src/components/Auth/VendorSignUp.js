import React, { useState } from "react";
// import "./VendorSignUp.css";
import axios from "axios";
import jwtdecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const VendorSignUp = (props) => {
  const navigate=useNavigate()
  const [data, setData] = useState({});
  const [msg, setErrormsg] = useState("");
  const [msg1, setErrormsg1] = useState("");
  const [isVendor, setIsvendor] = useState(true);
  const [err, setErr] = useState("");
  const [view,setView]=useState("none")
  const [token, settoken] = useState();



  const handleSignUp = (e) => {
    e.preventDefault();
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    if (!data.contact || !data.vendorName || !data.email || !data.password) {
      setView("block")
      return setErr("Kindly Fill all the details");
    }
    if(!data.email?.endsWith("@gmail.com")){
      setView("block")
      return setErr("Enter valid Email")
  }
  if(data.password<8){
      setView("block")
      return setErr("Passworg length atleast 8 characters")
  }
  if(data.contact<10){
    setView("block")
    return setErr("Enter valid contact Number")
}
    if (data.password !== data.confirmPassword) {
      setView("block")
      return setErr("Password and Confirm Password no match");
    }
    const res = axios
      .post("http://localhost:5000/register", {
        name: data.vendorName,
        email: data.email,
        contact: data.contact,
        password: data.password,
        isVendor: isVendor,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res.data);
        navigate("/vendor/proposals")
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="box1">
      <h4 id="SignUp-Heading">Register in your Account</h4>
      <span id="errMsg-1">{msg}</span>
      <span id="errmessage">{msg1}</span>
      <form id="form">
        <input
          type="text"
          placeholder="Name"
          id="vendor-name"
          value={data.vendorName || ""}
          onChange={(e) =>
            setData(
              { ...data, vendorName: e.target.value },
              setErr(""),setView("none")
            )
          }
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          id="vendor-email"
          value={data.email || ""}
          onChange={(e) => setData({ ...data, email: e.target.value },  setErr(""),setView("none"))}
        />
        <br />
        <input
          type="number"
          placeholder="Contact"
          id="vendorContact"
          value={data.contact || ""}
          onChange={(e) => setData({ ...data, contact: e.target.value },  setErr(""),setView("none"))}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          id="vendor-passowrd"
          value={data.password || ""}
          onChange={(e) =>
            setData({ ...data, password: e.target.value },   setErr(""),setView("none"))
          }
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          id="vendor-conPassword"
          value={data.confirmPassword || ""}
          onChange={(e) =>
            setData({ ...data, confirmPassword: e.target.value },  setErr(""),setView("none"))
          }
        />
        <br />
        <div className="err-msg-2" style={{"display":`${view}`}}>*{err}</div>          <div className="err-msg-2" style={{"display":`${view}`}}>*{err}</div>
        <button type="submit" id="vendor-btn2" onClick={handleSubmit}>
          REGISTER
        </button>
      </form>
      <i class="fa-thin fa-arrow-left-long"></i>

      <span onClick={handleSignUp} id="signin-btn">
        SignIn
      </span>
    </div>
  );
};

export default VendorSignUp;
