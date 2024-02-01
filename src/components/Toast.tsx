import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

interface Iprop {
    open : boolean;
    message : string;
}

export default function Toast({ open , message }:Iprop) {

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
  };


  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
}