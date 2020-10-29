import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddNoteForm'
import EditUserForm from './forms/EditNoteForm'
import UserTable from './list/NoteList'
import { Typography, Button, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
const NotesComponent = () => {
	// Data
	const usersData = [
		{ id: 1,  description: 'descripcion 1' },
		{ id: 2,  description: 'descripcion 2' },
		{ id: 3,  description: 'descripcion 3' },
	]

	const initialFormState = { id: null, name: '', description: '' }

	// Setting state
	const [users, setUsers] = useState(usersData)
	const [currentUser, setCurrentUser] = useState(initialFormState)
	const [editing, setEditing] = useState(false)
	const [addNotes, setAddNotes] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([...users, user])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)
		setAddNotes(true)

		setCurrentUser({ id: user.id, name: user.name, description: user.description })
	}

	return (
		<div className="container">
			<div>

				{addNotes && (
					<div className="mb-4">
						{editing ? (
							<Fragment>

								<EditUserForm
									editing={editing}
									setEditing={setEditing}
									currentUser={currentUser}
									updateUser={updateUser}
								/>
							</Fragment>
						) : (
								<Fragment>

									<AddUserForm addUser={addUser} onClose={()=> setAddNotes(false)} />
								</Fragment>
							)}
					</div>
				)}

				<Grid container
					direction="row"
					justify="space-between"
					alignItems="center"
					className="mb-3"
					>
					<Typography variant="p" component="h2" className="mb-2">Mis Notas</Typography>
					
					{!addNotes && 
					<Fab color="primary" aria-label="add" size="small" onClick={()=> setAddNotes(true)}>
						<AddIcon />
					</Fab>
					
					}
				</Grid>
				<div className="flex-large">
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default NotesComponent
