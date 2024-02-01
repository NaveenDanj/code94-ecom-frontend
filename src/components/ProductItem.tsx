import { useNavigate } from 'react-router-dom'
import editIcon from '../assets/icons/edit-icon.svg'
import starredIcon from '../assets/icons/starred.svg'
import starIcon from '../assets/icons/star.svg'
import { IProduct } from '../types/types'
import DeleteDialog from './DeleteDialog'
import api from '../api'
import { useEffect, useState } from 'react'

interface IProp {
    product : IProduct,
    callback : React.Dispatch<React.SetStateAction<boolean>>
}

function ProductItem({product , callback} : IProp) {

    const navigate = useNavigate()
    const [starred , setStarred] = useState(false)

    useEffect(() => {
        if(checkProductExistOnFavouriteList(product._id)) {
            setStarred(true)
        }else{
            setStarred(false)
        }
    } , [])

    const checkProductExistOnFavouriteList = (product_id:string) => {
        const fav_list:IProduct[] = JSON.parse(localStorage.getItem('favouriteItems')+'') as IProduct[]

        for(let i = 0; i < fav_list.length; i ++){
            if(fav_list[i]._id == product_id){
                return true
            }
        }

        return false
    }

    const handleFvourite = async (id:string) => {
        
        if(checkProductExistOnFavouriteList(id)){

            try{
                await api.get(`favourite/remove-from-favourite?id=${product._id}`)
                const fav_list:IProduct[] = JSON.parse(localStorage.getItem('favouriteItems')+'') as IProduct[]

                for(let i = 0; i < fav_list.length; i ++){
                    if(fav_list[i]._id == id){
                        fav_list.splice(i , 1)
                        localStorage.setItem('favouriteItems' , JSON.stringify(fav_list))
                        setStarred(false)
                        return true
                    }
                }

            }catch(err){
                console.log(err)
            }

        }else{

            try{
                await api.get(`favourite/add-to-favourite?id=${product._id}`)
                const fav_list:IProduct[] = JSON.parse(localStorage.getItem('favouriteItems')+'') as IProduct[]

                fav_list.push(product)
                localStorage.setItem('favouriteItems' , JSON.stringify(fav_list))
                setStarred(true)
            }catch(err){
                console.log(err)
            }

        }

    }

    return (
        <div style={{ borderBottom : '1px solid rgba(150, 145, 145 , 0.3)' }} className="tw-w-full tw-grid tw-grid-cols-5  tw-mt-3 tw-p-5">

            <div className="tw-flex tw-justify-start tw-my-auto">
                <label className="tw-text-[19px] tw-font-[500] tw-text-[#162427]">{product.sku}</label>
            </div>

            <div className="tw-flex tw-justify-center tw-my-auto">
                <img className="tw-rounded-xl tw-w-[66px] tw-h-[66px]" src={  import.meta.env.VITE_APP_ASSETS_BACKEND + product.images[product.thumbnail] } />
            </div>

            <div className="tw-my-auto tw-flex tw-justify-start">
                <label className="tw-text-[19px] tw-font-[500] tw-text-[#162427]">{product.productName}</label>
            </div>

            <div className="tw-my-auto tw-flex tw-justify-center">
                <label className="tw-text-[19px] tw-font-[500] tw-text-[#162427]">{product.quantity}</label>
            </div>

            <div className="tw-my-auto tw-flex tw-justify-center tw-gap-3">
                <DeleteDialog callback={callback} product={product} />
                <img onClick={() => navigate(`/edit-product?id=${product._id}`)} className="tw-w-[19px] tw-h-[19px] tw-cursor-pointer" src={editIcon} />
                <img onClick={() => handleFvourite(product._id) } className="tw-w-[19px] tw-h-[19px] tw-cursor-pointer" src={starred ? starredIcon : starIcon} />

            </div>

        </div>
    )
}

export default ProductItem