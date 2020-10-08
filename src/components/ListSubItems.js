import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel, Divider, ListItem, List, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import {Videocam, ExpandMore, CheckCircleOutline, CheckCircle} from '@material-ui/icons';
import { ListItemsContext } from '../contexts/listItemsContext';
import { SideBarActionsContext } from '../contexts/sideBarActionsContext';

const useStyles = makeStyles({
 
  listItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  listSelected: {
    borderLeft: '3px solid #691196'
  },
  checkItem:{
    position: 'relative',
    left: '14px'
  }
  
});

const ListSubItems = (props) => {
  const [check, setCheck] = React.useState(props.view);

  const context = React.useContext(ListItemsContext);
  const contextSide = React.useContext(SideBarActionsContext);
  const classes = useStyles();

  console.log("items",context.selectedTopic, context.selectedSubtopic)

  return (
   
        <>
        <Divider />
        <ListItem key={props.value} role={undefined} dense button onClick={context.handleSubTopic(props.value)} className={context.selectedSubtopic === props.value  ? classes.listSelected : null} selected={context.selectedSubtopic === props.value}>
            <ListItemIcon className={classes.listItem}>

            {contextSide.open && (<><Videocam fontSize="small" /><ListItemText primary={props.title} className="ml-1" /></>)}
            <div></div>
            <FormControlLabel
                control={<Checkbox className={classes.checkItem} color="primary" icon={<CheckCircleOutline fontSize="small" />} checkedIcon={<CheckCircle fontSize="small" />} name="checkedH" />}
                edge="end"
                checked={check}
                tabIndex={-1}
                disableRipple

            />
            </ListItemIcon>
        </ListItem>
        </>
                   
  );
}

export default ListSubItems