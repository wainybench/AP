export default function Gallery() {
  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      
      <h2 className="text-4xl text-black font-bold tracking-wide text-center mb-12 uppercase">
        Flight <span className="text-cyan-500">Logs</span>
      </h2>

      {/*Grid Cont*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-40">
        
        {/*1*/}
        {/*Parent Cont for photos 1*/}
        <figure className="relative overflow-hidden cursor-pointer aspect-video group m-0">
          
          {/*Indi photos*/}
          <img 
            src="gal1.avif" 
            alt="Event" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />

          {/*Hov Effect*/}
          <div className="absolute inset-0  bg-neutral-900/70 flex flex-col items-center justify-center text-center p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-20">
            <h4 className="text-white text-2xl tracking-0.1em uppercase font-light m-0">
              <b className="font-bold">SAE 2024</b>
            </h4>
            <p className="text-white/80 text-sm font-light mt-2">
              The Delta
            </p>
          </div>

          {/*Logo bot*/}
          <img 
            src="AEROLOGO.avif" alt="AERO Logo" className="absolute bottom-3 left-3 h-8 w-auto rounded-sm pointer-events-none z-30" 
          />

        </figure>

        {/*2*/}
        <figure className="relative overflow-hidden cursor-pointer aspect-video group m-0">
          <img src="gal2.avif" alt="Event" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-neutral-900/60 flex flex-col items-center justify-center text-center p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-20">
            <h4 className="text-white text-2xl tracking-0.1em uppercase font-light m-0">
              <b className="font-bold">Design Report</b>
            </h4>
            <p className="text-white/80 text-sm font-light mt-2">3rd Place</p>
          </div>
          <img 
            src="AEROLOGO.avif" alt="AERO Logo" className="absolute bottom-3 left-3 h-8 w-auto rounded-sm pointer-events-none z-30" 
          />
        </figure>

        {/*3*/}
        <figure className="relative overflow-hidden cursor-pointer aspect-video group m-0">
          <img src="gal3.avif" alt="Event" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-neutral-900/60 flex flex-col items-center justify-center text-center p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-20">
            <h4 className="text-white text-2xl tracking-0.1em uppercase font-light m-0">
              <b className="font-bold">Flight Testing</b> 
            </h4>
            <p className="text-white/80 text-sm font-light mt-2">Did it Crash?</p>
          </div>
          <img 
            src="AEROLOGO.avif" alt="AERO Logo" className="absolute bottom-3 left-3 h-8 w-auto rounded-sm pointer-events-none z-30" 
          />
        </figure>

      </div>
    </section>
  );
}