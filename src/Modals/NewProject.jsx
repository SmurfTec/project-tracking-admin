import React, { useEffect, useState } from 'react';
import { Container, TextField, MenuItem, Button, Typography, Box, DialogContent, DialogTitle, Dialog, DialogActions } from '@mui/material';

const NewProject = ({open,handleClose,handleSuccess,title, data,isUpdate}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [milestone, setMilestone] = useState('');
  const [status, setStatus] = useState('');
  const [number, setNumber] = useState()
  const [duedate, setDuedate] = useState(new Date())

  useEffect(() => {
    if(isUpdate){
      setName(data.name)
      setDescription(data.description)
      setMilestone(data.milestone)
      setStatus(data.status)
      setNumber(data.number)
      setDuedate(new Date(data.duedate).toISOString().split('T')[0])
    }
  }, [isUpdate])

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSuccess({
      name,
      description,
      milestone,
      status,
      number,
      duedate
    })
    // Handle form submission logic here
  };

  const getStatusItems = () => {
    switch (milestone) {
      case 'Offer Accepted':
        return (
           <TextField
            required
            fullWidth
            select
            label="Status"
            variant="outlined"
            margin="normal"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="">
              <em>Select status</em>
            </MenuItem>
            {/* Add options for status */}
            <MenuItem value="Accepted">Accepted</MenuItem>
          </TextField>
        );
      case 'Final Measurement':
        return (<TextField
          fullWidth
          required
            select
            label="Status"
            variant="outlined"
            margin="normal"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="">
              <em>Select status</em>
            </MenuItem>
            {/* Add options for status */}
          
            <MenuItem value="Scheduled">Scheduled</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
          </TextField>)
    
      case 'Design and Validation':
        return (
           <TextField
           fullWidth
           required
            select
            label="Status"
            variant="outlined"
            margin="normal"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="">
              <em>Select status</em>
            </MenuItem>
            {/* Add options for status */}
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Design Completed">Design Completed</MenuItem>
          </TextField>
        );
      case 'Production of Smart Films':
        return (
           <TextField
           fullWidth
           required
            select
            label="Status"
            variant="outlined"
            margin="normal"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="">
              <em>Select status</em>
            </MenuItem>
            {/* Add options for status */}
          
            <MenuItem value="Scheduled">Scheduled</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
          </TextField>
        );
      case 'Quality Control':
        return (
            <TextField
            fullWidth
            required
            select
            label="Status"
            variant="outlined"
            margin="normal"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="">
              <em>Select status</em>
            </MenuItem>
            {/* Add options for status */}
          
           <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
          </TextField>
        );
      case 'Site Preparation':
        return (
           <TextField
           fullWidth
           required
            select
            label="Status"
            variant="outlined"
            margin="normal"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="">
              <em>Select status</em>
            </MenuItem>
            {/* Add options for status */}
          
            <MenuItem value="Completed">Completed</MenuItem>
          </TextField>
        );
      case 'Installation':
        return (
           <TextField
           fullWidth
           required
            select
            label="Status"
            variant="outlined"
            margin="normal"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="">
              <em>Select status</em>
            </MenuItem>
            {/* Add options for status */}
          
            <MenuItem value="Scheduled">Scheduled</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
          </TextField>
        );
      case 'Project Completed':
        return (
           <TextField
           fullWidth
           required
            select
            label="Status"
            variant="outlined"
            margin="normal"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="">
              <em>Select status</em>
            </MenuItem>
            {/* Add options for status */}
          
            <MenuItem value="Completed">Completed</MenuItem>
          </TextField>
        );
      default:
        return  <TextField
        fullWidth
        required
            select
            label="Status"
            variant="outlined"
            margin="normal"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="">
              <em>Select status</em>
            </MenuItem>
            {/* Add options for status */}
          </TextField>
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm">
      <DialogTitle>
        <Typography variant="h4">{title}</Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 4 }}>
          <form onSubmit={handleSubmit} id='form1'>
            <TextField
              required
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              required
              fullWidth
              label="Description"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              required
              fullWidth
              select
              label="Milestone"
              variant="outlined"
              margin="normal"
              value={milestone}
              onChange={(e) => setMilestone(e.target.value)}
            >
              <MenuItem value="">
                <em>Select milestone</em>
              </MenuItem>
              {/* Add options for milestones */}
              <MenuItem value="Offer Accepted">Offer Accepted</MenuItem>
              <MenuItem value="Final Measurement">Final Measurement</MenuItem>
              <MenuItem value="Design and Validation">Design and Validation</MenuItem>
              <MenuItem value="Production of Smart Films">Production of Smart Films</MenuItem>
              <MenuItem value="Quality Control">Quality Control</MenuItem>
              <MenuItem value="Site Preparation">Site Preparation</MenuItem>
              <MenuItem value="Installation">Installation</MenuItem>
              <MenuItem value="Project Completed">Project Completed</MenuItem>
            </TextField>
              {getStatusItems()}
            {/* textfeld for numnber and duedate */}
            <TextField
              required
              fullWidth
              label="Number"
              variant="outlined"
              margin="normal"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <TextField
              required
              fullWidth
              label="Due Date"
              variant="outlined"
              margin="normal"
              type="date"
              value={duedate}
              onChange={(e) => setDuedate(e.target.value)}
            />
          </form>
        </Box>
      </DialogContent>
      <DialogActions>
         <Button form='form1' type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            {isUpdate ? 'Update' : 'Create'}
          </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewProject;
