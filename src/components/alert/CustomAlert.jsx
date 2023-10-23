import { Alert, Snackbar } from '@mui/material'
import React from 'react'

export default function CustomAlert({open,type,handleClose,message}) {
  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}  key={'top' + 'center'}  anchorOrigin={{vertical:'top',horizontal:'center' }}>
    <Alert onClose={handleClose} severity={type==0?'error':type==1?'info':'success'} sx={{ width: '100%' }}>
    {message}
  </Alert>
    </Snackbar>

  )
}
