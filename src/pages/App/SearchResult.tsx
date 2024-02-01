import { useEffect, useState } from 'react';
import MainBar from '../../components/MainBar'
import SearchItem from '../../components/SearchItem'
import { useLocation } from 'react-router-dom';
import { IProduct } from '../../types/types';
import api from '../../api';
import LoadingDialog from '../../components/LoadingDialog';

function SearchResult() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [loading , setLoading] = useState(false)
    const [productList , setProductList] = useState<IProduct[]>([]);

    useEffect(() => {

        const fetchProduct = async () => {
            try{
                setLoading(true)
                const res = await api.get(`search/product-search?q=${queryParams.get('q')}`)
                setProductList(res.data.results)
                setLoading(false)
            }catch(err){
                console.log(err)
            }finally{
                setLoading(false)
            }
        }

        fetchProduct()

    } , [])

  return (
    <div className="tw-w-full tw-flex tw-flex-col tw-p-10">
        
        <LoadingDialog isOpen={loading} />

        <div className="tw-mt-1 tw-mb-5">
            <label className="tw-text-[36px] tw-font-[900] tw-tracking-[0.2em] ">FAVOURITE PRODUCTS</label>
        </div>

        <MainBar />

        <div className='tw-w-full tw-mt-5'>
            <label className='tw-text-[24px] tw-text-[#969191] tw-font-[700]'>{productList.length} results found for '{queryParams.get('q')}'</label>
        </div>

        <div className='tw-w-full tw-h-[calc(100vh-400px)] tw-overflow-y-auto tw-flex tw-flex-col'>
            {productList && productList.map( (product , index) => <SearchItem product={product} key={index}  /> ) }
        </div>

    </div>

  )
}

export default SearchResult