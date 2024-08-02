import React, { useState } from 'react';
import { Container, TextField, MenuItem, Button, Typography, Box, DialogContent, DialogTitle, Dialog, DialogActions } from '@mui/material';
import { Cancel, CheckCircle, CropFreeRounded, Delete } from '@mui/icons-material';

const ConfirmDelete = ({open,handleClose,handleSuccess,title}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [milestone, setMilestone] = useState('');
  const [status, setStatus] = useState('');
  const [number, setNumber] = useState()
  const [duedate, setDuedate] = useState(new Date())


  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" sx={{
      '& .MuiDialog-paper': {
        minWidth: 400,
      }
    }}>
      <DialogTitle>
        <Typography variant="h4">{title}</Typography>
      </DialogTitle>
      <DialogActions>
         <Button size='small' onClick={handleClose} variant="contained" color="primary" sx={{ mt: 2 }} endIcon={<Cancel />}>
            Cancel
          </Button>
         <Button size='small' onClick={handleSuccess} variant="contained" color="success" sx={{ mt: 2 }} endIcon={<CheckCircle />} >
            Confirm
          </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDelete;
