import React from "react";

export default function Resume() {
    return (
        <div id="resume" className="pt-lg-5">
            <div className="container pt-5 pb-lg-5">
                <div className="text-center">
                    <span className="banner-2 px-2 py-1">Resume</span>
                    <p className="main-font fs-1 fw-bold">A Summary of My Resume</p>
                </div>

                <div className="container d-md-flex align-items-center pt-3">
                    {/* Education Column */}
                    <div className="col-12 col-md-6 order-2 order-md-1 d-flex justify-content-center border-start border-primary">
                        <div className="row w-100 text-md-start">
                            <h3 className="main-font fw-bold">My Education</h3>
                            <h4 className="mid-font pt-3">BS Computer Science</h4>
                            <h6 className="co-font pt-2">Hamdard University</h6>
                            <p className="co-font pt-2">
                                Graduated with a Bachelor’s degree in Computer Science, where I gained a strong foundation in programming, algorithms, and software development. My coursework included advanced topics such as data structures, artificial intelligence, and web development, equipping me with the technical skills to tackle real-world challenges. Actively participated in coding competitions and collaborative projects, fostering problem-solving abilities and teamwork.
                            </p>
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div className="col-12 col-md-6 order-1 order-md-2 mt-4 mt-md-0 border-start ps-3 border-primary">
                        <h3 className="main-font fw-bold">My Experience</h3>
                        <h4 className="mid-font pt-3">Frontend Developer</h4>
                        <h6 className="co-font pt-2">Pakipeneur / 2025 - Current</h6>
                        <p className="co-font pt-2">
                            As a Frontend Developer at pakipeneur, I design and implement responsive, user-friendly web applications using modern technologies like React, JavaScript, and CSS. Collaborating with cross-functional teams, I translate UI/UX designs into high-quality code, ensuring seamless performance across devices. My contributions include optimizing load times, improving accessibility, and implementing interactive features that enhance user engagement. Passionate about staying updated with industry trends to deliver cutting-edge solutions.
                        </p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="main-font fs-3 fw-bold pt-5">Skills</div>
                <div className="row gx-5">
                    {/* Left Skills Column */}
                    <div className="col-md-6">
                        <p className="co-font text-start pt-3 mb-0">HTML<span className="co-font float-end">90%</span></p>
                        <div className="progress progress-sm mb-4">
                            <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{
                                    width: "90%",
                                    background: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 39%, rgba(0, 212, 255, 1) 100%)"
                                }}>
                            </div>
                        </div>

                        <p className="co-font text-start mb-0">CSS<span className="co-font float-end">90%</span></p>
                        <div className="progress progress-sm mb-4">
                            <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{
                                    width: "90%",
                                    background: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 39%, rgba(0, 212, 255, 1) 100%)"
                                }}>
                            </div>
                        </div>

                        <p className="co-font text-start mb-0">Javascript<span className="co-font float-end">60%</span></p>
                        <div className="progress progress-sm mb-4">
                            <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{
                                    width: "60%",
                                    background: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 39%, rgba(0, 212, 255, 1) 100%)"
                                }}>
                            </div>
                        </div>
                    </div>

                    {/* Right Skills Column */}
                    <div className="col-md-6">
                        <p className="co-font text-start mb-0 pt-md-3">Bootstrap <span className="co-font float-end">90%</span></p>
                        <div className="progress progress-sm mb-4">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{
                                    width: "90%",
                                    background: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 39%, rgba(0, 212, 255, 1) 100%)"
                                }}>
                            </div>
                        </div>

                        <p className="co-font text-start mb-0">Tailwind <span className="co-font float-end">80%</span></p>
                        <div className="progress progress-sm mb-4">
                            <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{
                                    width: "80%",
                                    background: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 39%, rgba(0, 212, 255, 1) 100%)"
                                }}>
                            </div>
                        </div>

                        <p className="co-font text-start mb-0">React <span className="co-font float-end">60%</span></p>
                        <div className="progress progress-sm mb-4">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{
                                    width: "60%",
                                    background: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 39%, rgba(0, 212, 255, 1) 100%)"
                                }}>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Download Button */}
                <div className="text-center pt-lg-5 pt-3">
                    <button className="btn btn-outline-info rounded-0 px-5 py-3">Download CV</button>
                </div>
            </div>
        </div>
    )
}