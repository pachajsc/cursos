import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel, Divider, ListItem, List, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import {Videocam, ExpandMore, CheckCircleOutline, CheckCircle} from '@material-ui/icons';
import { ListItemsContext } from '../contexts/listItemsContext';
import { SideBarActionsContext } from '../contexts/sideBarActionsContext';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: 0,
    backgroundColor: '#f7f7f7'
  },
  accordionSummary: {
    padding: '0px 24px 0px 16px'
  },
  accordionContent: {
    padding: '0'
  },
  buttonList: {
    padding: '0 2px 0 16px'
  },
  list: {
    width: '100%'
  },
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

const ListItems = () => {

  const context = React.useContext(ListItemsContext);
  const contextSide = React.useContext(SideBarActionsContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {context.courses[0].topics.map((topic, valueTopic) => (
        
        <>   
            <Accordion expanded={context.expanded === valueTopic} onChange={context.handleChange(valueTopic)}>
              <AccordionSummary
                className={classes.accordionSummary}
                expandIcon={<ExpandMore />}
                onClick={context.courses[0].topics[valueTopic].subTopics.length !== 0 ? context.handleTopic(valueTopic) : null}
              >
                <Typography variant={'h6'} components={'h2'}>{topic.title}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionContent}>
                <List className={classes.list}>
                  {context.courses[0].topics[valueTopic].subTopics.map((subtopic, value) => {
                    return (
                      <>
                        <Divider />
                        <ListItem key={value} role={undefined} dense button onClick={context.handleSubTopic(value)} className={context.selectedSubtopic === value  ? classes.listSelected : null} selected={context.selectedSubtopic === value}>
                          <ListItemIcon className={classes.listItem}>

                            {contextSide.open && (<><Videocam fontSize="small" /><ListItemText primary={subtopic.title} className="ml-1" /></>)}
                            <div></div>
                            <FormControlLabel
                              control={<Checkbox className={classes.checkItem} color="primary" icon={<CheckCircleOutline fontSize="small" />} checkedIcon={<CheckCircle fontSize="small" />} name="checkedH" />}
                              className={classes.listText}
                              edge="end"
                              checked={context.checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple

                            />
                          </ListItemIcon>
                        </ListItem>
                      </>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>  
        </>
      ))}
    </div>
  );
}

export default ListItems