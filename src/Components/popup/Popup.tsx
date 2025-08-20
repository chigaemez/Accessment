import { useEffect, useState } from 'react'
import { usePopupStore } from '../../Stores/PopupStore'
import { harddrive, logo } from '../../assets/images'
import {
  christmas,
  chrismasButton,
  rating,
  next,
  more,
  more2,
  talk
} from '../../assets/icons'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { christmasItems, nextProduct } from '../../Data/Data'
import type { ChristmasItem, NextProduct } from '../../Data/Type'

interface Item {
  id: number
  label: string
  count: number
}

const items: Item[] = [
  { id: 1, label: 'Recommended', count: 20 },
  { id: 2, label: 'Deals', count: 4 },
  { id: 3, label: 'Coupon', count: 2 }
]

const Popup = () => {
  const { isOpen, closePopup, openPopup } = usePopupStore()
  const [selectedId, setSelectedId] = useState<number>(1)

  useEffect(() => {
    openPopup()
  }, [openPopup])

  if (!isOpen) return null
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='fixed flex-col bg-black  opacity-[0.6] inset-0   flex items-center z-[995] py-[50px] px-[5px] justify-center'
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className='flex w-full items-center md:w-[60%] justify-between h-[40px] '
        >
          <div className='flex items-center  gap-[10px] '>
            <div className='flex w-[40px] h-[40px] bg-[#FFFFFF] rounded-full items-center justify-center border-[0.5px] border-[#FF6813]'>
              <img src={logo} alt='' className='w-[16px] h-[16px]' />
            </div>
            <h1 className='text-[16px] font-[700] font-popbold text-[#FFFFFF] leading-[100%]'>
              Bing Chat Support
            </h1>
          </div>

          <div
            className='flex w-[24px] h-[24px] items-center justify-center rounded-full cursor-pointer bg-[#838383] '
            onClick={closePopup}
          >
            <IoClose className='text-white text-[15px]' />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className='flex flex-col rounded-[24px] w-full  md:w-[60%] border-[1px]  p-[8px] gap-[8px]  bg-[#FFF0E8] border-[#FFE5D7]  mt-[20px] items-center justify-center no-scrollbar overflow-scroll'
        >
          <div className='flex flex-col rounded-[16px] border-[1px] md:mt-[650px] lg:mt-[630px] xl:mt-[580px] 2xl:mt-[490px] mt-[680px]   border-[#FFFFFF] p-[16px] gap-[24px] popupcard  bg-[#ffffff99] w-full '>
            <div className='flex flex-col gap-[24px] w-full'>
              <div className='flex w-[142px] h-[22px] rounded-[38px] py-[4px] px-[8px] gap-[8px] bg-[#FFD7DF]'>
                <img src={christmas} alt='' />
                <h1 className='text-[12px] font-popmedium font-[500] text-[#DF1B41] leading-[100%]'>
                  Christams Items
                </h1>
              </div>
              <p className='text-[14px] font-[400] font-popregular text-[#20262C] leading-[100%]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et .
              </p>
            </div>

            <div className='flex  flex-col  w-full mt-[20px] '>
              <div className='flex overflow-x-auto mt-[20px] no-scrollbar gap-[16px]'>
                {christmasItems.map((item: ChristmasItem, idx: number) => (
                  <div
                    className='flex  flex-col w-[180px] flex-shrink-0 h-[204px] rounded-[12px] pt-[6px] pb-[8px] px-[8px] gap-[4px] bg-[#FFFFFF] shadow'
                    key={idx}
                  >
                    <img
                      src={item.img}
                      alt=''
                      className='w-[164px] h-[112px]'
                    />
                    <h1 className='text-[14px] font-popmedium font-[500] text-[#20262C] leading-[100%]'>
                      {item.title}
                    </h1>
                    <p className='text-[10px] font-[600] font-popsemibold leading-[100%] text-[#20262C]'>
                      {item.price}
                    </p>

                    <p className='text-[10px] flex items-center  font-[600] font-popsemibold leading-[100%] text-[#20262C]'>
                      <img src={rating} alt='' />
                      {item.rating}{' '}
                      <span className='text-[#6A7383]'>(188)</span>
                    </p>
                  </div>
                ))}
              </div>

              <button className='flex items-center mt-[20px] justify-center gap-[8px] md:w-[120px] w-full h-[37px] border-[1px] border-[#EBF0F4] px-[16px] py-[8px] rounded-[8px] bg-[#FFFFFF] text-[#20262C] font-popmedium font-[500] text-[14px] leading-[100%]'>
                <img src={chrismasButton} alt='' />
                Buy Now
              </button>
            </div>

            <div className='flex flex-col gap-[24px] w-full '>
              <div className='flex w-[142px] h-[22px] rounded-[38px] py-[4px] px-[8px] gap-[8px] bg-[#E1FFDF]'>
                <img src={next} alt='' />
                <h1 className='text-[12px] font-popmedium font-[500] text-[#228403] leading-[100%]'>
                  Next Products
                </h1>
              </div>
              <p className='text-[14px] font-[400] font-popregular text-[#20262C] leading-[100%]'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className='flex  flex-col  w-full mt-[20px]'>
              <div className='flex gap-[8px] overflow-scroll mt-[20px] no-scrollbar '>
                {items.map(item => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className={`flex items-center h-[34px] rounded-[7px] border-[1px] py-[8px] px-[16px] gap-[13px] cursor-pointer transition-colors ${
                      selectedId === item.id
                        ? 'bg-[#FF5B00] text-white'
                        : 'bg-white text-[#20262C] border-[#EBF0F4]'
                    }`}
                  >
                    <img
                      src={harddrive}
                      alt='Logo'
                      className='w-[15px] h-[15px] ml-[10px]'
                    />
                    <div className='flex w-[15px] h-[15px] ml-[-36px] rounded-[3px] border-[1px] px-[1px] bg-[#EBF0F4] text-[10px] font-[600] font-popbold text-[#20262C] border-[#FFFFFF]'>
                      {item.count}
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div className='flex overflow-x-auto no-scrollbar gap-[16px] mt-[20px]'>
              {nextProduct.map((item: NextProduct, idx: number) => (
                <div
                  className='flex  flex-col w-[180px] flex-shrink-0 h-[204px] rounded-[12px] pt-[6px] pb-[8px] px-[8px] gap-[4px] bg-[#FFFFFF] shadow'
                  key={idx}
                >
                  <img src={item.img} alt='' className='w-[164px] h-[112px]' />
                  <h1 className='text-[14px] font-popmedium font-[500] text-[#20262C] leading-[100%]'>
                    {item.title}
                  </h1>
                  <p className='text-[10px] font-[600] font-popsemibold leading-[100%] text-[#20262C]'>
                    {item.price}
                  </p>

                  <p className='text-[10px] flex items-center  font-[600] font-popsemibold leading-[100%] text-[#20262C]'>
                    <img src={rating} alt='' />
                    {item.rating} <span className='text-[#6A7383]'>(188)</span>
                  </p>
                </div>
              ))}
              <div className='flex items-center justify-center my-auto w-[180px] h-[37px] rounded-[38px] py-[4px] px-[8px] gap-[8px] bg-[#FFFFFF] flex-shrink-0 cursor-pointer'>
                <img src={more} alt='' />
                <h1 className='text-[12px] font-popmedium font-[500] text-[#FF5B00] leading-[100%]'>
                  View more
                </h1>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='flex flex-col gap-[24px] w-full'>
                <p className='text-[14px] font-[400] font-PopRegular leading-[100%] text-[#20262C]'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
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
                  className='flex items-center justify-center my-auto w-[107px] h-[26px] rounded-[38px] py-[4px] px-[8px] gap-[8px] bg-[#FFFFFF] flex-shrink-0 cursor-pointer'
                >
                  <img src={more2} alt='' />
                  <h1 className='text-[12px] font-popmedium font-[500] text-[#FF5B00] leading-[100%]'>
                    View more
                  </h1>
                </motion.div>
              </div>
              <hr className='border-[1px] border-[#D4DDE0] my-[20px]' />

              <div className='flex flex-col gap-[24px] w-full'>
                <div className='flex items-center justify-center my-auto w-[100px] h-[23px] rounded-[38px] py-[4px] px-[8px] gap-[8px] bg-[#DFEEFF] flex-shrink-0 cursor-pointer'>
                  <img src={talk} alt='' />
                  <h1 className='text-[12px] font-popmedium font-[500] text-[#0570DE] leading-[100%]'>
                    Talk to me
                  </h1>
                </div>
                <p className='text-[14px] font-[400] font-PopRegular leading-[100%] text-[#20262C]'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Popup
