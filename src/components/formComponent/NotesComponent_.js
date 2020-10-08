import React from 'react';
import {Grid, TextField, Button } from '@material-ui/core';
import {} from '@material-ui/icons';
const NotesComponent = () => {
    return (
        <>
            <form noValidate autoComplete="off">
                <Grid container className="mt-4">
                    <Grid sm={12} className="mb-3">
                        <TextField
                            autoFocus
                            id="input-with-icon-textfield"
                            variant="outlined"
                            label="Nombre"
                            size="small"
                            
                        />
                    </Grid>
                    <Grid sm={8} className="mb-4">
                        <TextField id="outlined-basic" label="Descripción" variant="outlined" multiline fullWidth size="small"
                            rows={4} />
                    </Grid>
                    <Grid sm={12}>
                        <Button color="primary" variant="contained">Guardar</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

export default NotesComponent;
