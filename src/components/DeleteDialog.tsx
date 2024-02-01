import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import deleteIcon from '../assets/icons/delete-icon.svg'
import alertIcon from '../assets/icons/alert.svg'

export default function DeleteDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <DialogContent className='tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center'>
            <img className='tw-w-[60px] tw-h-[60px]' src={alertIcon} />
            <center><label className='tw-text-[#162427] tw-text-[24px] tw-font-[700]'>ARE YOU SURE?</label></center>
            <div className='tw-mt-3'></div>
            <center><label className='tw-text-[#162427] tw-text-[19px] tw-font-[700] '>You will not be able to undo this action if you proceed!</label></center>

            <div className='tw-flex tw-gap-3 tw-mt-5'>
                <button onClick={handleClose} style={{ border : '1px solid rgba(0, 30, 185, 1)' }} className="tw-px-[45px] tw-flex tw-py-[10px] tw-rounded-xl tw-bg-white tw-text-black tw-my-auto">Cancel</button>
                <button className="tw-px-[45px] tw-flex tw-py-[10px] tw-rounded-xl tw-bg-[#001EB9] tw-text-white tw-my-auto">Delete</button>
            </div>

        </DialogContent>

      </Dialog>
    </>
  );
}

