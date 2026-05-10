import { useState } from 'react'
import './App.css'
import ScrambleText from './scramble';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // This state controls the pop-up modal
  const [showModal, setShowModal] = useState(true)

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-cyan-100 selection:text-cyan-900 relative no-scrollbar">
      
      {/*pop up*/}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
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
            <a href="/" className="shrink-0 flex items-center gap-4">
              <div className="h-20 w-20 flex items-center justify-center">
                <img 
                  src="https://static.wixstatic.com/media/7d702f_f46dd0fb8521451bbe6ef77673109f8c~mv2.png/v1/fill/w_142,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/aerologo-Photoroom__1_-removebg-preview.png" 
                  alt="Aero JC Logo" 
                  className="h-full w-full object-contain brightness-0" 
                />
              </div>
              {/* <span className="text-2xl font-bold text-black tracking-wider uppercase">Aero JC</span> */}
            </a>

            {/*Nav Links*/}
            <nav className="hidden md:flex space-x-10">
              <a href="#shop" className="text-gray-600 hover:text-cyan-500 font-medium transition-colors duration-300 uppercase tracking-wide">Shop</a>
              <a href="#about" className="text-gray-600 hover:text-cyan-500 font-medium transition-colors duration-300 uppercase tracking-wide">About Us</a>
              <a href="#gallery" className="text-gray-600 hover:text-cyan-500 font-medium transition-colors duration-300 uppercase tracking-wide">Gallery</a>
              <a href="#contact" className="text-gray-600 hover:text-cyan-500 font-medium transition-colors duration-300 uppercase tracking-wide">Contact Us</a>
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
      <main className="flex-grow flex flex-col">
        
        
        
        {/*'relative z-10' so content stays above picture*/}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center">
          {/* The Bg Image Layer */}
          <div className="absolute inset-0 z-0 bg-[url('https://static.wixstatic.com/media/7d702f_ec94b82de6e6402f8e40f08f63bd6a54~mv2.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/50"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
              <h2 className="text-5xl md:text-5xl font-bold text-black tracking-widest mb-6 uppercase">
                <span className="text-cyan-500"><ScrambleText text="Welcome" /> <ScrambleText text="To" /> <ScrambleText text="Aero" /> <ScrambleText text="JC" /></span>
              </h2>
              
              <h1 className="text-3xl md:text-3xl max-w-4xl text-black mb-6 font-medium tracking-[0.3em] uppercase">
                Design <span className="mx-2 font-light text-cyan-500">|</span> Build <span className="mx-2 font-light text-cyan-500">|</span> Fly
              </h1>
              
              <p className="max-w-4xl text-lg md:text-2xl text-gray-900 mb-12 font-medium tracking-wide">
                We aim high, literally.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mt-4">
                <button className="px-10 py-5 border-2 border-gray-200 text-sm font-bold text-gray-500 bg-white/80 hover:bg-gray-50 hover:text-black transition-colors duration-300 uppercase tracking-[0.2em]">
                  Explore Our Products
                </button>
                <button className="px-10 py-5 border-2 border-gray-200 text-sm font-bold text-gray-500 bg-white/80 hover:bg-gray-50 hover:text-black transition-colors duration-300 uppercase tracking-[0.2em]">
                  Know More About Us
                </button>
              </div>
            </div>
        </section>
        {/*Video bg*/}
        <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden mt-20">
          
          {/*bg vid*/}
          <video 
            autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0"
            
          >
            {/* I put a cool placeholder airplane video here. Replace the src with your own video! */}
            <source src="/ajc25east.mp4" type="video/mp4" />
          </video>

          
          {/*Overlaty*/}
          <div className="absolute inset-0 z-0 bg-black/60"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
            
            <h2 className="text-cyan-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4">
              Our Story
            </h2>
            
            <h3 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-widest uppercase">
              middle part
            </h3>
            
            <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-2xl">
              lower part
            </p>

          </div>
        </section>
      </main>

    </div>
  )
}

export default App