import MainBar from '../../components/MainBar'
import { IProduct } from '../../types/types'
import { useEffect, useState } from 'react'
import ProductItem from '../../components/ProductItem'


function Favourite() {

    const [favList , setFavList] = useState<IProduct[]>([])
    const [deleted , setDeleted] = useState(false)


    useEffect(() => {
        const fav_list:IProduct[] = JSON.parse(localStorage.getItem('favouriteItems')+'') as IProduct[]
        setFavList(fav_list)
    } , [])

    useEffect(() => {
        const fav_list:IProduct[] = JSON.parse(localStorage.getItem('favouriteItems')+'') as IProduct[]
        setFavList(fav_list)
    }, [deleted])

    return (
        <div className="tw-w-full tw-flex tw-flex-col tw-p-10">
            
            <div className="tw-mt-1 tw-mb-5">
                <label className="tw-text-[36px] tw-font-[900] tw-tracking-[0.2em] ">FAVOURITE PRODUCTS</label>
            </div>

            <MainBar />

            <div className="tw-w-full tw-grid tw-grid-cols-5  tw-mt-3 tw-p-5">
                
                <div className="tw-flex tw-justify-start tw-my-auto">
                    <label className="tw-text-[19px] tw-font-[700] tw-text-[#001EB9]">SKU</label>
                </div>

                <div className="tw-flex tw-justify-center tw-my-auto">
                    <label className="tw-text-[19px] tw-font-[700] tw-text-[#001EB9]">IMAGE</label>
                </div>

                <div className="tw-my-auto tw-flex tw-justify-start">
                    <label className="tw-text-[19px] tw-font-[700] tw-text-[#001EB9]">PRODUCT NAME</label>
                </div>

                <div className="tw-my-auto tw-flex tw-justify-center">
                    <label className="tw-text-[19px] tw-font-[700] tw-text-[#001EB9]">Quantity</label>
                </div>

                <div className=""></div>

            </div>

            <div className="tw-w-full tw-h-[calc(100vh-400px)] tw-overflow-y-auto tw-flex tw-flex-col">
                {favList.map((product , index) => <ProductItem callback={setDeleted} product={product} key={index} /> )}
            </div>

            

        </div>
    )
}

export default Favourite