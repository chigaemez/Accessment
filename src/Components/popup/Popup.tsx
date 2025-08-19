import { useEffect } from 'react'
import { usePopupStore } from '../../Stores/PopupStore'
import { logo } from '../../assets/images'
import { christmas, close } from '../../assets/icons'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'

const Popup = () => {
  const { isOpen, closePopup, openPopup } = usePopupStore()

  useEffect(() => {
    openPopup()
  }, [openPopup])

  if (!isOpen) return null
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='fixed flex-col bg-black  opacity-[0.6] inset-0  flex z-[995] py-[50px] px-[5px] justify-center'
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className='flex w-full items-center  justify-between h-[40px] '
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
          className='flex flex-col rounded-[24px] w-full border-[1px] p-[8px] gap-[8px]  bg-[#FFF0E8] border-[#FFE5D7]  mt-[20px] items-center justify-center'
        >
          <div className='flex rounded-[16px] border-[1px]  border-[#FFFFFF] p-[16px] gap-[8px]  bg-[#FFFFFF] w-full h-full '>
            <div className='flex gap-[24px]'>
              <div className='flex w-[142px] h-[22px] rounded-[38px] py-[4px] px-[8px] gap-[8px] bg-[#FFD7DF]'>
                <img src={christmas} alt='' />
                <h1 className='text-[12px] font-popmedium font-[500] text-[#DF1B41] leading-[100%]'>
                  Christams Items
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Popup
