import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SelectorGenero() {
  const classes = useStyles();
  const [genero, setGenero] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setGenero(event.target.value);
    localStorage.setItem("genero_seleccionado",event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={genero}
          onChange={handleChange}
        >
          <MenuItem value={"Masculino"}>Masculino</MenuItem>
          <MenuItem value={"Femenino"}>Femenino</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}