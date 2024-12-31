import HeroImage from '../assets/hero.png';
import { CiInstagram,CiLinkedin} from "react-icons/ci";
import { SiGmail } from "react-icons/si";
export default function Hero(){
    const config={
      subtitle: 'Im a Front-end Developer',
      social:'mohamedfawmeenm.it2023@citchennai.net',
      instagram:'#',
      LinkedIn:'https://www.linkedin.com/in/mohamed-fawmeen-481a77290/'
}



    return <section id='hero' className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
    <div className='md:w-1/2 flex flex-col'>
       <h1 className=' text-white text-4xl font-hero-font'>Hi,<br/> Im Mohamed Fawmeen
       <p className='text-2xl'>{config.subtitle}</p>
       </h1>
     <div className='flex py-5'>
        <a href={config.social} className='pr-5 hover:text-white'><SiGmail size={30}/></a>    
        <a href={config.instagram} className='pr-5  hover:text-white'><CiInstagram size={30} /></a>
        <a href={config.LinkedIn} className=' hover:text-white'><CiLinkedin size={30}/></a>    
     </div>
    </div>
       <img className='md:w-1/3' src={HeroImage}/>
    </section>
}
