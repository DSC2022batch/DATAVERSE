
import { motion, useScroll } from "framer-motion"



const Motion = () => {
    const { scrollYProgress } = useScroll();
    return (
        <div >
            <motion.div className=" max-w-screen-2xl w-full fixed h-1 saturate-200 bg-rose-900 top-12 z-[999999]" style={{ scaleX: scrollYProgress }} />
        </div>
    )
}

export default Motion