import { useState, useEffect } from 'react'
import ScrambleText from './scramble';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import { ReactLenis } from 'lenis/react';


function App() {
  const[loading, setloading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0);
  //popup
  const [showModal, setShowModal] = useState(true)
  //parallax math

  //TIMER FOR LOADING
  useEffect(() => {const interval = setInterval(() => {
              setProgress((oldProgress) => {
                    if (oldProgress >= 100) {
                      clearInterval(interval);
                      setTimeout(() => setloading(false), 300); 
                      return 100;
                    }
              return oldProgress + 1;
              });
    }, 25); //25ms*100 = 2500ms
    
    return () => clearInterval(interval);
  }, []);

  //pARA MATH


 

  return (
    <ReactLenis root options={{ lerp: 0.07, smoothWheel: true }}>
      <Router>
        
        <div className="min-h-screen flex flex-col bg-white font-sans text-gray-800 selection:bg-cyan-100 selection:text-cyan-900 relative no-scrollbar">
        {/*loading page*/}
        <div className={`fixed inset-0 z-100 bg-gray-950 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <div className="h-24 w-24 animate-pulse flex flex-col items-center">
              <img src="AEROLOGO.avif" alt="Loading..." className="w-full h-auto" />
          </div>
          {/*prog bar*/}
          <div className="w-80 mt-8 flex flex-col items-center">
              <div className="w-full h-2px bg-gray-900 overflow-hidden">
                <div 
                  className="h-full bg-white shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all duration-10 ease-out" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
          </div>
        </div>

        {/*pop up*/}
        {showModal && (
          <div className="fixed inset-0 z-90 flex items-center justify-center p-4">
            
            {/*Bg Overlay*/}
            <div 
              className="absolute inset-0 bg-white/80 backdrop-blur-sm transition-opacity"
              onClick={() => setShowModal(false)} SS
            ></div>

            {/*Info Panel*/}
            <div className="relative bg-white border border-gray-200 p-10 max-w-md w-full text-center shadow-2xl transform transition-all">
              
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-2xl font-bold text-black mb-3 uppercase tracking-wider">
                Welcome to Aero JC
              </h2>
              <p className="text-gray-500 mb-8 font-light leading-relaxed">
                Registrations for the upcoming AERO-IGNITE competition sprint are now open. Join us to design, build, and fly!
              </p>
              
              <button 
                onClick={() => setShowModal(false)}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-4 transition-colors uppercase tracking-widest"
              >
                Enter Site
              </button>
            </div>
          </div>
        )}

        {/*Nav Bar*/}
        <header className="bg-white/10 backdrop-blur-md sticky top-0 z-50 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-26">
              
              {/*Logo*/}
              <Link to="/" className="shrink-0 flex items-center gap-4">
                <div className="h-20 w-20 flex items-center justify-center">
                  <img 
                    src="https://static.wixstatic.com/media/7d702f_f46dd0fb8521451bbe6ef77673109f8c~mv2.png/v1/fill/w_142,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/aerologo-Photoroom__1_-removebg-preview.png" 
                    alt="Aero JC Logo" 
                    className="h-full w-full object-contain brightness-0" 
                  />
                </div>
              </Link>

              {/*Nav Links*/}
              <nav className="hidden md:flex space-x-10">
                <Link to="/shop" className="text-gray-900 hover:text-cyan-500 font-medium transition-colors duration-300 uppercase tracking-wide">Shop</Link>
                <Link to="/about" className="text-gray-900 hover:text-cyan-500 font-medium transition-colors duration-300 uppercase tracking-wide">About Us</Link>
                <Link to="/gallery" className="text-gray-900 hover:text-cyan-500 font-medium transition-colors duration-300 uppercase tracking-wide">Gallery</Link>
                <a href="https://www.aerojc.in/" className="text-gray-900 hover:text-cyan-500 font-medium transition-colors duration-300 uppercase tracking-wide">Contact Us</a>
              </nav>

              {/* Mobile Menu Button 
              <div className="md:hidden flex items-center">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600 hover:text-cyan-500 focus:outline-none transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>*/}

            </div>
          </div>
        </header>

        {/*Main Page*/}
        <div className="grow flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </div>


        <footer className="bg-gray-900 backdrop-blur-md top-0 z-50 flex-col border-t-20 items-center border-gray-900 shadow-md mt-30 py-4 px-4">
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"> 
            <div>
              {/*Logo*/}
              <logo><img src='AEROLOGO.avif' alt='Logo' className='px-6.5'></img></logo>'
            </div>
            <nav className="flex flex-wrap items-center justify-center md:justify-end md:flex-col gap-6 text-sm font-medium">
              <a href="#terms" className="text-gray-400 hover:text-cyan-500 transition-colors">Terms & Conditions</a>
              <a href="#refunds" className="text-gray-400 hover:text-cyan-500 transition-colors">Refund & Policies</a>
              <a href="mailto:aerojcteam@gmail.com" className="text-gray-400 hover:text-cyan-500 transition-colors">Contact Us</a>
              <a href="#other" className="text-gray-400 hover:text-cyan-500 transition-colors">Other Field</a>
            </nav>
            <div className="items-right">
              <logo><img src="UniLogo.avif" alt="Logo" className="h-30 w-50"></img></logo>
            </div>
          </div>
          <div className="text-center text-white text-sm mt-10">
            &copy; 2026 Aero JC. All rights reserved.(To Macimus :P)
          </div>
          <div className="text-center text-white text-xs mt-2">
            This is a test website for Aero JC, an aeromodelling club. It is not an official site and is only meant to showcase web design skills. Please do not take any information on this site seriously. For official information, please visit our actual website or contact us directly.
          </div>
        </footer>

      </div>
      </Router>
    </ReactLenis>
  )
}

export default App