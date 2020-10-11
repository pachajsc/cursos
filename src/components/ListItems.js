import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ListSubItems} from '../components'
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
 
});

const ListItems = () => {

  const context = React.useContext(ListItemsContext);
  const contextSide = React.useContext(SideBarActionsContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {context.courses.topics.map((topic, index) => (
        <>   
            <Accordion expanded={context.expanded === index} onChange={context.handleChange(index)}>
              <AccordionSummary
                className={classes.accordionSummary}
                expandIcon={<ExpandMore />}
                onClick={context.courses.topics[index].subTopics.length !== 0 ? context.handleTopic(index) : null}
              >
                {contextSide.open && <Typography variant={'h6'} components={'h2'}>{topic.title}</Typography>}
              </AccordionSummary>
              <AccordionDetails className={classes.accordionContent}>
                <List className={classes.list}>
                  {context.courses.topics[index].subTopics.map((subtopic, subindex) => {
                    
                    return (
                      
                      <ListSubItems topicIndex={index} value={subindex} title={subtopic.title} key={subindex}/>
                      
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