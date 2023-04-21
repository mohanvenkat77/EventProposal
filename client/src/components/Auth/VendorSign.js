import React, { useState } from "react";
// import "./VendorSignIn.css";
import VendorSignUp from "./VendorSignUp";
// import axios from "axios";
// import UserSignIn from "./UserSignIn";
import UserSignIn from "./UserSignIn";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import jwtdecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const VendorSignIn = () => {
    const navigate=useNavigate()
    const [type, setType] = useState("password");
    const [hide, setHide] = useState({ display: "none" });
    const [show, setShow] = useState({ display: "block" });
    const [data, setData] = useState({});
    const [err,setErr]=useState()
    const [view,setView]=useState("none")
    const [token,setToken]=useState()
    const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
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

        // setErr("")
        // setView("none")
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
       
       const resu= axios.post("http://localhost:5000/login",{email:data.contact,password:data.password}).then((res)=>{
        console.log("token is");
        setToken(res.data);
        console.log(res.data);
        localStorage.setItem("token", res.data);
        navigate("/vendor/proposals");
       }).catch((err)=> console.log(err))


    }
    return (
        <div className="main">
            <h2 id="main-logo">LOGO</h2>
            <div id="container">
                <div id="sub-container-1">
                    <h1 id="side-heading">TEXT WILL BE DISPLAYED HERE</h1>
                </div>
                <div id="sub-container-2">
                    <div className="container1">
                        <div className={`box ${showCreateAccountForm ? "expanded" : ""}`}>
                            <input
                                type="radio"
                                class="tab-toggle"
                                name="tab-toggle"
                                id="tab1"
                                checked
                            />
                            <input
                                type="radio"
                                className="tab-toggle"
                                name="tab-toggle"
                                id="tab2"
                            />
                            <ul className="tab-list">
                                <li className="tab-item">
                                    <label className="tab-trigger" for="tab1">
                                        Vendor
                                    </label>
                                </li>
                                <li className="tab-item">
                                    <label className="tab-trigger" for="tab2">
                                        User
                                    </label>
                                </li>
                            </ul>
                            <div className="tab-container">
                                <div className="tab-content">
                                    {showCreateAccountForm ? (
                                        <VendorSignUp onSignUpSuccess={handleSignUpSuccess} />
                                    ) : (
                                        <form id="form-container">
                                            <h4 id="form-heading">Sign in your Account</h4>
                                       
                                            <input
                                                type="text"
                                                placeholder="Phone/Email"
                                                id="vendor-contact"
                                                onChange={(e) =>
                                                    setData(
                                                        { ...data, contact: e.target.value },
                                                        setErr(""),setView("none")
                                                    )
                                                }
                                            />
                                            <br />
                                            <input
                                                placeholder="Password"
                                                id="vendor-password"
                                                type={type}
                                                onChange={(e) =>
                                                    setData(
                                                        { ...data, password: e.target.value },
                                                        setErr(""),setView("none")
                                                    )
                                                }
                                            />
                                            <span className="icon-span">
                                                <AiFillEyeInvisible
                                                    style={hide}
                                                    className="eye"
                                                    onClick={() => handleview("hide")}
                                                />
                                                <AiFillEye
                                                    className="eye"
                                                    style={show}
                                                    onClick={() => handleview("show")}
                                                />
                                            </span>
                                            <br />
                
                                            <span id="forget-password">Forget Password?</span>
                                            <br/>
                                                <div className="errMsg" style={{"display":`${view}`}}> *{err}</div>
                                            <span id="create-account" onClick={handleCreateAccount}>
                                                Create Account
                                            </span>
                                            <button
                                                type="submit"
                                                id="vendor-btn"
                                                onClick={handleSubmit}
                                            >
                                                SIGN IN
                                            </button>
                                        </form>
                                    )}
                                </div>
                                <div class="tab-content">
                                    <UserSignIn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorSignIn;
