
import { Parallax } from 'react-scroll-parallax'
import SectionHeading from '../utils/SectionHeading'

const WhyParticipate = () => {
  return (
    <div className='min-h-[100svh] why__participate'>
      <SectionHeading Heading={'WHY PARTICIPATE ?'} />
      <hr className='my-12 border-none' />
      <div className='md:flex-row flex-col hidden lg:flex flex-wrap lg:gap-10 saturate-150 justify-center font-RedHatDisplay  items-center w-full'>
        <Parallax translateX={[50, -100]}>
          <div className='border-2 border-zinc-400 text-zinc-300 text-xl hover:text-black duration-200 lg:w-80 h-96 cursor-pointer participation__infocard'>
            <p className='z-10 p-5'>1. Showcase your talent and creativity. Impress industry professionals and peers with your data-driven solutions.</p>
            <p className='z-10 p-5'>2. Become part of a vibrant community. Network with fellow data enthusiasts, industry experts, and potential collaborators</p>
          </div>
        </Parallax>
        <Parallax translateX={[-50, 100]}>
          <div className='border-2 border-zinc-400 text-zinc-300 text-xl hover:text-black duration-200 lg:w-80 h-96 cursor-pointer participation__infocard'>
            <p className='z-10 p-5'>1. Gain hands-on experience. Dive headfirst into real-world challenges and test your data science skills in collaborative environment.</p>
            <p className='z-10 p-5'>2. Earn recognition and prizes. Top ideation and hackathon finalists will be celebrated and rewarded for their outstanding contributions.</p>
          </div>
        </Parallax>
      </div>
      <div>
        <h1 >Join the Data Revolution!</h1>
      </div>
    </div>
  )
}

export default WhyParticipate