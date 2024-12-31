export default function resume(){
    const config={
        email:'mohamedfawmeen76@gmail.com',
        phone:'+91 8489350346'
    }
    return <section id='contact' className='flex flex-col bg-primary px-5 py-32'>
           <div className='flex flex-col items-center text-white'>
           <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
           <p className='pb-2'>If you want to discuss more in detail,please contact me</p>  
           <p><span className='font-bold'>Email: </span>{config.email}</p>
           <p><span className='font-bold'>Phone: </span>{config.phone}</p>

           </div>

        </section>
}