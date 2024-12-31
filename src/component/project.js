import webimg from '../assets/projects.png';
import webimg1 from '../assets/food-ecommerce.jpg';
import webimg2 from '../assets/project1.webp';

export default function projects(){
  const config={
    projects:[
      {
        image:webimg,
        description:'Login and Registration build with Html&CSS',
        link:'#'
      },
      {
        image:webimg1,
        description:'E-commerce Website build with HTML,CSS&JS',
        link:'#'
      },
      {
        image:webimg2,
        description:'RESTAURANT WEBSITE build with HTML&CSS',
        link:'#'
      }
    ]
  }
return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary">
<div className='w-full'>
  <div className='flex flex-col px-10 py-5'>  
      <h1 className='text-4xl text-white border-b-4 border-secondary mb-5 w-[145px] font-bold'>Projects</h1>
      <p>These are my projectS, I have built this with HTML,CSS & JAVASCRIPT.There are also some upcoming project that will add soon.</p>
  </div>
</div>
    <div className="w-full">
    <div className='flex flex-col md:flex-row px-10 gap-5'>
      {config.projects.map((pro)=>(
        <a href={pro.link}>
     <div className='relative'>
      <img className='h-[200px] w-[500px]' src={pro.image}/>
      <div className='project-desc'>
        <p className='text-center px-5 py-5'>{pro.description}</p>
      </div>
    </div>
    </a>
      ))}
      </div>
    </div>
</section>
}