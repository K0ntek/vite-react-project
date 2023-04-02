import React from "react";


import {RxQuestionMark} from 'react-icons/rx'
import {BsGraphUp} from 'react-icons/bs'
import {VscSourceControl} from 'react-icons/vsc'
import ExtentedAbout from "./extension";

import { useEffect } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Offer =()=>{

    const aboutElements=[
        {
            title: 'Lorem, ipsum dolor.',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eveniet provident temporibus ut iusto eos necessitatibus unde ea dolor eum?',
            icon : <RxQuestionMark />,
            id:'0'
        },

        {
            title: 'Lorem, ipsum dolor.',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eveniet provident temporibus ut iusto eos necessitatibus unde ea dolor eum?',
            icon : <BsGraphUp />,
            id:'1'
        },

        {
            title: 'Lorem, ipsum dolor.',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eveniet provident temporibus ut iusto eos necessitatibus unde ea dolor eum?',
            icon : <VscSourceControl />,
            id:'2'
        },
    ]

    useEffect(()=>{
            gsap.registerPlugin(ScrollTrigger)
            gsap.set('.offerElement', {opacity:0, scrollTrigger:{trigger:'.offerElement', start:'top 140%', toggleActions:'restart'}})
            let tl= gsap.timeline({
                scrollTrigger:{trigger:'.offerElement', 
                start:'top 80%',
                toggleActions:'restart',
                }
            })
                tl.fromTo('.offerElement', {y:'200px', opacity:0}, {y:0, opacity:1, duration:.7, stagger:.2,})  
    },[])

    return( 
   <div id="offer">
   {/* <div className="bg-[#331800] h-[10px] w-full"></div> */}
    <div className=" py-[100px] bg-white text-black overflow-hidden">
            <h1 className=" font-orbitron text-[40px]">OFFER</h1>
            <div className="w-[90%] grid grid-cols-1 lg:grid-cols-3 mt-[50px] mx-auto offer">
              {aboutElements.map((element)=>{
                return(
                    <Link to={element.id}
                            smooth={true}
                            className="offerElement"
                            >
                     <div className=" w-[90%] m-auto my-[20px] text-justify bg-black p-[20px] rounded-3xl text-white group hover:bg-[#DAA520] hover:text-black transition-all duration-200">
                        <div className="text-[50px] text-[#DAA520] mb-[20px]"><div className="border-[2px] border-[#DAA520] w-fit p-[20px] rounded-full m-auto group-hover:text-black group-hover:border-black">{element.icon}</div></div>
                        <h1 className="text-[30px] font-orbitron text-center">{element.title}</h1>
                        <p className="font-michroma w-[90%] m-auto">{element.description}</p>
                    </div>
                   </Link>
                )
              })}
            </div>
    </div>
    <div className="bg-[#DAA520] text-black text-[22px] py-[50px] text-justify font-gruppo font-extrabold">
        <p className="w-[80%] m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium quo explicabo veniam praesentium excepturi dolore. Incidunt veniam nulla possimus voluptatem et dignissimos maxime, eos quam distinctio maiores cupiditate cum quisquam consequatur deleniti corporis consectetur sit earum magnam nisi aperiam provident. Natus at fuga fugiat dolor delectus sit animi libero repudiandae aut neque nostrum, repellendus doloribus adipisci reiciendis nihil id perferendis ratione cum minus quod sed tempora exercitationem sapiente quasi! Maxime officiis, mollitia laborum iure magnam blanditiis. Quis quasi accusamus ducimus possimus eius et! Aspernatur quia tempore eius dolores illo praesentium excepturi libero, perferendis quis fuga accusantium odio harum soluta!</p>
    </div>
    <ExtentedAbout/>
   </div>
)}

export default Offer;