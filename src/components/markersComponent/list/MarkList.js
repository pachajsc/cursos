import React from 'react'
import { Typography, IconButton, Grid, Divider, ListItemIcon } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import { SideBarActionsContext } from '../../../contexts/sideBarActionsContext';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  timeText:{
    top: '10px',
    left: '5px',
    position: 'relative'
  },
  descriptionMark:{
    overflowWrap: 'break-word', 
    width: '74%', 
    cursor:'pointer',
    position:'relative',
    paddingLeft: '27px',
    marginTop: '8px'
  },
  iconMark:{
    position: 'absolute', 
    top: 0, 
    left:0,
    marginRight: 5 
  }
}))
const MarkList = props => {
  const classes = useStyles();
  const contextSide = React.useContext(SideBarActionsContext)
 
  return (
    <>

      {props.users.length > 0 ? (
        props.users.map((user, index) => (
          <div key={user.id}>
            <Typography variant="caption" className={classes.timeText}>00:{user.time ? user.time : contextSide.markTimePosition.time}hs</Typography>
            <Grid container
              direction="row"
              justify="space-between"
              >
                <Typography  className={classes.descriptionMark} onClick={()=>contextSide.handleMarkList(index, user.time)}>
                  <TurnedInIcon color={contextSide.activeMarkerList === index ? "primary" : "secondary"} size='small' className={classes.iconMark} />
                  {user.description}
                </Typography>
              
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
            <Divider />

          </div>

        ))
      ) : (
          <p>Lista de marcadores vacia</p>

        )}

    </>
  )
}
export default MarkList
