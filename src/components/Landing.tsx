import NavBar from "./NavBar"
import { TypeAnimation } from 'react-type-animation';


const Landing = () => {
  return (
    <div className="bg-black ">
      <div>
        <NavBar />
      </div>
      <div className="__hero flex items-center justify-between min-h-[100lvh] w-full overflow-hidden">
        <div className="flex flex-col w-full h-full md:py-36 lg:py-0 justify-center items-center gap-14">
          <TypeAnimation className="text-white text-3xl break-before-all lg:text-5xl font-Orbitron font-bold uppercase " sequence={['DATAVERSE', 1000, 'BY', 500, 'Data Science Club', 1000]} wrapper="h1" speed={1} repeat={Infinity}></TypeAnimation>
          <p className="text-white font-Oxanium px-6 lg:px-0 text-sm lg:text-lg max-w-screen-lg text-center leading-relaxed">Welcome, Data enthusiasts! Prepare to embark on a transformative journey of ideation, innovation, and collaboration at the Data Science Club's DataVerse Conclave! Over three days, we'll fuse minds, ignite creativity, and shape the future of data-driven solutions. Welcome to DataVerse Conclave, where minds converge to revolutionize the landscape of data-driven solutions. Join us on a transformative journey as we fuse ideas, ignite innovation, and shape the future of data science.</p>
          <button className="overflow-hidden hover:scale-95 duration-200 hover:text-rose-900 font-bold bg-rose-900 explore__button saturate-150 px-4 py-2 text-white font-DECTM text-2xl">Explore the Event</button>
        </div>
      </div>

    </div>
  )
}

export default Landing