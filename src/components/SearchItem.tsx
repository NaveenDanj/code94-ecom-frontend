import arrowIcon from '../assets/icons/arrow.svg'

function SearchItem() {
  return (
    <div style={{ borderBottom : '1px solid rgba(150, 145, 145 , 0.3)' }} className='tw-flex tw-justify-between tw-w-full tw-py-5 tw-pl-5'>

        <div className='tw-flex tw-flex-col tw-gap-3'>

            <label className='tw-text-[#001EB9] tw-text-[14px] tw-font-[500]'>#CA25</label>
            <label className='tw-text-[#162427] tw-text-[19px] tw-font-[700]'>Product-name</label>
            <p className='tw-text-[#969191] tw-text-[14px] tw-font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut lectus a risus a nibh massa ut leo.</p>
        </div>

        <img className='tw-my-auto tw-w-[32px] tw-h-[32px] tw-cursor-pointer' src={arrowIcon} />

    </div>
  )
}

export default SearchItem