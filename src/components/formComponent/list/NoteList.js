import React from 'react'
import { Typography, IconButton, AccordionDetails, AccordionSummary, Accordion, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const NoteList = props => (
  <>

    {props.users.length > 0 ? (
      props.users.map(user => (
        <Accordion key={user.id}>
          <AccordionSummary
            expandIcon={
              <>
                <ExpandMoreIcon />
              </>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container
              direction="row"
              justify="space-between"
              alignItems="center">
              <Typography >{user.name}</Typography>
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

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {user.description}
            </Typography>
          </AccordionDetails>



        </Accordion>
      ))
    ) : (
        <p>Lista de notas vacia</p>

      )}

  </>
)

export default NoteList
