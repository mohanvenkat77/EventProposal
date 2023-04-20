import React from "react"
import { Outlet } from "react-router-dom"

export function Header() {
    return <>
    <div className="main-container">
        <header id="main-header">
            <h1 className="logo">LOGO</h1>
            <nav>
                <p>Vendor Name</p>
                <div className="img-container">
                    <img src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg" alt="dp" />
                </div>
            </nav>
        </header>
        <div className="outlet-container">
            <Outlet />
        </div>
    </div>
    </>
}