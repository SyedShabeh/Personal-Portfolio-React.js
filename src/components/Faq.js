import React from "react";

export default function Faq(){
    return(
        <div id="faq">
    <section className="container mt-5 py-lg-5">
        <div className="row align-items-center py-4">
            <div className="text-center">
                <span className="bg-light text-primary fw-bold px-2 py-1">FAQ</span>
                <p className="main-font fs-1 fw-bold">Have any questions?</p>
            </div>
            
            <div className="col-12 col-md-6 order-2 order-md-1">
                <div className="accordion">
                    {/* FAQ Item 1 */}
                    <details open className="mb-3 p-3 border-0 rounded shadow-sm bg-transparent">
                        <summary className="mid-font fw-semibold fs-5 text-light">
                            What services do you offer?
                        </summary>
                        <p className="co-font mt-2 text-light">
                            I provide web development, UI/UX design, and branding solutions.
                        </p>
                    </details>

                    {/* FAQ Item 2 */}
                    <details className="mb-3 p-3 border-0 rounded shadow-sm bg-transparent">
                        <summary className="mid-font fw-semibold fs-5 text-light">
                            How long does a project take?
                        </summary>
                        <p className="co-font mt-2 text-light">
                            Project timelines vary from 1 to 4 weeks depending on the complexity and scope.
                        </p>
                    </details>

                    {/* FAQ Item 3 */}
                    <details className="mb-3 p-3 border-0 rounded shadow-sm bg-transparent">
                        <summary className="mid-font fw-semibold fs-5 text-light">
                            What technologies do you use?
                        </summary>
                        <p className="co-font mt-2 text-light">
                            I use HTML, CSS, JavaScript, Bootstrap, React and more.
                        </p>
                    </details>

                    {/* FAQ Item 4 */}
                    <details className="mb-3 p-3 border-0 rounded shadow-sm bg-transparent">
                        <summary className="mid-font fw-semibold fs-5 text-light">
                            Do you offer post-launch support?
                        </summary>
                        <p className="co-font mt-2 text-light">
                            Yes! I offer 30 days of free support and additional maintenance packages.
                        </p>
                    </details>
                </div>
            </div>

            {/* FAQ Image */}
            <div className="col-12 col-md-6 text-center mb-4 mb-md-0 order-md-2">
                <img src="/faq.png"  className="img-fluid" alt="faq-image" />
            </div>
        </div>
    </section>
</div>
    )
}