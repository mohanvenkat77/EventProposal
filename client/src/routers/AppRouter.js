import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { VendorProposals } from "../components/vendor/VendorProposals";

export function AppRouter() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/vendor" element={<Header />}>
                    <Route path="proposals" element={<VendorProposals />} />
                </Route>
            </Routes>
        </BrowserRouter>

    </>
}