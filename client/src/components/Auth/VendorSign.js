import React, { useState } from "react";
// import "./VendorSignIn.css";
import VendorSignUp from "./VendorSignUp";
// import axios from "axios";
// import UserSignIn from "./UserSignIn";
import UserSignIn from "./UserSignIn";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const VendorSignIn = () => {
    const [type, setType] = useState("password");
    const [hide, setHide] = useState({ display: "none" });
    const [show, setShow] = useState({ display: "block" });
    const [data, setData] = useState({});
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
        e.preventDefault();

        if (!data.contact || !data.password) {
            return alert("Kindly Fill all the details");
        }

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
                                            <span id="errMsg">{msg}</span>
                                            <input
                                                type="text"
                                                placeholder="Phone/Email"
                                                id="vendor-contact"
                                                onChange={(e) =>
                                                    setData(
                                                        { ...data, contact: e.target.value },
                                                        setErrormsg("")
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
                                                        setErrormsg("")
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
