import React from "react";

export default function About(){
    return(
        <div id="about">
    <div id="section-2" className="pt-lg-5 ">
        <div className="container text-center pt-5">
            <span className="banner px-2 py-1">About Me</span>
            <p className="main-font fs-1 fw-bold">Know Me More</p>
        </div>
    </div>
    <div className="section-2 container pb-lg-5 pt-3 align-items-center">
        <div className="row align-items-center w-100">
            <div className="col-14 col-md-8 order-1 order-md-1 text-center text-md-start">
                <h1 className="main-font">Hi, I'm Syed Shabeh</h1>
                <p className="mid-font fs-4">
                    I'm a designer & developer with a passion for web design. I enjoy developing simple,
                    clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional
                    results while working with me. Delivering work within time and budget which meets client's
                    requirements is our moto.
                </p>
            </div>

            <div className="col-12 col-md-4 order-2 order-md-1 mt-4 mt-md-0">
                <div className="text-center">
                    <span className="circle fw-bold rounded-circle rounded-5 px-3 p-2"
                        style={{ fontSize: "80px" }}>06</span>
                    <p className="m-4 fs-3">Months of <span className="fw-bold">Experience</span></p>
                </div>
            </div>

            <div className="row gy-3 mt-4 order-2">
                <div className="col-6 col-lg-3">
                    <p className="mid-font mb-0">Name:</p>
                    <p className="co-font fw-bold mb-0">Syed Shabeh</p>
                </div>
                <div className="col-6 col-lg-3">
                    <p className="mid-font fs-sm-0 mb-0">Email:</p>
                    <p className="co-font fw-bold mb-0">xyz@gmail.com</p>
                </div>
                <div className="col-6 col-lg-3">
                    <p className="mid-font fs-sm-0 mb-0">Date of Birth:</p>
                    <p className="co-font fw-bold mb-0">26 November, 2001</p>
                </div>
                <div className="col-6 col-lg-3">
                    <p className="mid-font fs-sm-0 mb-0">From:</p>
                    <p className="co-font fw-bold mb-0">Karachi, Pakistan</p>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}