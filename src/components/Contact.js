import React from "react";

export default function Contact(){
    return(
        <section id="contact" className="py-lg-5 py-3">
    <div className="container pt-5">
        <div className="row g-5">
            {/* Contact Info Column */}
            <div className="col-lg-6">
                <h1 className="main-font fw-bold">Let's get in touch</h1>
                <p className="mid-font mb-4 fs-4 pt-5">
                    I enjoy discussing new projects and design challenges. Please share as much info, as possible so
                    we can get the most out of our first catch-up.
                </p>
                
                <p className="mid-font fw-bold mb-1 fs-5">Living In:</p>
                <p className="co-font mb-3 fs-5">Islamabad, Pakistan</p>

                <p className="mid-font fw-bold mb-1 fs-5">Call:</p>
                <p className="co-font mb-4 fs-5"><a href="https://wa.me/03190028307" rel="noreferrer">(+92) 319-0028307</a></p>

                {/* Social Icons */}
                <div className="d-flex gap-3">
                    <a href="www.google.com" className="text-white hover:text-black" rel="noreferrer">
                        <i className="fa-brands fa-twitter fs-5"></i>
                    </a>
                    <a href="ww.google.com" className="text-white hover:text-red-500" rel="noreferrer">
                        <i className="fa-brands fa-instagram fs-5"></i>
                    </a>
                    <a href="ww.google.com" className="text-white hover:text-blue-500" rel="noreferrer">
                        <i className="fa-brands fa-facebook fs-5"></i>
                    </a>
                    <a href="https://github.com/shabehhassan/Personal-Portfolio/" 
                       className="text-white hover:text-black" 
                       rel="noreferrer">
                        <i className="fa-brands fa-github fs-5"></i>
                    </a>
                    <a href="ww.google.com" className="text-white" rel="noreferrer" >
                        <i className="fa-brands fa-linkedin fs-5"></i>
                    </a>
                </div>
            </div>

            {/* Contact Form Column */}
            <div className="col-lg-6">
                <h2 className="main-font fw-bold">Estimate your Project?</h2>
                <form>
                    <div className="mb-3 pt-5">
                        <label className="mid-font form-label">What is Your Name:</label>
                        <input 
                            type="text"
                            className="form-control border-0 border-bottom text-light rounded-0 border-light bg-transparent"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="mid-font form-label">Your Email Address:</label>
                        <input 
                            type="email"
                            className="form-control border-0 border-bottom rounded-0 border-light bg-transparent"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="mid-font form-label">How can I Help you?:</label>
                        <textarea 
                            rows="3"
                            className="form-control border-0 border-bottom rounded-0 border-light bg-transparent"
                        ></textarea>
                    </div>
                    <button type="submit" rel="noreferrer" className="btn btn-light px-4 py-2 shadow-sm">
                        Send <i className="fa-solid fa-arrow-right ms-2"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
    )
}