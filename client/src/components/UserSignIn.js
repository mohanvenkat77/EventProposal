import React, { useState } from "react";
import "./UserSignIn.css";
import UserSignUp from "./UserSignUp";
// import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const UserSignIn = () => {
    const [type, setType] = useState("password");
    const [hide, setHide] = useState({ display: "none" });
    const [show, setShow] = useState({ display: "block" });
    const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
    const [data, setData] = useState({});
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
        <div className={`box1 ${showCreateAccountForm ? "expanded1" : ""}`}>
            {showCreateAccountForm ? (
                <UserSignUp onSignUpSuccess={handleSignUpSuccess} />
            ) : (
                <div>
                    <form id="form-container">
                        <h4 id="form-heading">Sign in your Account</h4>
                        <span id="errMsg">{msg}</span>
                        <input
                            type="text"
                            placeholder="Phone/Email"
                            id="vendor-contact"
                            onChange={(e) => setData({ ...data, contact: e.target.value }, setErrormsg(""))}
                        />
                        <br />
                        <input
                            type={type}
                            placeholder="Password"
                            id="vendor-password"
                            onChange={(e) => setData({ ...data, password: e.target.value }, setErrormsg(""))}
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
                        <button type="submit" id="vendor-btn" onClick={handleSubmit}>
                            SIGN IN
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default UserSignIn;
