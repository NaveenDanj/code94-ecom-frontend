import { useNavigate } from 'react-router-dom'
import arrowIcon from '../assets/icons/arrow.svg'
import { IProduct } from '../types/types'

interface IProp {
    product : IProduct
}

function SearchItem({product} : IProp) {

    const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/edit-product?id=${product._id}`)} style={{ borderBottom : '1px solid rgba(150, 145, 145 , 0.3)' }} className='tw-flex tw-justify-between tw-w-full tw-py-5 tw-pl-5'>

        <div className='tw-flex tw-flex-col tw-gap-3'>

            <label className='tw-text-[#001EB9] tw-text-[14px] tw-font-[500]'>{product.sku}</label>
            <label className='tw-text-[#162427] tw-text-[19px] tw-font-[700]'>{product.productName}</label>
            <p className='tw-text-[#969191] tw-text-[14px] tw-font-[400]'>{product.description}</p>
        </div>

        <img className='tw-my-auto tw-w-[32px] tw-h-[32px] tw-cursor-pointer' src={arrowIcon} />

    </div>
  )
}

export default SearchItem