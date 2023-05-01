import React from "react";
import viteLogo from '../../public/vite.svg'
import { useState } from "react";

import {HiOutlineHome, HiMenuAlt3} from 'react-icons/hi'
import {BiWindowAlt} from 'react-icons/bi'
import {MdOutlineLocalOffer} from 'react-icons/md'
import {RiContactsLine} from 'react-icons/ri'

import { Link } from "react-scroll";
import { InView, useInView } from 'react-intersection-observer';


const Navbar =()=>{
    const navElements=[
        {
            title: 'home',
            icon: <HiOutlineHome />,
            link: 'home'
        },
        {
            title: 'about',
            icon: <BiWindowAlt />,
            link: 'about'
        },
        {
            title: 'offer',
            icon: <MdOutlineLocalOffer />,
            link: 'offer'
        },
        {
            title: 'contact',
            icon: <RiContactsLine />,
            link: 'contact'
        }
    ]

    const [activeNavbar, setNavbar] = useState('navbar')
    const toggleNavbar =()=>{
        activeNavbar === 'navbar' ? setNavbar('navbar activeNavbar') : setNavbar('navbar');
    }

    const [activeIcon, setIcon] = useState('icon')

        const icon =()=>{
            activeIcon === 'icon' ? setIcon('icon activeIcon') : setIcon('icon');
        }

    return(
        <>
        <div className="w-[30px] fixed top-[1%] right-[1%] sm:hidden" onClick={toggleNavbar}>
            <div className={activeIcon} onClick={icon}>
                <div className="line item-1 my-[6px]"></div>
                <div className="line item-2 my-[6px]"></div>
                <div className="line item-3 my-[6px]"></div>
            </div>
            {/* <HiMenuAlt3 className="absolute top-[1%] right-[1%] z-[99] text-white text-[30px] sm:hidden button"/> */}
        </div>
        <nav className={`fixed top-[40px] sm:top-0 left-[100%] sm:left-0 bg-black w-[80%] sm:w-[70px] h-[100%] z-40 overflow-hidden group sm:hover:w-[200px] transition-all duration-200 ${activeNavbar}`}>
        <div><h1 className="relative top-[1%] left-[50%] translate-x-[-50%] text-[60px] font-orbitron text-[#DAA520] hidden sm:block group-hover:hidden transition-all duration-300">K</h1>
                    <h1 className="relative top-[1%] left-[50%] translate-x-[-50%] text-[35px] font-orbitron text-[#DAA520] sm:hidden group-hover:block transition-all duration-300">KONTEK</h1>
                    <p className="relative top-[1%] left-[50%] translate-x-[-50%] text-[20px] font-gruppo text-[silver] sm:hidden group-hover:block transition-all duration-300">Lorem, ipsum dolor.</p></div>
                <ul className="justify-center absolute top-[100px] left-[40%] sm:top-[150px] sm:left-[10px]">
                    {navElements.map((element, i) => {
                        return (
                            <li className=" my-[15px]" key={i}>
                                <Link to={element.link}
                                    smooth={true}
                                    spy={true}
                                    className='link'
                                >
                                    <div className=" flex hover:bg-[#DAA520]/10 py-[5px] rounded-full navElement">
                                        <div className="text-[#DAA520] text-[30px] p-[10px] bg-[white]/10 rounded-full icon hidden sm:block">{element.icon}</div>
                                        <div className="mx-auto sm:mx-[20px] text-[#DAA520] text-[20px] sm:opacity-0 sm:group-hover:opacity-100 mt-[8px] cursor-pointer">{element.title}</div>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
        </nav></>
    )
}

export default Navbar;