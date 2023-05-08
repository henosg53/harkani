import {projects} from '../../data/projects'
import Navbar from '../../components/navbar'
import Image from 'next/image'
import Link from 'next/link'
function Projects(){
    return(
        <>
        <Navbar/>
        <div id="project_portfolio" className="w-full">
           <div className='mt-24 w-full min-h-[500px]'>
        <p  className='text-center font-dmsans font-bold text-3xl py-10 '>Our Projects</p>
        <div className=" flex flex-1 flex-wrap gap-5 justify-center md:justify-center lg:justify-between my-5 px-5 w-full h-fit">
            {
              projects.map((project)=>(
                
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
      </div>
       </div>

</>
    )
}

export default Projects