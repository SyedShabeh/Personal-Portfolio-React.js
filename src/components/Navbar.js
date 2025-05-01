import React from "react"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg  shadow-sm sticky-top">
            <div className="container">
                <h1 className="main-font mode fw-bold fs-2 pt-3 animate-left">SYED SHABEH</h1>
                <div>
                    <button id="theme-toggle"
                        className="btn bg-0 border-0 d-flex align-items-center justify-content-center gap-2 mx-3">
                        <span id="theme-text" className="border-0 bg-transparent"><ThemeToggle /></span>
                    </button>
                </div>
                <button
                    className="navbar-toggler custom-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between fw-bold" id="navbarContent">
                    <ul className="navbar-nav mx-auto mb-lg-0 ">
                        <li className="nav-item"><a className="nav-link active text-primary" href="#home">HOME</a></li>
                        <li className="nav-item"><a className="mode nav-link" href="#about">ABOUT</a></li>
                        <li className="nav-item"><a className="mode nav-link" href="#services">SERVICES</a></li>
                        <li className="nav-item"><a className="mode nav-link" href="#resume">RESUME</a></li>
                        <li className="nav-item"><a className="mode nav-link" href="#faq">FAQ</a></li>
                        <li className="nav-item"><a className="mode nav-link" href="#portfolio">PORTFOLIO</a></li>
                        <li className="nav-item"><a className="mode nav-link" href="#contact">CONTACT</a></li>
                    </ul>

                    <div className="d-none d-lg-flex gap-3 animate-right">
                        <a className="facebook" href="ww.google.com" onmouseover="this.style.color='blue'"
                            onmouseout="this.style.color='var(--text-color)'" rel="noreferrer"><i
                                className="fa-brands fa-facebook fs-5"></i></a>
                        <a className="twitter" href="ww.google.com" onmouseover="this.style.color='blue'"
                            onmouseout="this.style.color='var(--text-color)'" rel="noreferrer"><i
                                className="fa-brands fa-twitter fs-5"></i></a>
                        <a className="instagram" href="ww.google.com" onmouseover="this.style.color='red'"
                            onmouseout="this.style.color='var(--text-color)'" rel="noreferrer"><i
                                className="fa-brands fa-instagram fs-5"></i></a>
                    </div>
                </div>
            </div>
        </nav >
    )
}