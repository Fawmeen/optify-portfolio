import AboutImage from '../assets/AboutImg.png';
export default function About(){
    const config={
        line1:'Hi, my name is Mohamed Fawmeen. I am a second-year engineering student with a keen interest in MERN stack development and Java programming.',
        line2:'In addition to my coursework, I am actively enhancing my skills in full-stack development and advanced Java topics through various projects and online learning platforms.'
    }
    return <section id='about' className='flex flex-col md:flex-row bg-secondary px-5'>
           <div className='md:w-1/2'>
            <img src={AboutImage}/>
           </div>
           <div className='md:w-1/2 flex justify-center text-white'>
           <div className='flex flex-col justify-center'>
           <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
           <p className='pb-2'>{config.line1}</p>
           <p className=''>{config.line2}</p>
           </div>
           </div>
        </section>
}