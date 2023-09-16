import Image from "next/image";
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Avatar from "./Avatar";

const Circles = () => {
  return <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2
   mix-blend-color-dodge animate-pulse duration-75 z-10">
    <Image src={'/circles.png'}
      width={260}
      height={200}
      className="w-full h-full"
      alt='' />
    <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex absolute bottom-0 -left-[370px]'>
      <Avatar />
    </motion.div>
  </div>;
};

export default Circles;
