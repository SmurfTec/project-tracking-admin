import React, { useEffect, useState } from 'react';
import {
  Container,
  TextField,
  MenuItem,
  Button,
  Typography,
  Box,
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
} from '@mui/material';

const NewProject = ({ open, handleClose, handleSuccess, title, data, isUpdate }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [milestone, setMilestone] = useState('');
  const [status, setStatus] = useState('');
  const [number, setNumber] = useState();
  const [duedate, setDuedate] = useState(new Date());

  useEffect(() => {
    if (isUpdate) {
      setName(data.name);
      setDescription(data.description);
      setMilestone(data.milestone);
      setStatus(data.status);
      setNumber(data.number);
      setDuedate(new Date(data.duedate).toISOString().split('T')[0]);
    }
  }, [isUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSuccess({
      name,
      description,
      milestone,
      status,
      number,
      duedate,
    });
    // Handle form submission logic here
  };

  const getStatusItems = () => {
    switch (milestone) {
      case 'Offre acceptée':
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
            <MenuItem value="Acceptée">Acceptée</MenuItem>
          </TextField>
        );
      case 'Prise de mesure définitive':
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

            <MenuItem value="Planifié">Planifié</MenuItem>
            <MenuItem value="Effectué">Effectué</MenuItem>
            <MenuItem value="En Attente">En Attente</MenuItem>
          </TextField>
        );

      case 'Conception et Validation':
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
            <MenuItem value="En cours">En cours</MenuItem>
            <MenuItem value="La conception est terminée">La conception est terminée</MenuItem>
          </TextField>
        );
      case 'Production des films Opaq':
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

            <MenuItem value="Planifié">Planifié</MenuItem>
            <MenuItem value="En Attente">En Attente</MenuItem>
            <MenuItem value="En cours">En cours</MenuItem>
          </TextField>
        );
      case 'Contrôle Qualité':
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

            <MenuItem value="En Attente">En Attente</MenuItem>
            <MenuItem value="Validé">Validé</MenuItem>
          </TextField>
        );
      case 'Préparation du chantier':
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

            <MenuItem value="Effectué">Effectué</MenuItem>
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

            <MenuItem value="Planifié">Planifié</MenuItem>
            <MenuItem value="En Attente">En Attente</MenuItem>
            <MenuItem value="En cours">En cours</MenuItem>
          </TextField>
        );
      case 'Projet terminé':
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

            <MenuItem value="Effectué">Effectué</MenuItem>
          </TextField>
        );
      default:
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
          </TextField>
        );
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm">
      <DialogTitle>
        <Typography variant="h4">{title}</Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 4 }}>
          <form onSubmit={handleSubmit} id="form1">
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
              <MenuItem value="Offre acceptée">Offre acceptée</MenuItem>
              <MenuItem value="Prise de mesure définitive">Prise de mesure définitive</MenuItem>
              <MenuItem value="Conception et Validation">Conception et Validation</MenuItem>
              <MenuItem value="Production des films Opaq">Production des films Opaq</MenuItem>
              <MenuItem value="Contrôle Qualité">Contrôle Qualité</MenuItem>
              <MenuItem value="Préparation du chantier">Préparation du chantier</MenuItem>
              <MenuItem value="Installation">Installation</MenuItem>
              <MenuItem value="Projet terminé">Projet terminé</MenuItem>
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
        <Button form="form1" type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          {isUpdate ? 'Update' : 'Create'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewProject;
