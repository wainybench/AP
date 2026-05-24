import { useState, useEffect } from 'react'
import ScrambleText from './scramble';

function App() {
  const[loading, setloading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0);
  //popup
  const [showModal, setShowModal] = useState(true)
  //parallax math
  const [offsetY, setOffsetY] = useState(0);
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
    useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


 

  return (
    
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-cyan-100 selection:text-cyan-900 relative no-scrollbar">

      {/*Nav Bar not in hp*/}
   

      {/*Main Page*/}
      <main className="grow flex flex-col">
        
        {/*Hero*/}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
          
          <div 
            className="absolute inset-0 z-0 bg-[url('https://static.wixstatic.com/media/7d702f_ec94b82de6e6402f8e40f08f63bd6a54~mv2.png')] bg-cover bg-top bg-no-repeat scale-[1.15]"
            style={{ transform: `translateY(${offsetY * 0.3}px)` }}
          >
            <div className="absolute inset-0 bg-white/60"></div>
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
        <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden mb-10">
          
          {/*bg vid*/}
          <video 
            autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
            <source src="ajc25east.mp4" type="video/mp4" />
          </video>

          
          {/*Overlaty*/}
          <div className="absolute inset-0 z-0 bg-black/60"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
            
            <h3 className="text-4xl md:text-6xl font-SF text-white mb-6 tracking-widest uppercase">
              Our Story
            </h3>
            
            <p className="text-lg md:text-xl text-gray-300 font-SF tracking-wide max-w-2xl">
              Founded in 2016, AeroJC is a student-led aero- modelling club curated, administered, and academically guided by the Department of Mechanical Engineering at Sri Jayachamarajendra College of Engineering (SJCE), a constituent institution of JSS Science and Technology University, Mysuru. The club is proud to be the first aero-modelling club in Mysuru, representing JSS Science and Technology University at national and international aero-design competitions.

What began as an initiative by six passionate students has grown into a multidisciplinary team of 40+ engineers, spanning mechanical, electronics, avionics, and management domains. The club is structured into dedicated verticals including Design, Avionics, Fabrication, Flight Operations, and Sponsorship & Outreach, enabling end-to-end aircraft development. At AeroJC, the club designs, fabricates, integrates electronics, tests, and flies fixed-wing RC aircraft. Beyond competitions, the club actively contributes to hands-on engineering education by organizing RC aircraft workshops, introducing students to real-world aerospace design and manufacturing practices.


            </p>

          </div>
        </section>
        <section className="relative w-full min-h-[80vh] flex-col text-center overflow-hidden mt">
              <h1 className="text-4xl text-black font-bold tracking-wide align-center items-start mt-20">Our Sponsors</h1>

              {/*1*/}
               <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 px-4">
                <div>
                  <img 
                    src="SWlogo.png" alt="SolidWorks Logo" className="h-full w-full object-contain brightness-100" 
                  />
                </div>
                <div className="text-left flex flex-col justify-center max-w-2xl">
                  <p className="text-gray-500 text-sm mt-2">• SolidWorks, developed by Dassault Systèmes, is a premier CAD software for 3D design and engineering.</p>
                  <p className="text-gray-500 text-sm mt-2">• SolidWorks is offering free premium software to our club members.</p>
                  <p className="text-gray-500 text-sm mt-2">• This helps us design, model and iterate efficiently.</p>
                </div>

              </div>

              {/*2*/}
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 px-4">

                <div className="text-left flex flex-col justify-center max-w-2xl">
                  <p className="text-gray-500 text-sm mt-2">• SolidWorks, developed by Dassault Systèmes, is a premier CAD software for 3D design and engineering.</p>
                  <p className="text-gray-500 text-sm mt-2">• SolidWorks is offering free premium software to our club members.</p>
                  <p className="text-gray-500 text-sm mt-2">• This helps us design, model and iterate efficiently.</p>
                </div>

                <div>
                  <img 
                    src="SWlogo.png" alt="SolidWorks Logo" className="h-full w-full object-contain brightness-100" 
                  />
                </div>

              </div>
              {/*3*/}
               <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 px-4">
                <div>
                  <img 
                    src="SWlogo.png" alt="SolidWorks Logo" className="h-full w-full object-contain brightness-100" 
                  />
                </div>
                <div className="text-left flex flex-col justify-center max-w-2xl">
                  <p className="text-gray-500 text-sm mt-2">• SolidWorks, developed by Dassault Systèmes, is a premier CAD software for 3D design and engineering.</p>
                  <p className="text-gray-500 text-sm mt-2">• SolidWorks is offering free premium software to our club members.</p>
                  <p className="text-gray-500 text-sm mt-2">• This helps us design, model and iterate efficiently.</p>
                </div>

              </div>

              {/*4*/}
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 px-4">

                <div className="text-left flex flex-col justify-center max-w-2xl">
                  <p className="text-gray-500 text-sm mt-2">• HeheHaha.</p>
                  <p className="text-gray-500 text-sm mt-2">• Nah Lil Bro, they aint doing ts.</p>
                  <p className="text-gray-500 text-sm mt-2">• Please sponsor us?</p>
                </div>

                <div>
                  <img 
                    src="RBlogo.svg" alt="SolidWorks Logo" className="h-40 w-100 object-contain brightness-100" 
                  />
                </div>

              </div>

        </section>
      </main>

    </div>
  )
}

export default App