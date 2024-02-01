import editIcon from '../assets/icons/edit-icon.svg'
import starredIcon from '../assets/icons/starred.svg'
import { IProduct } from '../types/types'
import DeleteDialog from './DeleteDialog'

interface IProp {
    product : IProduct
}

function ProductItem({product} : IProp) {
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

            <DeleteDialog />
            <img className="tw-w-[19px] tw-h-[19px] tw-cursor-pointer" src={editIcon} />
            <img className="tw-w-[19px] tw-h-[19px] tw-cursor-pointer" src={starredIcon} />

        </div>

    </div>
  )
}

export default ProductItem