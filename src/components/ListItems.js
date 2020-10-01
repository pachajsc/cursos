import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel, Divider, ListItem, List, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import {Videocam, ExpandMore, CheckCircleOutline, CheckCircle} from '@material-ui/icons';

import { courses } from '../mock/courses';

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

const ListItems = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const [expanded, setExpanded] = React.useState(0);
  console.log("expand", props.selectedTopic)
  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : true);
  };

  React.useEffect(() => {
    setExpanded(props.selectedTopic);
  });

  

  return (
    <div className={classes.root}>
      {courses[0].topics.map((topic, valueTopic) => (
        
        <>   
            <Accordion expanded={expanded === valueTopic} onChange={handleChange(valueTopic)}>
              <AccordionSummary
                className={classes.accordionSummary}
                expandIcon={<ExpandMore />}
                onClick={courses[0].topics[valueTopic].subTopics.length !== 0 ? props.handleTopic(valueTopic) : null}
              >
                <Typography variant={'h6'} components={'h2'}>{topic.title}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionContent}>
                <List className={classes.list}>
                  {courses[0].topics[valueTopic].subTopics.map((subtopic, value) => {
                    return (
                      <>
                        <Divider />
                        <ListItem key={value} role={undefined} dense button onClick={props.handleSubTopic(value)} className={props.selectedSubtopic === value  ? classes.listSelected : null} selected={props.selectedSubtopic === value}>
                          <ListItemIcon className={classes.listItem}>

                            {props.open && (<><Videocam fontSize="small" /><ListItemText primary={subtopic.title} className="ml-1" /></>)}
                            <div></div>
                            <FormControlLabel
                              control={<Checkbox className={classes.checkItem} color="primary" icon={<CheckCircleOutline fontSize="small" />} checkedIcon={<CheckCircle fontSize="small" />} name="checkedH" />}
                              className={classes.listText}
                              edge="end"
                              checked={checked.indexOf(value) !== -1}
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