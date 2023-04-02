import React from "react";

import {BsGithub, BsInstagram, BsFacebook} from 'react-icons/bs'

const Footer =()=>{
    return(
   <>
    <div className="w-[100%] py-[150px] bg-black grid grid-cols-2">
        <div>
            <h1 className=" border-l-[3px] border-[#754922] w-fit pl-[20px] text-[25px] m-auto">KONTAKT</h1>
            <p>jakub.kontek05@gmail.com</p>
            <p>790 839 086</p>
            <div className="flex text-[25px] m-auto text-center justify-center">
                <div className=" my-[5px] p-[5px] hover:text-[#754922] transition-all duration-150"><a href='https://www.facebook.com/profile.php?id=100009894456441'><BsFacebook/></a></div>
                <div className=" my-[5px] p-[5px] hover:text-[#754922] transition-all duration-150"><a href='https://www.facebook.com/profile.php?id=100009894456441'><BsGithub/></a></div>
                <div className=" my-[5px] p-[5px] hover:text-[#754922] transition-all duration-150"><a href='https://www.facebook.com/profile.php?id=100009894456441'><BsInstagram/></a></div>

            </div>
        </div>
        <div>
            <h1 className=" border-l-[3px] border-[#754922] w-fit pl-[20px] text-[25px]">DANE OSOBOWE</h1>
        </div>
    </div>
        <div className=" bg-[#030303] w-full py-[5px]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, deserunt!</p>
        </div>
    </>
)}

export default Footer;