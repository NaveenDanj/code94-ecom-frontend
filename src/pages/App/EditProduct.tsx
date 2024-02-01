import { useLocation } from 'react-router-dom';
import arrowIcon from '../../assets/icons/arrow.svg'
import { useEffect, useRef, useState } from 'react';
import api from '../../api';
import { IProduct } from '../../types/types';
import LoadingDialog from '../../components/LoadingDialog';
import Toast from '../../components/Toast';

function EditProduct() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [product , setProduct] = useState<IProduct>();

    const [formData , setFormData] = useState({ sku : '' , productName : ''  , quantity : 0 , description : '' , thumbnail : 0})
    const [error , setError] = useState('')
    const [imageList , setImageList] = useState<File[]>([])
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [loading , setLoading] = useState(false)

    useEffect(() => {

        const fetchProduct = async () => {
            try{
                setLoading(true)
                setError('')
                const res = await api.get(`product/get-product?id=${queryParams.get('id')}`)
                setProduct(res.data.product)
                setLoading(false)
            }catch(err){
                console.log(err)
                setError('Error while fetching product data')
            }finally{
                setLoading(false)
            }
        }

        fetchProduct()

    } , [])

    useEffect(() => {
        if(product) setFormData({ sku : product.sku , productName : product.productName  , quantity : product.quantity , description : product.description , thumbnail : product.thumbnail})
    },[product])

    useEffect(() => {
        console.log(formData.thumbnail)
    } , [formData])


    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {

        if(event.target.files && event.target.files.length > 0){
    
          try{

            setLoading(true)
            
            const _formData = new FormData();

            // event.target.files.forEach((image:File) => {
            //     _formData.append('images', image);
            // });

            for(let i = 0; i < event.target.files.length; i++){
                _formData.append('images', event.target.files[i]);
            }

            const res = await api.post(`product/edit-product-upload-image?id=${product?._id}` , _formData , {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
            })

            setProduct(res.data.product)
            setLoading(false)
          }catch(err){
            console.log(err)
            setError('Error while fetching product data')
          }finally{
            setLoading(false)
          }


        }

    };

    const handleClickOpen = () => {
        if(fileInputRef.current){
          fileInputRef.current.click();
        }
    }


    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try{
            setLoading(true)
            setError('')
            const res = await api.put(`/product/edit-product-details?id=${product?._id}` , formData)
            console.log(res)
            setLoading(false)
            
        }catch(err){
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setError(err.response.data.message)
        }finally{
            setLoading(false)
        }
        

    }

    return (
        <form onSubmit={handleSubmit} className="tw-w-full tw-flex tw-flex-col tw-p-10">
            <LoadingDialog isOpen={loading} />
            <Toast message={error} open={error != ''} />
            <input type='file' ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />

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
                            <input required onChange={(e) => setFormData((prevData) => ({...prevData , sku: e.target.value}))} value={formData.sku} type='text' className='tw-bg-[#F7F7F7] tw-w-full' />
                        </div>

                    </div>


                </div>

                <div className='tw-flex tw-w-full tw-justify-between tw-mt-10 '>
                    
                    <div className='tw-w-full tw-flex tw-gap-8 tw-max-w-[480px]'>

                        <label className='tw-text-[19px] tw-font-[500] tw-my-auto'>Name</label>
                        
                        <div className='tw-bg-[#F7F7F7] tw-p-2 tw-rounded-md tw-max-w-[400px] tw-flex tw-flex-grow'>
                            <input required onChange={(e) => setFormData((prevData) => ({...prevData , productName: e.target.value}))} type='text' value={formData.productName} className='tw-bg-[#F7F7F7] tw-w-full' />
                        </div>

                    </div>


                    <div className='tw-w-full tw-flex tw-gap-8 tw-max-w-[480px]'>

                        <label className='tw-text-[19px] tw-font-[500] tw-my-auto'>QTY</label>
                        
                        <div className='tw-bg-[#F7F7F7] tw-p-2 tw-rounded-md tw-w-[400px]'>
                            <input required onChange={(e) => setFormData((prevData) => ({...prevData , quantity: +e.target.value}))} type='number' value={formData.quantity} min={0} className='tw-bg-[#F7F7F7] tw-w-full' />
                        </div>

                    </div>

                </div>

            </div>

            <div className='tw-w-full tw-flex tw-flex-col tw-mt-14'>

                <div className='tw-flex tw-flex-col tw-gap-1'>
                    
                    <label className="tw-text-[19px] tw-font-[500] tw-text-[#162427]">Product Description</label>
                    <p className="tw-text-[14px] tw-font-[500] tw-text-[#969191]">A small description about the product</p>

                    <div className='tw-bg-[#F7F7F7] tw-p-2 tw-rounded-md tw-mt-2  tw-flex tw-flex-grow'>
                        <textarea required onChange={(e) => setFormData((prevData) => ({...prevData , description: e.target.value}))} value={formData.description} rows={5} className='tw-bg-[#F7F7F7] tw-w-full' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut lectus a risus a nibh massa ut leo.' />
                    </div>

                </div>

            </div>

            <div className='tw-w-full tw-flex tw-gap-5 tw-mt-10'>

                <div className='tw-flex tw-flex-col tw-gap-3'>
                    <label className="tw-text-[19px] tw-font-[500] tw-text-[#162427]">Product Images</label>
                    <p className="tw-text-[14px] tw-font-[500] tw-max-w-[200px] tw-text-[#969191]">JPEG, PNG, SVG or GIF (Maximum file size 50MB)</p>
                </div>

                <div className='tw-flex tw-gap-3'>

                {product?.images.map( (file , index) =>
                    <div key={index}>
                        <img onClick={() => setFormData((prevData) => ({...prevData , thumbnail: index})) } style={{ border : formData.thumbnail == index ? '2px solid #001EB9' : '' }} key={index} className='tw-w-[85px] tw-h-[85px] tw-cursor-pointer' src={import.meta.env.VITE_APP_ASSETS_BACKEND + file} />
                        {formData.thumbnail == index  && (
                            <div key={index+'' + "Thumbnail"} className='tw-relative tw-top-[-100px] tw-left-[0px] tw-flex tw-justify-center tw-p-1 tw-rounded-md tw-bg-[#969191]'>
                                <label className='tw-text-[8px] tw-text-white'>Thumbnail</label>
                            </div>
                        )}
                    </div>
                )}

                {/* {imageList.map( (file , index) =>
                    <div key={index + product?.images.length-1}>
                        <img onClick={() => setFormData((prevData) => ({...prevData , thumbnail: index+1 + product?.images.length-1})) } style={{ border : formData.thumbnail == index+1  + product?.images.length-1 ? '2px solid #001EB9' : '' }} key={index} className='tw-w-[85px] tw-h-[85px] tw-cursor-pointer' src={URL.createObjectURL(file)} />
                        {formData.thumbnail == index+1  + product?.images.length-1 && (
                            <div key={index+'' + "Thumbnail"} className='tw-relative tw-top-[-100px] tw-left-[0px] tw-flex tw-justify-center tw-p-1 tw-rounded-md tw-bg-[#969191]'>
                                <label className='tw-text-[8px] tw-text-white'>Thumbnail</label>
                            </div>
                        )}
                    </div>
                )} */}

                </div>

                <div className=''>
                    <label onClick={handleClickOpen} className="tw-text-[19px] tw-font-[500] tw-text-[#001EB9] tw-cursor-pointer tw-underline">Edit Images</label>
                </div>

            </div>

            <div className='tw-w-full tw-flex tw-justify-end tw-mt-10'>
                <button type='submit' className="tw-px-[45px] tw-flex tw-py-[15px] tw-rounded-xl tw-bg-[#001EB9] tw-text-white tw-my-auto">Save changes</button>
            </div>

        </form>
    )
}

export default EditProduct