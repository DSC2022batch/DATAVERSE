
import { motion, useScroll } from "framer-motion"



const Motion = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress)

    return (
        <div >
            <motion.div className=" w-full fixed h-1 saturate-200 bg-rose-900 top-12 z-[999999]" style={{ scaleX }} />
        </div>
    )
}

export default Motion