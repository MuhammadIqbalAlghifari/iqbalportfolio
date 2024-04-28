"use client"

import Link from "next/link";
import { useEffect, useRef, useState } from "react"
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWeb } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdContactMail } from "react-icons/md";
import gsap from "gsap";
import { easeOut } from "framer-motion";

function MobileNav({open, setOpen}) {

    return (
        <div className={`absolute top-0 left-0 h-screen w-full bg-black bg-opacity-70 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className={`absolute top-0 left-0 h-screen w-[10%] p-4 bg-gray-300 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
                <div className="flex flex-col gap-y-4 items-center h-screen justify-center">
                    <Link href="#Home">
                        <FaHome className="w-6 h-6 text-black"/>
                    </Link>
                    <Link href="#About">
                        <CgProfile className="w-6 h-6 text-black"/>
                    </Link>
                    <Link href="#Skills">
                        <MdOutlineWeb className="w-6 h-6 text-black"/>
                    </Link>
                    <Link href="#Works">
                        <CiEdit className="w-6 h-6 text-black"/>
                    </Link>
                    <Link href="#Contact" className={currentRoute === '#Contact' ? activeLinkStyle : nonActiveLinkStyle}>
                        <MdContactMail className="w-6 h-6 text-black"/>
                    </Link>
                </div>  
            </div>
        </div>
    )
}

export default function Navbar() {
    
    const [open, setOpen] = useState(false)
    
    let NavbarElement = useRef()

    useEffect(() => {
        gsap.fromTo(NavbarElement, {opacity: 0, y: -100}, {opacity: 1, y: 0, duration: 0.7, delay: 0.3, ease: easeOut})
    }, []);

    return (
            <nav ref={el => {NavbarElement = el}} className="flex fixed z-50 w-full justify-between filter mb-20 poppins drop-shadow-md bg-transparent bg-opacity-70 backdrop-blur p-8 h-20 items-center">
                <MobileNav open={open} setOpen={setOpen}/>
                <div className="flex w-full md:w-3/6 justify-start items-center text-black">
                    <Link className="md:text-2xl text-base font-bold" href="/" style={{fontFamily: "Futura Hv"}}>Iqbal Alghifari</Link>
                </div>
                <div className="flex justify-center items-center">

                    <div className="hidden md:flex gap-x-2 p-6 items-center lg:text-sm text-xs font-semibold text-black">
                        <Link href="#Home" style={{margin: "0 1rem 0 1rem"}}>
                            <p className="text-sm">Home</p>
                        </Link>
                        <Link href="#About" style={{margin: "0 1rem 0 1rem"}}>
                            <p className="text-sm">About me</p>
                        </Link>
                        <Link href="#Skills" style={{margin: "0 1rem 0 1rem"}}>
                            <p className="text-sm">My skills</p>
                        </Link>
                        <Link href="#Works" style={{margin: "0 1rem 0 1rem"}}>
                            <p className="text-sm">My works</p>
                        </Link>
                        <Link href="#Contact" style={{margin: "0 1rem 0 1rem"}}>
                            <p className="text-sm">Contact</p>
                        </Link>
                    </div>
                </div>
                <div className="w-9/12 md:hidden
                 flex justify-end items-center">

                    <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5 bg-white" : ""}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "hidden" : "w-full flex"}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5 bg-white" : ""}`} />
                    </div>
                </div>
            </nav>
    )
}