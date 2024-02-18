
import { Parallax } from 'react-scroll-parallax';
import Marquee from "react-fast-marquee";

const SectionHeading: React.FC<{Heading: string}> = ({Heading }) => {
    return (
        <div>
            <div className='select-none'>
                <Marquee className='font-Audiowide overflow-hidden' autoFill={true} pauseOnHover play={true}>
                    <Parallax translateX={[0, -60]} className='w-full'>
                        <h1 className='uppercase text-rose-900 saturate-200 text-3xl md:text-5xl lg:text-6xl px-4'>{Heading}</h1>
                    </Parallax>
                    <Parallax translateX={[0, -60]} className='w-full'>
                        <h1 className='uppercase text-border text-[#090909] text-3xl md:text-5xl lg:text-6xl px-4'>{Heading}</h1>
                    </Parallax>
                </Marquee>
            </div>
        </div>
    )
}

export default SectionHeading