"use client"

import Link from "next/link";
import { useState } from "react"
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWeb } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdContactMail } from "react-icons/md";

function MobileNav({open, setOpen}) {

    const currentRoute = usePathname()

    const linkStyle = 'transition duration-300'

    const activeLinkStyle = linkStyle + 'mx-4 text-black'

    const nonActiveLinkStyle = linkStyle + 'mx-4 text-black'

    return (
        <div className={`absolute top-0 left-0 h-screen w-full bg-black bg-opacity-70 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className={`absolute top-0 left-0 h-screen w-[10%] bg-gray-300 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
                <div className="flex flex-col gap-y-4 items-center h-screen justify-center">
                    <Link href="#Home" className={currentRoute === '#Home' ? activeLinkStyle : nonActiveLinkStyle}>
                        <FaHome className="w-6 h-6 text-black"/>
                    </Link>
                    <Link href="#About" className={currentRoute === '#About' ? activeLinkStyle : nonActiveLinkStyle}>
                        <CgProfile className="w-6 h-6 text-black"/>
                    </Link>
                    <Link href="#Skills" className={currentRoute === '#Skills' ? activeLinkStyle : nonActiveLinkStyle}>
                        <MdOutlineWeb className="w-6 h-6 text-black"/>
                    </Link>
                    <Link href="#Works" className={currentRoute === '#Works' ? activeLinkStyle : nonActiveLinkStyle}>
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

    const currentRoute = usePathname()

    const linkStyle = 'transition duration-300'

    const activeLinkStyle = linkStyle + 'mx-4 text-white'

    const nonActiveLinkStyle = linkStyle + 'mx-4 text-black hover:text-white'

    return (
            <nav className="flex fixed z-50 w-full justify-between filter mb-20 poppins drop-shadow-md bg-transparent bg-opacity-70 backdrop-blur p-8 h-20 items-center">
                <MobileNav open={open} setOpen={setOpen}/>
                <div className="flex w-full md:w-3/6 justify-start items-center text-black">
                    <Link className="md:text-2xl text-base font-bold" href="/" style={{fontFamily: "Futura Hv"}}>Iqbal Alghifari</Link>
                </div>
                <div className="flex justify-center items-center">

                    <div className="hidden md:flex gap-x-2 p-6 items-center lg:text-sm text-xs font-semibold text-black">
                        <Link href="#Home" className={currentRoute === '#Home' ? activeLinkStyle : nonActiveLinkStyle} style={{margin: "0 1rem 0 1rem"}}>
                            <p className="text-sm">Home</p>
                        </Link>
                        <Link href="#About" className={currentRoute === '#About' ? activeLinkStyle : nonActiveLinkStyle} style={{margin: "0 1rem 0 1rem"}}>
                            <p className="text-sm">About me</p>
                        </Link>
                        <Link href="#Skills" className={currentRoute === '#Skills' ? activeLinkStyle : nonActiveLinkStyle} style={{margin: "0 1rem 0 1rem"}}>
                            <p className="text-sm">My skills</p>
                        </Link>
                        <Link href="#Works" className={currentRoute === '#Works' ? activeLinkStyle : nonActiveLinkStyle} style={{margin: "0 1rem 0 1rem"}}>
                            <p className="text-sm">My works</p>
                        </Link>
                        <Link href="#Contact" className={currentRoute === '#Contact' ? activeLinkStyle : nonActiveLinkStyle} style={{margin: "0 1rem 0 1rem"}}>
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

// "use client"

// import React, { useEffect, useRef, useState } from "react";
// import { Box, Flex, Text, Stack} from "@chakra-ui/react";
// import Logo from "./Logo.js";
// import { easeOut } from "framer-motion";
// import gsap from "gsap";
// import Link from "next/link.js";

// const NavBar = (props) => {

//   const [isOpen, setIsOpen] = React.useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <NavBarContainer {...props}>
//       <Logo
//         w="220px"
//         color={["white", "white", "primary.500", "primary.500"]}
//       />
//       <MenuToggle toggle={toggle} isOpen={isOpen} />
//       <MenuLinks isOpen={isOpen} />
//     </NavBarContainer>
//   );
// };

// const CloseIcon = () => (
//   <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
//     <title>Close</title>
//     <path className="text-black dark:text-white"
//       d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
//     />
//   </svg>
// );

// const MenuIcon = () => (
//   <svg
//     width="24px"
//     viewBox="0 0 20 20"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <title>Menu</title>
//     <path className="text-black dark:text-white" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//   </svg>
// );

// const MenuToggle = ({ toggle, isOpen }) => {
//   return (
//     <Box display={{ base: "block", md: "none" }} onClick={toggle}>
//       {isOpen ? <CloseIcon /> : <MenuIcon />}
//     </Box>
//   );
// };

// const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
//   return (
//     <Link href={to}>
//       <Text display="block" {...rest}>
//         {children}
//       </Text>
//     </Link>
//   );
// };

// const MenuLinks = ({ isOpen }) => {

//   let NavbarSection = [
//     {
//       to: "#Home",
//       name: "Home",
//     },
//     {
//       to: "#About",
//       name: "About Me",
//     },
//     {
//       to: "#Skills",
//       name: "My SKills",
//     },
//     {
//       to: "#Works",
//       name: "My Works",
//     },
//     {
//       to: "#Contact",
//       name: "Contact",
//     },
//   ]

//   return (
//     <Box
//       display={{ base: isOpen ? "block" : "none", md: "block" }}
//       flexBasis={{ base: "100%", md: "auto" }}
//       style={{fontFamily: 'Futura Md'}}
//     >
//       <Stack
//         spacing={8}
//         align="center"
//         justify={["center", "space-between", "flex-end", "flex-end"]}
//         direction={["column", "row", "row", "row"]}
//         pt={[4, 4, 0, 0]}
//       >
//         {NavbarSection.map(({to, name, index}) => (
//           <Link
//             key={index}
//             href={to}
//           >
//             <Text className="text-black md:text-white hover:text-white md:hover:text-yellow-400 transition">
//               {name}
//             </Text>
//           </Link>
//         ))}
//       </Stack>
//     </Box>
//   );
// };

// const NavBarContainer = ({ children, ...props }) => {

//   let NavbarElement = useRef(null)

//   useEffect(() => {
//     gsap.from(NavbarElement, { opacity: 0, y: -90, })
//     gsap.to(NavbarElement, { opacity: 1, y: 0, ease: easeOut, duration: 1, stagger: 0.3, delay: 0.2 })
//   }, [])

//   return (
//       <Flex
//         ref={el => {NavbarElement = el}}
//         className="bg-opacity-70 backdrop-blur"
//         as="nav"
//         align="center"
//         justify="space-between"
//         wrap="wrap"
//         w="100%"
//         mb={8}
//         p={8}
//         zIndex={2}
//         pos='fixed'
//         bg={["primary.500", "primary.500", "transparent", "transparent"]}
//         color={["white", "white", "primary.700", "primary.700"]}
//         {...props}
//       >
//         {children}
//       </Flex>
//   );
// };

// export default NavBar;