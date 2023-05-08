import Link from "next/link";

export default function Intro(){
    return(
      <div className="w-full  min-h-[650px] ">
           
       
        <div className="bg-introMob bg-cover lg:hidden md:hidden justify-self-center h-[700px]  w-full">
          <span>
          <span className=' font-semibold  flex flex-col py-40  px-10   w-[100%] h-inherit'>
          <h2 className=" text-2xl py-5">Welcome to Haraki, Interior design and finishing company!</h2>
          
             <Link href='#about_us' className=" p-3  my-18">
              <button className="btn-sty4">About us</button> 
            </Link>
        </span>
          </span>
        </div>
        <div className="bg-introDsk bg-cover hidden sm:flex h-[800px] w-full">
          <span className="flex w-full jusitfy-center ">
          <span className='  flex flex-col items-center gap-24 py-32 px-32  w-full '>
          <h2 className="text-white font-semibold font-dmsans text-2xl  text-center">Welcome to Haraki,<br/> Interior design and finishing company</h2>
          
          <Link href='#about_us' className=" ">
              <button className="btn-sty4">More</button> 
            </Link>
        </span>
          </span>
        </div>
       
      
       
      
        

        
      
      </div> 
    )
}