import React, { useState, useEffect } from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
const EditMarkForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateUser(user.id, user)
      }}
    >
      <Grid container spacing={2} className="mt-1">
				
				<Grid item xs={12}>
					<TextField autoFocus variant="outlined" label="Descripcion" type="text" name="description" value={user.description} onChange={handleInputChange} fullWidth multiline rows={4} size="small" />
				</Grid>
				<Grid item xs={12}>
				<Button variant="contained"  onClick={() => props.setEditing(false)} className="button muted-button mr-1" size="small">Cancelar</Button>
        <Button variant="contained" color="primary" type="submit" size="small">Guardar</Button>
				</Grid>
			</Grid>
    
    </form>
  )
}

export default EditMarkForm
