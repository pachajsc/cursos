import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddMarkForm'
import EditUserForm from './forms/EditMarkForm'
import UserTable from './list/MarkList'
import { SideBarActionsContext } from '../../contexts/sideBarActionsContext';

const MarkersComponent = () => {
	 
	 const videoMarkData = [
	 	{ id: 1,  description: 'descripcion 1', time:20 },
	 	{ id: 2,  description: 'descripcion 2', time:30 },
	 	{ id: 3,  description: 'descripcion 3', time:40 },
	 ]

	const initialFormState = { id: null, description: '', time: '' }

	// Setting state
	const [users, setUsers] = useState(videoMarkData)
	const [currentUser, setCurrentUser] = useState(initialFormState)
	const [editing, setEditing] = useState(false)
    const contextSide = React.useContext(SideBarActionsContext);

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
        setUsers([...users, user])
        contextSide.setAddMarker(false)
        contextSide.setmarkTime(false)
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)
        contextSide.setAddMarker(false)
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)
		contextSide.setAddMarker(true)

		setCurrentUser({ id: user.id, time: user.time, description: user.description })
    }
    
    const handleEdit = () =>{
        setEditing()
        contextSide.setAddMarker(false)
    }
    const handleCancel = () =>{
        contextSide.setmarkTime('')
       contextSide.setAddMarker(false)
    }

	return (
		<div className="container">
			<div>

				{contextSide.addMarker && (
					<div className="mb-4">
						{editing ? (
							<Fragment>

								<EditUserForm
									editing={editing}
									setEditing={handleEdit}
									currentUser={currentUser}
									updateUser={updateUser}
								/>
							</Fragment>
						) : (
								<Fragment>
									<AddUserForm addUser={addUser} onClose={handleCancel} />
								</Fragment>
							)}
					</div>
				)}


				<div className="flex-large">
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} listPosition={contextSide.handleListPosition}/>
				</div>
			</div>
		</div>
	)
}

export default MarkersComponent
