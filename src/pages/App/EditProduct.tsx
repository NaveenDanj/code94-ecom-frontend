import arrowIcon from '../../assets/icons/arrow.svg'

function EditProduct() {
  return (
    <div className="tw-w-full tw-flex tw-flex-col tw-p-10">
        
        <div className="tw-mt-1 tw-mb-5 tw-flex tw-gap-2">
            <label className="tw-text-[36px] tw-font-[900] tw-tracking-[0.2em] tw-my-auto">PRODUCTS</label>
            <img  className='tw-my-auto' src={arrowIcon} />
            <label className="tw-text-[24px] tw-font-[700] tw-text-[#001EB9] tw-my-auto">Edit product</label>
        </div>

        <div className='tw-w-full tw-flex tw-flex-col tw-mt-3'>

            <div className='tw-flex tw-w-full tw-max-w-[480px]'>
                
                <div className='tw-w-full tw-flex tw-gap-8 tw-justify-between'>

                    <label className='tw-text-[19px] tw-font-[500] tw-my-auto'>SKU</label>
                    
                    <div className='tw-bg-[#F7F7F7] tw-p-2 tw-rounded-md tw-max-w-[400px] tw-flex tw-flex-grow'>
                        <input type='text' className='tw-bg-[#F7F7F7] tw-w-full' />
                    </div>

                </div>


            </div>

            <div className='tw-flex tw-w-full tw-justify-between tw-mt-10 '>
                
                <div className='tw-w-full tw-flex tw-gap-8 tw-max-w-[480px]'>

                    <label className='tw-text-[19px] tw-font-[500] tw-my-auto'>Name</label>
                    
                    <div className='tw-bg-[#F7F7F7] tw-p-2 tw-rounded-md tw-max-w-[400px] tw-flex tw-flex-grow'>
                        <input type='text' className='tw-bg-[#F7F7F7] tw-w-full' />
                    </div>

                </div>


                <div className='tw-w-full tw-flex tw-gap-8 tw-max-w-[480px]'>

                    <label className='tw-text-[19px] tw-font-[500] tw-my-auto'>QTY</label>
                    
                    <div className='tw-bg-[#F7F7F7] tw-p-2 tw-rounded-md tw-w-[400px]'>
                        <input type='text' className='tw-bg-[#F7F7F7] tw-w-full' />
                    </div>

                </div>


            </div>

        </div>

        <div className='tw-w-full tw-flex tw-flex-col tw-mt-14'>

            <div className='tw-flex tw-flex-col tw-gap-1'>
                
                <label className="tw-text-[19px] tw-font-[500] tw-text-[#162427]">Product Description</label>
                <p className="tw-text-[14px] tw-font-[500] tw-text-[#969191]">A small description about the product</p>

                <div className='tw-bg-[#F7F7F7] tw-p-2 tw-rounded-md tw-mt-2  tw-flex tw-flex-grow'>
                    <textarea rows={5} className='tw-bg-[#F7F7F7] tw-w-full' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut lectus a risus a nibh massa ut leo.' />
                </div>

            </div>

        </div>

        <div className='tw-w-full tw-flex tw-gap-5 tw-mt-10'>

            <div className='tw-flex tw-flex-col tw-gap-3'>
                <label className="tw-text-[19px] tw-font-[500] tw-text-[#162427]">Product Images</label>
                <p className="tw-text-[14px] tw-font-[500] tw-max-w-[200px] tw-text-[#969191]">JPEG, PNG, SVG or GIF (Maximum file size 50MB)</p>
            </div>

            <div className='tw-flex tw-gap-3'>

            </div>

            <div className=''>
                <label className="tw-text-[19px] tw-font-[500] tw-text-[#001EB9] tw-cursor-pointer tw-underline">Add Images</label>
            </div>

        </div>

        <div className='tw-w-full tw-flex tw-justify-end tw-mt-10'>
            <button className="tw-px-[45px] tw-flex tw-py-[15px] tw-rounded-xl tw-bg-[#001EB9] tw-text-white tw-my-auto">Save changes</button>
        </div>

    </div>
  )
}

export default EditProduct