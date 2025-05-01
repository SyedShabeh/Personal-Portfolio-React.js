import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Faq from "./components/Faq";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Run(){
  return(
    <>
    <Navbar />
    <Home />
    <About />
    <Services />
    <Resume />
    <Faq />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}



export default Run;


