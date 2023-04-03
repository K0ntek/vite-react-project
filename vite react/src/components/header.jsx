import React from "react";
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'

import { BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs'
import { Link } from "react-scroll";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        const blocks = document.querySelectorAll('.block')
        gsap.to(blocks[0], { top: '-100%', duration: 1, delay: .5 })
        gsap.to([blocks[1], blocks[2]], { top: '-100%', duration: 1.5, stagger: .2, delay: .2, ease: 'easeInOut' })

        gsap.fromTo('.banner', { y: "100%", opacity: 0 }, { y: 0, opacity: 1, duration: .7, delay: 2 })
        gsap.fromTo('.socials', { x: '100px', opacity: 0 }, { x: 0, opacity: 1, duration: .7, delay: 2.5 })
    }, [])
    return (
        <div id='home' className="header w-[100%] h-screen">
            <div className="w-full h-screen absolute top-0 bg-gray-900 block z-[50]"></div>
            <div className="w-full h-screen absolute top-[100%] bg-gray-600 block z-[50]"></div>
            <div className="w-full h-screen absolute top-[100%] bg-[#DAA520] block z-[50]"></div>

            <div className="relative top-[35%] banner">
                <h1 className="text-[70px] font-bold">Vite <span className="text-[#DAA520]">+ React</span></h1>
                <p className="text-white text-[20px] font-semibold mb-[50px] ">
                    Click on the Vite and React logos to learn more
                </p>
                <Link to='about' smooth={true}> <button className="border-[2px] px-[20px] py-[6px] border-[#DAA520] text-[#DAA520] hover:text-black hover:bg-[#DAA520] transition-all duration-300 text-[20px]">Learn more</button></Link>
            </div>

            <div className="absolute right-[10px] top-[50%] translate-y-[-50%] socials">
                <div className="w-[2px] h-[100%] bg-[#754922]/70 absolute left-[15px]"></div>
                <ul>
                    <li className="text-[20px] my-[5px] p-[5px] rounded-full rotate-[90deg] hover:text-[#DAA520] hover:rotate-0 transition-all duration-150"><a href='https://www.facebook.com/profile.php?id=100009894456441'><BsFacebook /></a></li>
                    <li className="text-[20px] my-[5px] p-[5px] rounded-full rotate-[90deg] hover:text-[#DAA520] hover:rotate-0 transition-all duration-150"><a href='https://www.facebook.com/profile.php?id=100009894456441'><BsGithub /></a></li>
                    <li className="text-[20px] my-[5px] p-[5px] rounded-full rotate-[90deg] hover:text-[#DAA520] hover:rotate-0 transition-all duration-150"><a href='https://www.facebook.com/profile.php?id=100009894456441'><BsInstagram /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;