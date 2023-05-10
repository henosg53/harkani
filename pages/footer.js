import Link from "next/link";


export default function Footer(){
    return(
        <div className="w-full flex flex-col items-center px-10  py-10 my-5">
      <div className="flex flex-wrap gap-20">

         <h3 className=" my-5  font-exotic  text-center text-4xl ">
                 H a r k a n i <br/> I n t e r i o r s</h3>
        
        <div className="flex flex-col grow flex-1 gap-4">
          <p className="tracking-[5px]">PAGES</p>
          <div className="flex flex-col gap-0">
            <Link href="/"><p className="font-mono">Home</p></Link>
            <Link href="/projects"><p className="font-mono">Projects</p></Link>
            <Link href="#about_us"><p className="font-mono">About us</p></Link>
          </div>
        </div>
        
        <div className="flex-1 flex w-full px-10 justify-center flex-col gap-4">
          <p className="tracking-[2px] font-dmserif">Find us</p>

          {/* Social Media Icons */}
          
          <div className="flex gap-3">
            <Link href="/" className="icon">
              <img alt='fb' src='/facebook.png' />
            </Link>
            <Link href="/" className="icon">
              <img alt='t' src='/twitter.png' />
            </Link>
            <Link href="/" className="icon">
              <img alt='I' src='instagram.png' />
            </Link>
          </div>
          <span>
              <span className="flex gap-5 ">
                <span className="icon2">
                 <img className="" src='/emailsvg.svg' alt='saf'/>
                </span>
                <p className="">
                harkaniinteriors@gmail.com</p>
              </span>
              <span className="flex gap-5 ">
                <span className="icon2">
                 <img className="" src='/phonesvg.svg' alt='saf'/>
                </span>
                <span>
                <p className="">
                0951-108-127</p>
                <p className="">
                0966-501-231</p>
                </span>
                
              </span>
           
            <span className="flex gap-5">
            <dd className="flex items-center">
                    <svg width="2" height="2" aria-hidden="true" fill="currentColor" className=" text-slate-300">
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                      <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                      <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                    </svg>
                   
              </dd>
                 <span className="flex flex-col">
                 <p>Addis Ababa, Ethiopia , Genzebo Square</p>
                 <p>  Genzebo Building 7th Floor </p>
                 </span> 
              
            </span>
            
            </span>

        </div>
      </div>

      <hr className="sw mt-20" />
      
      <div className="flex sw py-10">
        <div className="flex-1 font-mono text-center">
            Copyright © 2022 Harkani Interiors. All Rights Reserved.
        </div>
        
      </div>
    </div>
    
    )
}