import MainBar from '../../components/MainBar'
import arrowIcon from '../../assets/icons/arrow.svg'

function SearchResult() {
  return (
    <div className="tw-w-full tw-flex tw-flex-col tw-p-10">
        
        <div className="tw-mt-1 tw-mb-5">
            <label className="tw-text-[36px] tw-font-[900] tw-tracking-[0.2em] ">FAVOURITE PRODUCTS</label>
        </div>

        <MainBar />

        <div className='tw-w-full tw-mt-5'>
            <label className='tw-text-[24px] tw-text-[#969191] tw-font-[700]'>4 results found for ‘Books’</label>
        </div>

        <div className='tw-p-10 tw-flex tw-flex-col tw-w-full'>
            
            <div style={{ borderBottom : '1px solid rgba(150, 145, 145 , 0.3)' }} className='tw-flex tw-justify-between tw-w-full tw-pb-5 tw-pl-5'>

                <div className='tw-flex tw-flex-col tw-gap-3'>

                    <label className='tw-text-[#001EB9] tw-text-[14px] tw-font-[500]'>#CA25</label>
                    <label className='tw-text-[#162427] tw-text-[19px] tw-font-[700]'>Product-name</label>
                    <p className='tw-text-[#969191] tw-text-[14px] tw-font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut lectus a risus a nibh massa ut leo.</p>
                </div>

                <img className='tw-my-auto tw-w-[32px] tw-h-[32px] tw-cursor-pointer' src={arrowIcon} />

            </div>

        </div>

    </div>

  )
}

export default SearchResult