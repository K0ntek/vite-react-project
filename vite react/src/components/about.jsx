import React from "react";

import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap";

const About =()=>{

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.aboutElement', {opacity:0, scrollTrigger:{trigger:'.aboutElement', start:'top 130%', toggleActions:'restart'}})
        let tl = gsap.timeline({
            scrollTrigger:{trigger:'.aboutElement', 
                            start:'top 90%', 
                            toggleActions:'restart',
                        }
        })
            tl.fromTo('.aboutElement', {y:'200px', opacity:0}, {y:0, opacity:1, duration:1, stagger:.2, delay:.2})
    },[])
return(
<div id='about' className="bg-[#000000] py-[100px] grid md:grid-cols-2 text-justify  overflow-hidden">
    <div className=" aboutElement w-[80%] m-auto bg-gradient-to-tr from-[#c75d00] to-[#DAA520] text-black p-[30px] my-[20px] rounded-3xl hover:bg-gradient-to-tr hover:from-[#DAA520] hover:to-[#c75d00]">
        <h1 className="text-[25px] text-left ml-[20px] font-gruppo font-extrabold mb-[50px]">Lorem ipsum dolor, sit amet</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus commodi error corporis repellat, corrupti velit sit incidunt porro soluta cupiditate, reprehenderit doloribus ipsa sunt, alias iure perspiciatis dignissimos? Velit laborum tenetur incidunt! Corrupti soluta, repudiandae voluptatibus, laborum delectus magnam veritatis excepturi numquam ducimus officia omnis sed iste minus perspiciatis eum?</p>
    </div>
    <div className=" aboutElement w-[80%]  m-auto bg-gradient-to-tr from-[#c75d00] to-[#DAA520] text-black p-[30px] my-[20px] rounded-3xl hover:bg-gradient-to-tr hover:from-[#DAA520] hover:to-[#c75d00]">
    <h1 className="text-[25px] text-left ml-[20px] font-gruppo font-extrabold mb-[50px]">Lorem ipsum dolor, sit amet</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus commodi error corporis repellat, corrupti velit sit incidunt porro soluta cupiditate, reprehenderit doloribus ipsa sunt, alias iure perspiciatis dignissimos? Velit laborum tenetur incidunt! Corrupti soluta, repudiandae voluptatibus, laborum delectus magnam veritatis excepturi numquam ducimus officia omnis sed iste minus perspiciatis eum?</p>
    </div>
</div>
)
}

export default About;