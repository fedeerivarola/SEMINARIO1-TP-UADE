import React from 'react';
import './AlimentosOpc.css'
import { List, ListItem, ListItemIcon, Checkbox, ListItemText, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

const AlimentosOpc = props => {

    let opciones = [{ id: 0, desc: 'Saludables' }, { id: 1, desc: 'Diabeticos' }, { id: 2, desc: 'Sin TACC' }, { id: 3, desc: 'Proteicos' }]
    
    return (
        <div>
            <div className="OpcAlimentos">
                <List>
                    {opciones.map((value) => {
                        const labelId = `checkbox-${value.id}`;
                        let check = true;

                        return (
                            // <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                            <ListItem key={value.id} role={undefined} dense button>
                                <ListItemIcon onClick={() => { check === true ? check = false : check = true }}>
                                    <Checkbox
                                        edge="start"
                                        checked={check}
                                        tabIndex={-1}
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`${value.desc}`} />
                            </ListItem>
                        );
                    })}
                </List>
            </div>
            <div className="RadioAlimentos">
                <RadioGroup className="RadioGroupAlimentos">
                    <FormControlLabel value="Permitir" control={<Radio checked={true}/>} label="Permitir seleccion" />
                    {/* <FormControlLabel value="Restringir" control={<Radio />} label="Restringir seleccion" /> */}
                </RadioGroup>
            </div>
        </div>
    );
}

export default AlimentosOpc;