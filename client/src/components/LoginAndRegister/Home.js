import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Home() {
    const [isLog, setIsLog] = useState(true);
    return <>
        <div className="home-container">
            <h1>LOGO</h1>
            <div className="section-container">
                <section className="text-section">
                    TEXT WILL <br />
                    BE DISPLAYED <br />
                    HERE
                </section>
                <section className="form-section">
                    {
                        isLog ?
                            <LoginForm setIsLog={setIsLog} /> :
                            <RegisterForm setIsLog={setIsLog} />
                    }
                </section>
            </div>
        </div>
    </>
}