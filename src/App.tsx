import Landing from "./components/Landing"
import TimelineSection from "./components/TimelineSection"
import WhyParticipate from "./components/WhyParticipate"
import './Locomotive.css'
import LocomotiveScroll from 'locomotive-scroll';

new LocomotiveScroll();

function App() {
  return (
    <>
      <div data-scroll-container className="bg-[#090909]">
        <Landing data-scroll />
        <TimelineSection data-scroll />
        <WhyParticipate data-scroll />
      </div>
    </>
  )
}

export default App
// 