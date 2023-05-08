export default function OurVision(){
    return(
      <div id="our_vision" className="bg-ver">
      <div  className=' flex flex-col items-center gap-2 w-full md:w-[50%] lg:w-[50%] min-h-[500px]  px-5 text-white mt-24'>
          <h2  className='text-center font-ArchivoBlack font-bold text-xl py-10 '>Our Vision</h2>
          <h3 className="font-semibold ">We transform your space into  your dream home</h3>
          <div className="my-5 mx-5 flex flex-col">
              <p>
                Our goal is to serve everyone who wishes to decorate their home. We propose the best 
                designs/interior decor/styling within each client's budget.
              </p>
              <p>
                We design all sizes of spaces, from an entire building to a small entrance or just a wall.
              </p>
          </div>
      </div>
      <div className='bg-slate-300 w-full min-h-[500px] px-5'>
        <h2 className='text-center font-ArchivoBlack font-bold text-xl py-10 '>What makes us different</h2>
        <h3 className="text-lg font-mono font-bold">Our Design Strategy</h3>
        <p>
          Some factors that make us stand out include unique design styles, exceptional customer service,
          use of high-quality materials, attention to detail, and a strong reputation in the industry.
        </p>
        <p>
          Our design and finishing strategy is crucial in creating a functional and aesthetically pleasing
          space that meets the needs of the occupants. It involves selecting appropriate materials, colors,
          textures, and furniture to achieve a cohesive and harmonious design.
        </p>
       <div className="bg-justawall bg-contain  lg:bg-cover bg-black my-10 h-[200px] lg:h-[400px] w-full  rounded-lg ">
         </div>
       <br/>
      </div>
      </div>
    )
}