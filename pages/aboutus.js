export default function AboutUs(){
    return(
       <div id="about_us" className="w-full h-fit">
         <div className="w-full   min-h-[650px] ">
           
       
           <div className="bg-secondary bg-cover pt-24 lg:hidden md:hidden justify-self-center h-fit lg:h-[700px]  w-full">
             <span>
             <span className='font-semibold  flex flex-col py-24  px-10   w-[100%]  '>
             <h2 className=" text-2xl py-5">We are Haraki, Interior design and finishing company!</h2>
             <p className=' text-white  rounded-md p-3  '>
                 We specialize in creating beautiful and functional spaces that reflect our clients'
                 unique style and needs. Our team of experianced designers and craftsmen work together
                 to bring our clients' visions to life. We pride ourselves on our attention
                 to detail and commitment to customer satisfaction. Most importantly we respect our 
                 clients' budget and established timeline.
                </p>
                <p className="text-white p-3  px-5 my-5">Let us help you transform your space into your dream home.</p>
           </span>
             </span>
           </div>
           <div className=" bg-slate-700 hidden pt-24 px-10 py-10 sm:flex h-[600px] md:h-fit w-full">
             <span className='bg-introDsk bg-cover  font-bold rounded-lg flex flex-col items-center gap-32 pt-32 px-10  w-[50%] '>
             </span>
             <span className='  font-bold  flex flex-col items-center gap-10  px-10  w-[70%] '>
             <h2 className=" text-2xl text-white font-ArchivoBlack py-10 text-center">We are Haraki, Interior design and finishing company!</h2>
             <p className='  text-white px-5 rounded-lg p-10   text-center'>
                 We specialize in creating beautiful and functional spaces that reflect our clients'
                 unique style and needs. Our team of experianced designers and craftsmen work together
                 to bring our clients' visions to life. We pride ourselves on our attention
                 to detail and commitment to customer satisfaction. Most importantly we respect our 
                 clients' budget and established timeline.
                </p>
                <p className="text-white font-dmsans  rounded-lg p-3 w-fit  px-5 my-5">Let us help you transform your space into your dream home !</p>
           </span>
             
           </div>
          
         
          
         
           
   
           
         
         </div> 
       </div>
    )
}