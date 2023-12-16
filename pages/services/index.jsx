
//components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';     

//motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Services = () => {
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className="flex flex-col xl:flex-row gap-x-8">
        {/* text */}
        <div className='text-center flex xl:w-[30vm] flex-col lg:text-left mb-4 xl:mb-0'>
          <h2 className="h2 xl:mt-8">
          Nossos serviços <span className='text-accent'>.</span> 
          </h2>
          <p className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
          Sites são a porta de entrada da sua empresa no mundo digital, já pensou fazer
          essa porta de entrada aumentar sua receita?
          Pensando nisso apostamos em designs diferenciados, sites responsivos e chamadas para a ação (compra)
          do seu público alvo.
          </p>
        </div>
        {/* slider */}
        <ServiceSlider />
      </div>
    </div>
    <Bulb />
  </div>
  )
};

export default Services;
