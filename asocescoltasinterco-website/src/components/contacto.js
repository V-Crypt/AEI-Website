import React from "react";
import Navbar from "./navbar.js";
import Contact from "./contact.js";
import Footer from "./footer.js";

export default function contacto() {
    return (
        <div className="contacto">
            <Navbar />
            <Contact />
            <Footer />
        </div>
    );
}