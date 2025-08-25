import { menu, notification, profile, search, Store } from '../assets/icons'
import { logo } from '../assets/images'

const Header = () => {
  return (
    <div className='flex md:flex-row flex-col gap-[20px]  justify-center items-center h-[139px] bg-[#FFFFFF] fixed top-0 left-0 right-0 z-50'>
      <div className='flex  items-center justify-between w-[90%]'>
        <div className='flex items-center gap-10'>
          <img src={menu} alt='Menu Icon' className='w-6 h-6' />
          <span className='flex items-center gap-2'>
            <img src={logo} alt='' className='w-[24px] h-[24px]' />
            <img src={Store} alt='' />
          </span>
        </div>
        <div className='md:flex relative hidden '>
          <input
            type='text'
            placeholder='search'
            className='w-[344px] h-[48px] rounded-[54px] border-[#D4DDE0] border-[1px] px-[16px]'
          />
          <img
            src={search}
            className='absolute top-[13px] right-[16px]'
            alt=''
          />
        </div>
        <div className='flex items-center gap-4'>
          <img src={profile} alt='' />
          <img src={notification} alt='Notification Icon' className='w-6 h/6' />
        </div>

      </div>
        <div className='md:hidden relative flex '>
          <input
            type='text'
            placeholder='search'
            className='w-[344px] h-[48px] rounded-[54px] border-[#D4DDE0] border-[1px] px-[16px]'
          />
          <img
            src={search}
            className='absolute top-[13px] right-[16px]'
            alt=''
          />
        </div>
    </div>
  )
}

export default Header
