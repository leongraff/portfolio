//next image
import Image from "next/image";


//components
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

//framer motion
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto mt-[-20px]'>
          {/* title */}
          <motion.h1 className="h1"
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'>Transformando ideias <br /> Em {' '}
            <span className="text-accent"> Realidade Digital </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p className='flex justify-start max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 '
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'>
            Trazer para o digital as ideias que moldam o nosso futuro é também escolher
            criar a realidade que queremos através da tecnologia.
          </motion.p>
          {/*btn*/}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div className="hidden xl:flex justify-start"
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'>
            <ProjectsBtn />
          </motion.div>
        </div>
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* background image */}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat h-full 
          w-full absolute mix-blend-color-dodge translate-z-0">
          </div>
          {/* particles */}
          <ParticlesContainer />
          {/* avatar img */}
          <motion.div className='w-full h-full max-w-[537px] max-h-[478px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1, ease: 'easeInOut' }}>
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div >
  );
};

export default Home;
