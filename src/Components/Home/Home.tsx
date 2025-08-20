import { useEffect, useState } from 'react'
import { cards } from '../../Data/Data'
import { motion } from 'framer-motion'
import { usePopupStore } from '../../Stores/PopupStore'
import type { Card } from '../../Data/Type'

const Home = () => {
  const [current, setCurrent] = useState<number>(0)
  const { openPopup } = usePopupStore();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % cards.length)
    }, 4000) // auto change every 4s
    return () => clearInterval(interval)
  }, [])
  return (
    <div onClick={openPopup} className='flex flex-col items-center mt-[150px]  md:px-[90px] px-[10px]'>
      <div className='relative w-full  overflow-hidden rounded-[14px]'>
        <div
          className='flex transition-transform duration-700 ease-in-out rounded-[14px]'
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {cards.map((card: Card, idx: number) => (
            <motion.div
              whileTap={{
                opacity: 0,
                scale: 0.8,
                transition: {
                  ease: 'easeOut',
                  duration: 0.3
                }
              }}
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              key={idx}
              className='flex-shrink-0 w-full h-[208px] flex flex-col items-center   rounded-[14px] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
            >
              <div className='flex w-full  h-[209px] items-center justify-between rounded-[14px] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                {/* Left side */}
                <div className='relative w-[45%] h-full'>
                  <div
                    className='flex items-center justify-center h-full bg-[#ff7001] rounded-bl-[14px] rounded-tl-[14px]'
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)'
                    }}
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className='w-[140px] h-[140px] rotate-[25deg] '
                    />
                    <img
                      src={card.img}
                      alt={card.title}
                      className='w-[140px] ml-[-160px] mt-[-50px] h-[140px] rotate-[25deg] '
                    />
                  </div>
                </div>

                <div className='flex flex-col justify-center text-left w-[55%] h-full px-2'>
                  <h1 className='text-[19px] font-popbold text-[#2b2a2a]'>
                    {card.title}
                  </h1>
                  <p className='text-[14px] font-popsemibold text-[#6d6d6d]'>
                    {card.desc}
                  </p>
                </div>
              </div>
              <div className='flex w-[80px] rounded-[50px] mx-auto h-[30px] items-center justify-center bg-[#b3b3b3] mt-[-50px] md:mt-[-50px] gap-2'>
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      current === index
                        ? 'bg-orange-500 scale-110'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
