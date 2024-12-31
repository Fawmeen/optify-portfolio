import ResumeImage from '../assets/res.png';
import CV from '../component/CV.pdf'
export default function resume(){
   
    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
           <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImage}/>
           </div>
           <div className='md:w-1/2 flex justify-center text-white'>
           <div className='flex flex-col justify-center'>
           <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
           <p className='pb-2'>You Can View my resume      <a className='btn' href={CV} download><button className='hover'>Resume</button></a></p>  
           </div>
           </div>

        </section>
}