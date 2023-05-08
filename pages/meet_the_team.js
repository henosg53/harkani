import Image from "next/image";
import Kena from '../public/team/kena.PNG'
import Cap from '../public/team/cap.PNG'
import Wend from '../public/team/wend.PNG'
import Elen from '../public/team/elen.PNG'

export default function MeetTheTeam(){
    return(
        <div id="meet_the_team" className="bg-slate-500 w-full h-fit ">
             <div className=' text-white w-full px-2 min-h-[500px] mt-24'>
        <h2 className='text-center font-ArchivoBlack font-bold text-2xl pb-10 '>Meet the team</h2>
        <div className=" flex flex-auto flex-wrap gap-5 justify-between my-2 ">
            <div className=" w-full flex justify-between gap-5 md:flex-col lg:flex-col lg:w-[23%] mb-5">
            
                <Image className="rounded-full h-24 w-24 lg:rounded-none md:h-full md:w-full lg:h-fit lg:w-full"
                    src={Kena}
                    alt="Kena Adamu"

                    />
                 <div className="bg-slate-600 w-full h-full px-5 flex flex-col justify-around">
                    <h3 className="text-center font-bold font-mono">Kena Adamu</h3>
                
                    <span>
                    <p className="font-mono">Founder</p>
                    <small className="font-mono">Architect and Interior Design</small>
                    </span>

                </div>
                    
            </div>
            <div className=" w-full flex justify-between gap-5 md:flex-col lg:flex-col lg:w-[23%] mb-5">
            
                <Image className="rounded-full h-24 w-24 lg:rounded-none md:h-full md:w-full lg:h-fit lg:w-full"
                        src={Wend}
                        alt="Wendimeneh Hailu"

                        />
                <div className="bg-slate-600 w-full h-full px-5 flex flex-col justify-around">
                    <h3 className="text-center font-bold font-mono">Wendimeneh Hailu</h3>
                   <span>
                   <p className="font-mono">CO-Founder</p>
                    <small className="font-mono">Architect and Interior Design</small>
                   </span>
                </div>
               
            </div>
            <div className=" w-full flex justify-between gap-5 md:flex-col lg:flex-col lg:w-[23%] mb-5">
            
                <Image className="rounded-full h-24 w-24 lg:rounded-none md:h-full md:w-full lg:h-fit lg:w-full"
                        src={Cap}
                        alt="Capital Habtamu"

                        />
                <div className="bg-slate-600 w-full h-full px-5 flex flex-col justify-around">
                    <h3 className="text-center font-bold font-mono">Capital Habtamu</h3>

                   <span>
                     {/* <p>Founder</p> */}
                     <small className="font-mono">Civil Engineer</small>
                   </span>
                </div>
            </div>
            <div className=" w-full flex justify-between gap-5 md:flex-col lg:flex-col lg:w-[23%] mb-5">
            
                <Image className="rounded-full h-24 w-24 lg:rounded-sm md:h-full md:w-full lg:h-fit lg:w-full"
                        src={Elen}
                        alt="Eleni Astro"

                        />
                <div className=" bg-slate-600 w-full h-full  flex flex-col justify-around px-5">
                <h3 className="text-center font-bold font-mono">Eleni Astro</h3>
                <span>
                     {/* <p>Founder</p> */}
                <small className="font-mono">Business Manager</small>
                </span>
                </div>
            </div>
        </div>
      </div>
                
        </div>
        
    )
}