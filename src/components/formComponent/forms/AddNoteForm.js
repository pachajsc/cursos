import React, { useState } from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
const AddNoteForm = props => {
	const initialFormState = { id: null, description: '' }
	const [user, setUser] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.description) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<Grid container spacing={2} >
				
				<Grid item xs={12}>
					<TextField variant="outlined" label="Descripcion" type="text" name="description" value={user.description} onChange={handleInputChange} fullWidth multiline rows={4} size="small" />
				</Grid>
				<Grid item xs={12}>
				<Button variant="contained"  onClick={props.onClose} className="button muted-button mr-1" size="small">Cancelar</Button>
				<Button variant="contained" color="primary" type="submit" size="small">Guardar</Button>
				</Grid>
				
			</Grid>
		</form>
	)
}

export default AddNoteForm
