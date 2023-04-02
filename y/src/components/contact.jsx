import React from "react";

const Contact =()=>{
    return(
        <>
        <div className="bg-[#331800] h-[10px] w-full"></div>
        <div id='contact' className="text-black py-[90px] w-full m-auto">
            <h1 className="text-[40px] font-orbitron">CONTACT</h1>
            <div className="form grid grid-rows-3 gap-[20px] w-[50%] m-auto">
                <input type='text' placeholder="name" className="border-b-[2px] border-black font-gruppo font-extrabold text-[20px] focus:outline-none"/>
                <input type='text' placeholder="e-mail" className="border-b-[2px] border-black font-gruppo font-extrabold text-[20px] focus:outline-none"/>
              <textarea  className="border-b-[2px] border-black font-gruppo font-extrabold text-[20px] focus:outline-none" placeholder="massage"></textarea>
              <input type='button' value='Send' className="px-[50px] py-[10px] border-[2px] border-black w-fit m-auto hover:bg-[#DAA520] hover:border-[#DAA520] transition-all duration-300"/>
            </div>
        </div>
        <div className="bg-[#331800] h-[10px] w-full"></div>
        </>
    )
}

export default Contact;