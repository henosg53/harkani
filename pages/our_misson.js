export default function OurMission(){
    return(
        <div id="our_mission" className="">
            <div className=' w-full min-h-[500px] px-2 py-5 gap-5 lg:gap-0  flex  flex-wrap mt-24'>
                <div className=" w-full md:w-[50%] lg:w-[50%] h-full flex flex-col items-center">
                    <h2 className='text-center font-bold text-2xl font-ArchivoBlack  pb-5'>Our Mission</h2>
                    <span className=" " >
                        <img className="rounded-lg " src="/mission.PNG" alt=""/>
                    </span>

                </div>
                <div className="mx-5 w-full md:w-[40%] lg:w-[40%] h-full">
                    <p className="lg:mt-24 md:mt-24">Established in Addis Ababa, By Architect Kena Adam and Architect Wondimeneh Hailu.
                    Our mission is to create beautiful and functional spaces that reflect our clients'
                    personal style and enhance their quality of life. We strive to provide exceptional
                    customer service and attention to detail, while utilizing sustainable materials and
                    innovative design solutions. 
                    </p>
                    <p className="text-gray-500">Our 3D rendering professionals will bring your ideas to life with life-like graphics,
                    allowing you to better envisage the classical or modern fit-outs of your choosing prior
                    to project implementation.
                    </p>
                    <p>
                    Our ultimate goal is to exceed our clients' expectations and create spaces that they 
                    will love for years to come.
                    </p>
                </div>
            </div> 
            
        </div>
    )
}