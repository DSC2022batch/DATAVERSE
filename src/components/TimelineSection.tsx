import SectionHeading from "../utils/SectionHeading"
import card from "../assets/CARD1.jpg"
import card2 from "../assets/CARD2.jpg"
import card3 from "../assets/CARD3.jpg"
import TimelineCard from "../utils/TimelineCard"

const Timeline = () => {
  const timelineData = [
    {
      title: "day 1 : insight ignition : ideathon",
      image: card,
      data: "Challenge: Unleash your problem-solving prowess! Pitch novel data-driven solutions addressing real-world challenges. Think healthcare, environment, social good, and beyond! Format: Collaborate in teams, brainstorm, and present your groundbreaking ideas. Top contenders will advance to the Hackathon."
    },
    {
      title: "day 2 : action acceleration : hackathon",
      image: card2,
      data: "Calling all coders! Get ready to prototype solutions for the selected problem statements. Dive deep, utilize diverse tools, and bring your innovative vision to life.Open to all participants: Whether you were an Ideathon champion or a fresh face, unleash your coding skills and collaborate to build working prototypes."
    },
    {
      title: "day 3 : industry integration : expert sessions",
      image: card3,
      data: "Connect with the data stars! Engage with industry experts, data leaders, and successful startups. Gain valuable insights, career guidance, and practical knowledge.Explore: Participate in panel discussions, interactive workshops, and networking opportunities. Bridge the gap between academia and industry, and chart your data-driven career path."
    }
  ]
  return (
    <div className=' bg-[#090909]'>
      <SectionHeading Heading={"Timeline"} />
      {timelineData.map((timelineData, index) => (<TimelineCard key={index} Data={timelineData.data} Image={timelineData.image} Title={timelineData.title} />))}
    </div>
  )
}

export default Timeline