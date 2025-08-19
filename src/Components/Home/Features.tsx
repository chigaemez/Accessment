
import { motion } from 'framer-motion'
import { features, type Feature } from '../../Data/Data'

const Features = () => {
  return (
    <div className='flex flex-col  mt-[50px]  md:px-[90px] px-[10px]'>
      <h1 className='text-[16px] font-[700] font-popbold leading-[100%]'>
        Featured Category
      </h1>
      <div className='flex gap-[16px] w-full overflow-x-auto mt-[20px] no-scrollbar'>
        {features.map((feature: Feature, idx: number) => (
          <motion.div
            whileTap={{
              opacity: 0.8,
              scale: 0.95,
              transition: {
                ease: 'easeOut',
                duration: 0.3
              }
            }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            key={idx}
            className='flex flex-col items-center justify-center flex-shrink-0 w-[84px] h-[72px] md:w-[140px] md:h-[130px] rounded-[14px] bg-white'
          >
            <img
              src={feature.img}
              alt={feature.title}
              className='w-[32px] h-[32px] md:w-[60px]  md:h-[60px] mb-2'
            />
            <h2 className='text-[10px] font-popmedium font-[500] text-[#000000] leading-[100%] mt-2'>
              {feature.title}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Features
