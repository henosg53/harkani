import {useRouter} from 'next/router'
import {projects} from '../../data/projects'

import Image from 'next/image'
function Project({project}){
    const router = useRouter()
    const closeModal = () =>{
        router.back()
    }
    if(router.isFallback){
        return <h1>Loading</h1>
    }
    return(
       
     
        <div className='bg-black text-white absolute top-[50%] flex flex-wrap justify-between    left-[50%] w-full h-fit -translate-y-2/4 -translate-x-2/4    p-[20px]'>
            <button className='absolute right-10 text-4xl my-2 hover:scale-110 ml-5 font-mono ' onClick={closeModal}>X</button>
            <div className='flex flex-col items-center   gap-10 '>
            <div className='px-5 mt-24 w-full flex flex-col items-center'>
                <h2 className='font-bold text-2xl text-center  font-mono'> {project.name} </h2>
                </div>
            
            <Image className='' src={project.img}
                    alt={project.name}
                    width="400"
                    height='300'
                    loading='lazy'
                    
                  />
                 
            <div className='px-5 w-full '>
                <p className='font-dmserif'>{project.description}</p>
            </div>
            <div className='px-5 w-full justify-center  '>
                <p className='font-dmserif'>Location: {project.location}</p>
            </div>

                
            </div>   
            <div className='hidden lg:visible lg:flex flex-col items-center w-[50%]  gap-10 '>
            <Image className='mt-24' src={project.img2}
                    alt={project.name}
                    width="500"
                    height='500'
                    loading='lazy'
                    
                  /></div>        
            
           
                       
            
        </div>


       
    )
}

export default Project

//static page generation
export async function getStaticPaths(){
    return{ 
        paths:[
            {params: {projectId: '1'}},
            {params: {projectId: '2'}},
            {params: {projectId: '3'}},
            {params: {projectId: '4'}},
            {params: {projectId: '5'}},
            {params: {projectId: '6'}},
            {params: {projectId: '7'}},

        ],
        fallback: false,
    }
}

export async function getStaticProps(context){
    const {params} = context
    const {projectId} = params

    const project = projects.find((project)=>project.id === parseInt(projectId))
    return{
        props:{
            project,
        }
    }
}