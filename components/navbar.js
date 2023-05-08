import React, { useEffect, useState } from "react";
import mark from '../public/vercel.svg'
import Image from "next/image";
import Link from 'next/link'

function Navbar() {

  const [menuDisplay,setMenuDisplay] = useState("h-0");
  const [open,setOpen] = useState("");

  const [show, setShow] = useState(true)
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(()=>{
   
   window.addEventListener('scroll',handleScroll)
   return()=>{
       window.removeEventListener('scroll',handleScroll)
       
   }
  })
  function handleScroll(e){
    e.preventDefault()
    setScrollPos(-556)
    // setScrollPos(-71)
    setShow(document.body.getBoundingClientRect().top > scrollPos)
    }

    // Menu Opener
  function handleMenu() {
    setOpen(open === "open" ? "" : "open");
    setMenuDisplay(open === "open" ? "max-h-0" : "max-h-[100%]");
  }

  
 
  // Menu Links
  const Links = [
    <Link key='1' href="./#our_mission" onClick={handleMenu} className="hover:scale-95">Our Mission</Link> ,
    <Link key='2' href="./#our_vision" onClick={handleMenu} className="hover:scale-95">Our Vision</Link> ,
    <Link key="3" href="./#what_we_do" onClick={handleMenu} className="hover:scale-95">What We Do</Link>,
    <Link key='4' href="./#our_process" onClick={handleMenu} className="hover:scale-95">Our Process</Link>,
    <Link key='5' href="./#meet_the_team" onClick={handleMenu} className="hover:scale-95">Meet The Team</Link>,
    <Link key='6' href="./#project_portfolio" onClick={handleMenu} className="hover:scale-95">Project Portfolio</Link>,
    <Link key='7' href="./#about_us" onClick={handleMenu} className="hover:scale-95">About us</Link>,

    
  ]  

  


  return (
    <div className={show ? 'active' : 'dormant'}>
    <div className="fixed top-0 left-0 flex  flex-col justify-items-stretch bg-[#3d3568] text-white w-full ">
     
      {/* Nav Header */}
      <div className=" flex justify-self-center justify-around px-5 h-20 lg:h-24  w-full  ">
      
        <Link href="/" className=" absolute top-inherit left-0 w-[70%] md:w-[35%] lg:w-[35%]  h-20 lg:h-28 ">
          {/* logo span */}
          <span  className="absolute  top-0 left-0 h-20 lg:h-28 w-[30%] " >
              {/* logo */}
              <Image className="h-full lg:h-full w-full pl-3 "
                src={mark}
                alt="logo"
                
              /> 
                
            </span>
            <span className=" absolute top-0 left-[30%] w-[70%] lg:w-[60%]  h-full lg:h-24 ">
                <h3 className="mx-5 my-5 text-xs  text-center md:text-lg lg:text-xl    dark:text-white">
                 H a r k a n i <br/> I n t e r i o r s</h3>
            </span>
            
          </Link>
            
        <div className="lg:hidden md:hidden absolute top-inherit right-5  mt-5 mr-2 text-white  ">
          <label className={"menu-btn "+open} onClick={handleMenu}><span></span></label>
        </div>
        <div  className="hidden    absolute top-0 left-[35%] md:left-[37%] lg:left-[35%] h-full w-[60%] md:text-sm  lg:flex md:flex pt-10 text-md gap-5 justify-center ">
          {[...Links]}
        </div>
      </div>

      {/* Nav Header For Mobile View */}
      <div className={"relative shadow-xl shadow-black/30  text-white  w-full  flex justify-center overflow-hidden transition-all lg:hidden "+menuDisplay}>
        <div className="sw pt-14 flex  justify-end text-white z-10 dark:text-white">
          <div  className="w-full flex flex-col  pb-5 gap-6 text-right ">
            {[...Links]}
            
          </div>
        </div>
      </div>
   
    </div>
    </div>


  )
}

export default Navbar;