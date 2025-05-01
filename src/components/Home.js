import React from "react";
import Typewriter from "./Typewriter";

export default function Home() {
  return (
    <section id="home" className="section-1 py-lg-5">
      <div className="container py-lg-5">
        <div className="py-lg-5">
          <div className="row align-items-center py-5">
            {/* Left Side */}
            <div className="col-12 col-md-6 text-center text-md-start mb-5 mb-md-0 order-md-1 order-2">
              <h2 className="mid-font fw-light display-6 pt-2">HI, I'M A FREELANCER</h2>
              <h1 className="fw-bold display-2 main-font">
                <Typewriter />
                <span className="typing-cursor">|</span>
              </h1>
              <p className="co-font fs-5 mt-3">based in Islamabad, Pakistan</p>

              <div className="mt-4 d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start align-items-center">
                <a href="#portfolio">
                  <button className="btn btn-light px-4 py-2 shadow">View My Works</button>
                </a>
                <a href="#contact" className="text-decoration-underline text-light fw-semibold">
                  Contact Me <i className="fa-regular fa-circle-down ms-1"></i>
                </a>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="col-12 col-md-6 text-center order-1 order-md-2">
              <img src="/dp.jpg" alt="Callum"
                className="img-fluid rounded-circle border border-white border-5 shadow"
                style={{ maxWidth: "300px" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}