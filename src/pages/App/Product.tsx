import { useEffect, useState } from "react"
import MainBar from "../../components/MainBar"
import ProductItem from "../../components/ProductItem"
import api from "../../api"

function Product() {

    const [products , setProducts] = useState([])

    useEffect(() => {

        const fetchProducts = async () => {
            const res = await api.get('product/get-all-products?limit=100')
            console.log(res)
            setProducts(res.data.products)
        }

        fetchProducts()

    } , [])


    return (
        <div className="tw-w-full tw-flex tw-flex-col tw-p-10">
            
            <div className="tw-mt-1 tw-mb-5">
                <label className="tw-text-[36px] tw-font-[900] tw-tracking-[0.2em] ">PRODUCTS</label>
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
                {products.map((product , index) => <ProductItem product={product} key={index} /> )}
            </div>

            {/* <div>
                asd
            </div> */}


        </div>
    )
}

export default Product