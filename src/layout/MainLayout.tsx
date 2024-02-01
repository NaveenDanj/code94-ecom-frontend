import { Outlet } from 'react-router-dom'
import arrowDown from '../assets/icons/down.svg'

function MainLayout() {
  return (
    <div className='tw-flex tw-flex-col tw-w-full tw-h-[100vh] tw-overflow-y-hidden '>
        
        <div className='tw-p-3 tw-flex tw-justify-end tw-gap-8'>
            
            <div className='tw-flex tw-gap-3 tw-my-auto '>
                <label className='tw-font-[700] tw-text-[19px]'>ADMIN</label>
                <img className='tw-w-[24px] tw-h-[24px]' src={arrowDown} />
            </div>

            <div className='tw-flex tw-gap-5'>
                <div className='tw-w-[58px] tw-h-[58px] tw-rounded-[29px] tw-bg-[#001EB9]' />
                <div className='tw-relative tw-top-[40px] tw-left-[-30px] tw-w-[12px] tw-h-[12px] tw-rounded-[6px] tw-bg-[#3DF265]' />
            </div>

        </div>

        <Outlet />
    </div>
  )
}

export default MainLayout