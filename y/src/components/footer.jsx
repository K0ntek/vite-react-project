import React from "react";

import {BsGithub, BsInstagram, BsFacebook, BsTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Footer =()=>{
    return(
   <>
   <div className="grid grid-rows-2 py-[150px] bg-black align-middle">
    <div className="w-[100%] grid lg:grid-cols-3">
        <div>
            <h1 className="text-[50px] font-orbitron text-[#DAA520]">KONTEK</h1>
            <p className="text-[25px] text-gray-500">Lorem, ipsum dolor.</p>
        </div>
            <div className="text-left mx-auto">
                <h1 className=" border-b-[3px] border-[#DAA520] w-fit text-[35px] font-gruppo font-extrabold mb-[30px]">KONTAKT</h1>
                <div className="flex ml-[30px] text-[18px]"> <AiOutlineMail className="mt-[5px] text-[20px] mr-[-20px]"/> <p className="ml-[30px]">jakub.kontek05@gmail.com</p></div>
                <div className="flex ml-[30px] text-[18px]"><BsTelephoneFill className="mt-[5px] mr-[10px]"/> <p> 790 839 086</p></div>
            </div>
            <div>
                {/* <h1 className=" border-l-[3px] border-[#754922] w-fit pl-[20px] text-[25px]">DANE OSOBOWE</h1> */}
                <h1 className="text-[40px] font-bold">Vite <span className="text-[#DAA520]">+ React</span></h1>
                <p className="text-justify w-[80%] mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo earum ratione quaerat sit laborum voluptate recusandae. Neque, id? Perspiciatis quas totam mollitia! Sequi consequatur blanditiis aliquid assumenda ipsum accusamus rerum illum consectetur atque doloribus? Dicta animi ipsam vel alias dolores?</p>
            </div>
        </div>
        <div className="flex text-[30px] m-auto text-center justify-center border-t-[2px] border-white w-[80%] pt-[30px] space-x-[20px]">
                <div className=" my-[5px] p-[10px] transition-all duration-150 border-[1px] border-white rounded-full hover:bg-[#ffffff] hover:text-black"><a href='https://www.facebook.com/profile.php?id=100009894456441'><BsFacebook/></a></div>
                <div className=" my-[5px] p-[10px] transition-all duration-150 border-[1px] border-white rounded-full hover:bg-[#ffffff] hover:text-black"><a href='https://www.facebook.com/profile.php?id=100009894456441'><BsGithub/></a></div>
                <div className=" my-[5px] p-[10px] transition-all duration-150 border-[1px] border-white rounded-full hover:bg-[#ffffff] hover:text-black"><a href='https://www.facebook.com/profile.php?id=100009894456441'><BsInstagram/></a></div>
            </div>
            <div className=" bg-[#030303] w-full py-[5px]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, deserunt!</p>
            </div>
   </div>
    </>
)}

export default Footer;