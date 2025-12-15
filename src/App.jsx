import React, { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { Menu, X, Check, ChevronRight, Mail, MessageSquare } from "lucide-react";
import Home from "./components/Home.jsx";
import Works from "./components/Works.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import DesktopSidebar from "./components/DesktopSidebar.jsx";
import MobileTopBar from "./components/MobileTopBar"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
const AgroTechPortfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 

  const [status, setStatus] = useState("idle"); // idle | sending | success | error



 

  

  

  

  console.log("STATUS:", status);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <DesktopSidebar/>
      {/* Mobile Top Bar */}
      <MobileTopBar/>

      {/* Main */}
      <main className="md:ml-[280px] max-w-[1200px] px-5 md:px-12 py-10">
        {/* HOME */}
        <Home/>

        
        <Works/>

        
        <HowItWorks/>

        <About/>


        <Contact/>

        
        <Footer/>
      </main>
    </div>
  );
};

export default AgroTechPortfolio;