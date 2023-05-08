import Link from 'next/link'
import {projects} from '../data/projects'
import Image from 'next/image'
export default function ProjectPortfolio(){
  
    return(
       <div id="project_portfolio" className="bg-gray-200 w-full">
           <div className=' w-full min-h-[500px] mt-24'>
        <p  className='text-center font-ArchivoBlack  font-bold text-2xl py-10 '>Project Portfolio</p>
        <div className=" flex flex-1 flex-wrap gap-5 justify-center md:justify-center lg:justify-between my-5 px-5 w-full h-fit">
            {
              projects.slice(0,4).map((project)=>(
                <div  key={project.id} className="bg-gray-300 p-5  my-5  w-[400px] rounded-lg min-h-[400px]">
                  <h3 className='font-exotic  text-2xl '>{project.name}</h3>
                  <Image className='pt-10' src={project.img}
                    alt={project.name}
                    width="400"
                    height='300'
                    loading='lazy'
                  />
                  <p>{project.description}</p>
                  <small>Location: {project.location}</small>
                  <hr className='border-black py-1'/>
                  <Link href={`projects/${project.id}` }><button className='btn-sty4  '>View Details</button></Link>
                </div>
              ))
            }
            
        </div>
        <Link className='w-full flex mb-10 justify-center' href="/projects">
          <button className='btn-sty3'>View More</button>
          </Link>
        
      </div>
       </div>

    )
}