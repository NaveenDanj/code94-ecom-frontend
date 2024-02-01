import MainBar from '../../components/MainBar'
import SearchItem from '../../components/SearchItem'

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
            
            <SearchItem />
            <SearchItem />
            <SearchItem />

        </div>

    </div>

  )
}

export default SearchResult