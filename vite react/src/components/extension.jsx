import React from "react";

import { BsArrowUpRight } from 'react-icons/bs'
import { Link } from "react-scroll";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

const ExtentedAbout = () => {

    const elements = [
        {
            title: 'Lorem ipsum dolor, sit amet',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea neque assumenda tenetur hic! Ducimus aut velit vero aliquam nam placeat repellendus tempora ut sequi cum aperiam harum obcaecati, fugiat dolorem necessitatibus iste perferendis sunt veritatis. Perspiciatis cum animi magnam excepturi. Recusandae hic quam, voluptatem quae doloremque est pariatur debitis dolorum expedita eum! Consequatur officia sunt officiis nobis illum id est cum cupiditate corrupti delectus expedita accusamus neque numquam quos excepturi aspernatur, quaerat dicta eius? Quas dignissimos dolorem corrupti maxime voluptas soluta! Fugit, quidem magni veniam ipsum expedita id adipisci minus nulla maxime perferendis dolores sapiente? Ad molestias hic reprehenderit ratione.',
            bg: 'white',
            color: 'black',
            img: 'https://voltcave.com/wp-content/uploads/2020/05/cichlid_visuals-desk-setup-e1660770958628.jpg',
            id: '0'
        },
        {
            title: 'Lorem ipsum dolor, sit amet',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea neque assumenda tenetur hic! Ducimus aut velit vero aliquam nam placeat repellendus tempora ut sequi cum aperiam harum obcaecati, fugiat dolorem necessitatibus iste perferendis sunt veritatis. Perspiciatis cum animi magnam excepturi. Recusandae hic quam, voluptatem quae doloremque est pariatur debitis dolorum expedita eum! Consequatur officia sunt officiis nobis illum id est cum cupiditate corrupti delectus expedita accusamus neque numquam quos excepturi aspernatur, quaerat dicta eius? Quas dignissimos dolorem corrupti maxime voluptas soluta! Fugit, quidem magni veniam ipsum expedita id adipisci minus nulla maxime perferendis dolores sapiente? Ad molestias hic reprehenderit ratione.',
            bg: '#000',
            color: 'white',
            img: 'https://cdn.mos.cms.futurecdn.net/h5NgQEGTcUwAyBzyNJwPue.jpg',
            id: '1'
        },
        {
            title: 'Lorem ipsum dolor, sit amet',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea neque assumenda tenetur hic! Ducimus aut velit vero aliquam nam placeat repellendus tempora ut sequi cum aperiam harum obcaecati, fugiat dolorem necessitatibus iste perferendis sunt veritatis. Perspiciatis cum animi magnam excepturi. Recusandae hic quam, voluptatem quae doloremque est pariatur debitis dolorum expedita eum! Consequatur officia sunt officiis nobis illum id est cum cupiditate corrupti delectus expedita accusamus neque numquam quos excepturi aspernatur, quaerat dicta eius? Quas dignissimos dolorem corrupti maxime voluptas soluta! Fugit, quidem magni veniam ipsum expedita id adipisci minus nulla maxime perferendis dolores sapiente? Ad molestias hic reprehenderit ratione.',
            bg: '#DAA520',
            color: 'black',
            img: 'https://pbs.twimg.com/media/EyUfEw6WgAQp2XC.jpg:large',
            id: '2'
        }
    ]

    useEffect(() => {


        gsap.registerPlugin(ScrollTrigger)
        let content = document.querySelectorAll('.content')
        content.forEach(contentElement => {
            gsap.set(contentElement, { opacity: 0, scrollTrigger: { trigger: contentElement, start: 'top 120%', toggleActions: 'restart' } })
            gsap.fromTo(contentElement, { y: '200px', opacity: 0 }, { y: 0, opacity: 1, delay: .2, duration: .5, scrollTrigger: { trigger: contentElement, start: 'top 70%', toggleActions: 'restart' } })
        })

        let images = document.querySelectorAll('.image')
        images.forEach(image => {
            gsap.set(image, { opacity: 0, scrollTrigger: { trigger: image, start: 'top 120%', toggleActions: 'restart' } })
            gsap.fromTo(image, { x: '-200px', opacity: 0 }, { x: 0, opacity: 1, stagger: .2, duration: .5, scrollTrigger: { trigger: image, start: 'top 80%', toggleActions: 'restart' } })
        })
    }, [])

    return (
        <div>
            {elements.map((element, i) => {
                return (
                    <div key={i}>
                        <Link to='offer'
                            smooth={true}>
                            <div className="text-black absolute right-[10px] mt-[10px] p-[10px]">
                                <div className="flex relative lg:left-[60px] group hover:left-0 transition-all duration-300">
                                    <p className="text-[#754922] text-[25px]"><BsArrowUpRight /></p>
                                    <p className="text-[#754922] opacity-0 group-hover:opacity-100  transition-all duration-300">POWRÓT</p>
                                </div>
                            </div>
                        </Link>
                        <div className="grid lg:grid-cols-2 text-black py-[150px] aboutContent" id={element.id} style={{ background: element.bg, color: element.color }}>
                            <div className="text-justify w-[90%] m-auto content  my-[20px] lg:my-0">
                                <h1 className="text-[40px] ml-[40px]">{element.title}</h1>
                                <p className="text-[20px]">{element.description}</p>
                            </div>
                            <div className="w-[80%] m-auto image my-[20px] lg:my-0">
                                <img src={element.img} alt='setup' className=' rounded-3xl aspect-video' />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ExtentedAbout