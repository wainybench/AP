import React, {useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const ajc_colors = ["bg-[#1A222C]", "bg-[#24303E]", "bg-[#38BDF8]", "bg-[#1A222C]", "bg-[#94A3B8]" , "bg-[#1A222C]", "bg-[#24303E]", "bg-[#38BDF8]", "bg-[#1A222C]", "bg-[#94A3B8]", "bg-[#1A222C]" ];

// const cards = [ { bg: "bg-[#1A222C]", img: "/images/card1.png" }, { bg: "bg-[#24303E]", img: "/images/card2.png" }, { bg: "bg-[#38BDF8]", img: "/images/card3.png" }];

const gallerySection = () => {

    const scrollRef = useRef(null);
    const triggerRef = useRef(null);
    const revealTextRef = useRef(null);

    //For the whole field horizontal
    useGSAP(() => {
        const trackmain = gsap.to(triggerRef.current, {
            x: "-350vw",
            ease: "none",
            scrollTrigger: {
                trigger: scrollRef.current,
                pin: true,
                ease: 1,
                scrub: true,
                markers: "true",
                start: "top top",
                end: "+=5000",
                anticipatePin: 1,
                fastScrollEnd: true,
                invalidateOnRefresh: true,
            }

        });

        const elements = gsap.utils.toArray(".cont-box");   

        //boxes
        elements.forEach((box) => {
            const randorot = gsap.utils.random(-35, 35);
            const randY = gsap.utils.random(-50, 50);
            const randXOffset = gsap.utils.random(-35, 35);

            gsap.to(box, {
                rotation: randorot,
                y: randY,
                x: randXOffset,
                scrollTrigger:{
                    trigger: box,
                    containerAnimation: trackmain,
                    markers: "true",
                    start: "left right",
                    end: "right left",
                    scrub: 1,
                }
            })
        });

        //text
        // gsap.fromTo(
        //     revealTextRef.current, {
        //         opacity: 0,

        //     },
        //     {
        //         opacity: 1,
        //         ease: "power2.out",
        //         scrollTrigger: {
        //             trigger: scrollRef.current,
        //             // containerAnimation: trackmain,
        //             markers: "true",
        //             start: "60% center",
        //             end: "90% center",
        //             // start: "top -3000px", 
        //             // end: "top -4500px",
        //             scrub: true,
        //         }
        //     }
        // );
        ScrollTrigger.create({
            trigger: scrollRef.current,
            start: "top top",
            end: "+=5000",
            scrub: true,
            onUpdate: (self) => {
                // progress goes 0 → 1 over the full 5000px
                // remap the last 20% (progress 0.8 → 1.0) to opacity 0 → 1
                const opacity = gsap.utils.clamp(0, 1, (self.progress - 0.8) / 0.2);
                gsap.set(revealTextRef.current, { opacity });
        }
    });
        

    }, {scope : scrollRef })



    
    return(
        //Hori scroll wrapper
        <div ref = {scrollRef} className='relative h-screen w-full overflow-visible bg-grey-100'>
          
          

          <div ref = {triggerRef} className='relative h-full flex z-10 items-center pointer-event-none' style={{width: "450vw", paddingLeft: "100vw"}}>
            {ajc_colors.map(
                (color, index) => (
                <div key={index} className= {`cont-box ${color} w-80 h-112 mx-10 shrink-0 rounded-xl shadow-[-_50px_100px_rgba(0, 0, 0, 0.5)] border-[10px] border-white flex items-end p-6`}>
                    <div className= 'h-3 w-20 bg-white/20 rounded mb-2'></div>
                    <div className= 'h-6 w-full bg-white/10 rounded '><img src = "gal1.avif"/></div> 
                    {/* img added for testung */}
                </div>
                )
            )
            }
          </div>

{/* TExt behind imgs */}
          <div ref = {revealTextRef} className='absolute inset-0 flex flex-col items-center justify-center z-0' style = {{opacity: 0}}>
            <h2 className='text-[12vw] font-black text-black leading-none text-center uppercase italic' >Aero <br /> JC</h2>
          </div>

        </div>
    )
}

export default gallerySection
