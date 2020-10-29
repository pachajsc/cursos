import React from 'react'
import { Typography, IconButton, Grid,Divider } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const NoteList = props => (
  <>

    {props.users.length > 0 ? (
      props.users.map(user => (
        <div key={user.id}>
          
            <Grid container
              direction="row"
              justify="space-between"
              alignItems="center">
              <Typography style={{overflowWrap: 'break-word', width:'74%'}}>{user.description}</Typography>
              <Grid item>
                <IconButton
                  onClick={() => {
                    props.editRow(user)
                  }}
                  className="button muted-button"
                >
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={() => props.deleteUser(user.id)}
                  className="button muted-button"
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
            <Divider/>

          </div>
          
      ))
    ) : (
        <p>Lista de notas vacia</p>

      )}

  </>
)

export default NoteList
