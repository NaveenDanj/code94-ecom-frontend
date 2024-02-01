import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import deleteIcon from '../assets/icons/delete-icon.svg'
import alertIcon from '../assets/icons/alert.svg'
import { IProduct } from '../types/types';
import api from '../api';
import Toast from './Toast';
import LoadingDialog from './LoadingDialog';

interface IProp {
    product : IProduct,
    callback : React.Dispatch<React.SetStateAction<boolean>>
}


export default function DeleteDialog({product , callback}:IProp) {
  const [open, setOpen] = React.useState(false);
  const [loading , setLoading] = React.useState(false)
  const [error , setError] = React.useState('')

  const handleClickOpen = () => {
    callback(false)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {

    try{
        setLoading(true)
        setError('')
        await api.delete(`product/delete-product?id=${product._id}`)
        setLoading(false)
        callback(true)
        handleClose()

        const fav_list:IProduct[] = JSON.parse(localStorage.getItem('favouriteItems')+'') as IProduct[]

        for(let i = 0; i < fav_list.length; i++) {
            if(fav_list[i]._id == product._id){
                fav_list.splice(i , 1)
                localStorage.setItem('favouriteItems' , JSON.stringify(fav_list))
                return true
            }
        }

    }catch(err){
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setError(err.response.data.message)
    }finally{
        setLoading(false)
    }

  }


  return (
    <>
      <img onClick={handleClickOpen} className="tw-w-[19px] tw-h-[19px] tw-cursor-pointer" src={deleteIcon} />

        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
                '& .MuiDialog-container': {
                    '& .MuiPaper-root': {
                        width: '100%',
                        maxWidth: '600px',
                    },
                },
            }}
        >
            <Toast open={error != ''} message={error}  />
            <LoadingDialog isOpen={loading}  />
            <DialogContent className='tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center'>
                <img className='tw-w-[60px] tw-h-[60px]' src={alertIcon} />
                <center><label className='tw-text-[#162427] tw-text-[24px] tw-font-[700]'>ARE YOU SURE?</label></center>
                <div className='tw-mt-3'></div>
                <center><label className='tw-text-[#162427] tw-text-[19px] tw-font-[700] '>You will not be able to undo this action if you proceed!</label></center>

                <div className='tw-flex tw-gap-3 tw-mt-5'>
                    <button onClick={handleClose} style={{ border : '1px solid rgba(0, 30, 185, 1)' }} className="tw-px-[45px] tw-flex tw-py-[10px] tw-rounded-xl tw-bg-white tw-text-black tw-my-auto">Cancel</button>
                    <button onClick={handleDelete} className="tw-px-[45px] tw-flex tw-py-[10px] tw-rounded-xl tw-bg-[#001EB9] tw-text-white tw-my-auto">Delete</button>
                </div>

            </DialogContent>

        </Dialog>
    </>
  );
}

