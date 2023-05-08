import {interiorDesigns,decorations,landscapes} from '../data/what_we_do'
export default function WhatWeDo(){
   

    return(
        <div id="what_we_do" className="bg-slate-500 w-full ">
          <div className=' text-white w-full h-fit min-h-[500px] mt-24'>
            <h2  className='text-center font-ArchivoBlack font-bold text-2xl  py-10 '>What we do</h2>
            <h3 className='text-center'>We design as big as a building, and as small as a wall...</h3>
            <div className="flex flex-1 flex-wrap gap-5 justify-center md:justify-center mx-5 lg:justify-between my-5">
              <div className=" list-sty1 px-5 w-full  lg:w-[23%] ">
                <h3 className='text-center font-bold font-mono py-5 underline'>Interior Design</h3>
                  {
                    interiorDesigns.map((interiorDesign)=>(
                      <li key={interiorDesign.id}>{interiorDesign.name}</li>
                    ))
                  }
                  

                
              </div>
              <div className=" list-sty1 px-5 w-full lg:w-[23%]">
                <h3 className='text-center font-bold font-mono py-5  underline '>Decoration</h3>
                  {
                    decorations.map((decoration)=>(
                      <li key={decoration.id}>{decoration.name}</li>
                    ))
                  }

 
              </div>
              <div className=" list-sty1 px-5 w-full lg:w-[23%]">
                <h3 className='text-center font-bold font-mono py-5 underline'>Landscape</h3>
                {
                  landscapes.map((landscape)=>(
                    <li key={landscape.id}>{landscape.name}</li>
                  ))
                }
              </div>
              <div className=" list-sty1 px-5 w-full lg:w-[23%]">
                <h3 className='text-center font-bold font-mono py-5 underline'>Lignting</h3>
                <p>We can bring in the life to your space by complete lighting designs.</p>
              </div>
            </div>
        
          </div>
        </div>
    )
}