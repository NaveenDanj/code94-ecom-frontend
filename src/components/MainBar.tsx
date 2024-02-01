import { useNavigate } from 'react-router-dom'
import searchIcon from '../assets/icons/searchIcon.svg'
import starIcon from '../assets/icons/starred.svg'
import api from '../api'
import { useState } from 'react'
import { IProduct } from '../types/types'

function MainBar() {

    const navigate = useNavigate()
    const [search , setSearch] = useState('')
    const [searchList , setSearchList] = useState<string[]>([])

    const handleSearch = async () => {

        if(search == ''){
            setSearchList([])
            return
        }

        try{
            const res = await api.get(`search/product-search?q=${search}`)
            setSearchList(res.data.results.map( (product:IProduct) => (product.productName) ))
        }catch(err){
            console.log(err)
        }


    }

    return (
        <div className="tw-w-full tw-flex tw-justify-between tw-p-2 ">
            <div className='tw-flex tw-flex-col tw-flex-grow tw-max-w-[600px]'>
                <div className="tw-bg-[#F7F7F7] tw-flex tw-flex-grow tw-max-w-[600px] tw-gap-3 tw-p-1 tw-rounded-3xl tw-my-auto">
                    <input onChange={(e) =>  {setSearch(e.target.value); handleSearch();}  } className="tw-bg-[#F7F7F7] tw-flex tw-flex-grow tw-text-[19px] tw-p-2" type="text" placeholder='Search for products' />
                    <button onClick={handleSearch} className="tw-px-[40px] tw-flex tw-gap-3 tw-py-[11px] tw-rounded-3xl tw-bg-[#001EB9] tw-text-white">
                        <img className='tw-w-[20px] tw-h-[20px] tw-my-auto' src={searchIcon} />
                        Search
                    </button>
                </div>

                {searchList.length > 0 && (
                    <div className="tw-bg-white tw-border tw-border-gray-300 tw-rounded-b-lg tw-shadow-md tw-mt-1 tw-w-[600px] tw-flex tw-flex-grow  tw-absolute tw-top-[260px] tw-z-10">
                    
                        {searchList.map((item:string) => (
                            <div onClick={() => navigate(`/search?q=${item}`)} key={item} className="tw-p-2 tw-cursor-pointer tw-hover:bg-gray-100">
                                {item}
                            </div>
                        ))}
                        
                    </div>
                )}

            </div>


            <div className='tw-flex tw-gap-5 tw-justify-end tw-my-auto'>
                <button onClick={() => navigate('/add-product')} className="tw-px-[45px] tw-flex tw-py-[15px] tw-rounded-xl tw-bg-[#001EB9] tw-text-white tw-my-auto">New Product</button>
                <button onClick={() => navigate('/favourite')} style={{ border : '1px solid rgba(0, 30, 185,0.7)' }} className="tw-px-[5px] tw-flex tw-my-auto tw-bg-white tw-border-[1px]">
                    <img className='tw-w-[35px] tw-h-[35px] ' src={starIcon} />
                </button> 
            </div>
            

        </div>
    )
}

export default MainBar