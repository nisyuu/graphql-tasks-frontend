import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddTask() {
  const [open, setOpen] = useState(false);
	const [name, setName] = useState('');
	const [dueDate, setDueDate] = useState('');
	const [description, setDescription] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" sx={{ width: '270px' }} onClick={handleClickOpen}>
        Add Task
      </Button>
      <Dialog
				fullWidth={true}
				maxWidth='sm'
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="normal"
            id="name"
            label="Task Name"
            fullWidth
						value={name}
						onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
						id="due-date"
            margin="normal"
            label="Due Date"
            fullWidth
						placeholder='YYYY-MM-DD'
						value={dueDate}
						onChange={(e) => setDueDate(e.target.value)}
          />
          <TextField
            margin="normal"
            id="description"
            label="Description"
            fullWidth
						multiline
						rows={4}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
