
import { Parallax } from 'react-scroll-parallax'
import SectionHeading from '../utils/SectionHeading'
import { BsTools } from "react-icons/bs";
const WhyParticipate = () => {
  return (
    <div className='min-h-[100dvh] why__participate'>
      <SectionHeading Heading={'WHY PARTICIPATE ?'} />
      {/* Desktop Cards */}
      <div className='md:flex-row flex-col hidden lg:flex flex-wrap lg:gap-10 saturate-150 justify-center font-RedHatDisplay my-12 items-center w-full'>
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

      {/* Mobile Cards */}
      <div className='text-zinc-200 md:hidden mt-4 px-4 py-2 font-Figtree text-justify'>
        <div className='border-zinc-800 border-[1.4px] px-4 py-6 rounded-xl'>
          <p className=''>1. Showcase your talent and creativity 🚀. Impress industry professionals ✨ and peers with your data-driven solutions.</p>
          <p className=''>2. Become part of a vibrant community. Network with fellow 👨🏻‍💻 data enthusiasts, industry experts, and potential collaborators</p>
        </div>
        <hr className='my-2 border-none' />
        <div className='border-zinc-800 border-[1.4px] px-4 py-6 rounded-xl'>
          <p className=''>1. Gain hands-on experience 📊. Dive headfirst into real-world challenges and test your data science skills in collaborative environment.</p>
          <p className=''>2. Earn recognition and prizes. Top ideation and  hackathon finalists will be celebrated and rewarded 🎁 for their outstanding contributions.</p>
        </div>
      </div>

      <div className='flex items-center justify-center my-6 lg:my-0'>
        <h1 className='text-2xl lg:text-4xl xl:text-6xl font-Oxanium text-zinc-300 font-semibold' >Join the Data Revolution! 🌍</h1>
      </div>

      <div className='my-4 lg:my-10 xl:my-12 flex justify-center select-none font-Oxanium'>
        <ul className='text-zinc-400 flex flex-col list-none px-6 md:px-10 lg:text-xl'>
          <li className='border-[1.8px] border-l-0 border-rose-700  max-w-screen-lg py-6 px-4 text-right'>Actively participate! Sign up for the Ideathon, Hackathon, and Expert Sessions. Share your ideas and contribute to the collective brilliance.</li>
          <li className='border-l-[1.8px] border-rose-700 max-w-screen-lg py-6 px-4 text-left'>Get involved! Share your suggestions and help us craft an unforgettable experience.</li>
          <li className='border-[1.8px] border-l-0   border-rose-700 max-w-screen-lg py-6 px-4  text-right'>Remember, data science thrives on collaboration and innovation! Let's push the boundaries, explore the universe of possibilities, and shape the future together.</li>
        </ul>
      </div>
      <hr className='lg:my-10 border-none' />
      <footer className=' pt-8 bg-zinc-800 flex flex-col items-center justify-center w-full '>
        <h1 className='text-zinc-300 font-WorkSans font-semibold text-3xl'>Stay Connected !</h1>
        <hr className='my-3' />
        <ul className='grid md:grid-cols-2 gap-6 text-zinc-300 font-Oxanium'>
          <li>Contact: xyz (+91 0000000000) </li>
          <li>Contact: xyz (+91 0000000000) </li>
          <li>Contact: xyz (+91 0000000000) </li>
          <li>Contact: xyz (+91 0000000000) </li>
        </ul>
        <small className='py-4'><a href="" className='text-zinc-300 font-Inter font-semibold flex items-center gap-2'><BsTools /> Developed by Web Team : DATA SCIENCE CLUB</a></small>
      </footer>
    </div>
  )
}

export default WhyParticipate