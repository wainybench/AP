import { useState } from 'react'
import './App.css'
import ScrambleText from './scramble';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // This state controls the pop-up modal
  const [showModal, setShowModal] = useState(true)

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-cyan-100 selection:text-cyan-900 relative">
      
      {/* THE POP-UP MODAL (Light Minimalist Mode) */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* Light Frosted Background Overlay */}
          <div 
            className="absolute inset-0 bg-white/80 backdrop-blur-sm transition-opacity"
            onClick={() => setShowModal(false)} 
          ></div>

          {/* Clean Information Panel */}
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

      {/* Navigation Bar */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            
            {/* Logo Section */}
            <a href="/" className="shrink-0 flex items-center gap-4">
              <div className="h-20- w-20 flex items-center justify-center">
                <img 
                  src="https://static.wixstatic.com/media/7d702f_f46dd0fb8521451bbe6ef77673109f8c~mv2.png/v1/fill/w_142,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/aerologo-Photoroom__1_-removebg-preview.png" 
                  alt="Aero JC Logo" 
                  className="h-full w-full object-contain brightness-0" 
                />
              </div>
              {/* <span className="text-2xl font-bold text-black tracking-wider uppercase">Aero JC</span> */}
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex space-x-10">
              <a href="#shop" className="text-gray-600 hover:text-cyan-500 font-medium transition-colors duration-300 uppercase tracking-wide">Shop</a>
              <a href="#about" className="text-gray-600 hover:text-cyan-500 font-medium transition-colors duration-300 uppercase tracking-wide">About Us</a>
              <a href="#gallery" className="text-gray-600 hover:text-cyan-500 font-medium transition-colors duration-300 uppercase tracking-wide">Gallery</a>
              <a href="#contact" className="text-gray-600 hover:text-cyan-500 font-medium transition-colors duration-300 uppercase tracking-wide">Contact Us</a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-cyan-500 focus:outline-none transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Main Content / Hero Section */}
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
          
          <h2 className="text-5xl md:text-5xl font-bold text-black tracking-widest mb-6 uppercase">
             <span className="text-cyan-500"><ScrambleText text="Welcome" /> <ScrambleText text="To" /> <ScrambleText text="Aero" /> <ScrambleText text="JC" /></span>
          </h2>
          
          <h1 className="text-3xl md:text-3xl max-w-4xl text-black mb-6 font-medium tracking-[0.3em] uppercase">
            Design <span className="mx-2 font-light text-gray-300">|</span> Build <span className="mx-2 font-light text-gray-300">|</span> Fly
          </h1>
          
          <p className="max-w-4xl text-lg md:text-2xl text-gray-500 mb-12 font-light tracking-wide">
            We aim high, literally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <button className="px-10 py-5 bg-white text-black text-sm font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(0,200,255,0.15)] hover:shadow-[0_0_25px_rgba(0,200,255,0.3)] transition-all duration-300 border border-cyan-50">
              Explore Our Products
            </button>
            <button className="px-10 py-5 border-2 border-gray-200 text-sm font-bold text-gray-500 bg-transparent hover:bg-gray-50 hover:text-black transition-colors duration-300 uppercase tracking-[0.2em]">
              Know More About Us
            </button>
          </div>

        </section>
      </main>

    </div>
  )
}

export default App