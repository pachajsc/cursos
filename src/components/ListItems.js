import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import VideocamIcon from '@material-ui/icons/Videocam';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { courses } from '../mock/courses'
const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: 0,
    backgroundColor: '#f7f7f7'
  },
  accordionContent: {
    padding: 0
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
});

export default function ListItems() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [openExpand, setOpenExpand] = React.useState(false);
  const [checked, setChecked] = React.useState([0]);
  const handleClick = (value) => {
    setOpenExpand(!openExpand);
  };

  const handleToggle = (value) => () => {
    setSelectedIndex(value);
  };
  return (
    <div className={classes.root}>
    
      {courses[0].topics.map((topic, value) => (
        <>
        {courses[0].topics[value].subTopics.length !== 0 ? (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions1-header"
          >
            <Typography variant="h6" component="h2">{topic.title}</Typography>
          </AccordionSummary>
         
          <AccordionDetails className={classes.accordionContent}>
            <List className={classes.list}>
              {courses[0].topics[value].subTopics.map((subtopic, value) => {
                return (
                  <>
                  
                    <Divider />
                    <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)} className={selectedIndex === value ? classes.listSelected : null} selected={selectedIndex === value}>
                      <ListItemIcon className={classes.listItem}>

                        {open && (<><VideocamIcon fontSize="small" /><ListItemText primary={subtopic.title} className="ml-1" /></>)}
                        <div></div>
                        <FormControlLabel
                          control={<Checkbox color="primary" icon={<CheckCircleOutlineIcon fontSize="small" />} checkedIcon={<CheckCircleIcon fontSize="small" />} name="checkedH" />}
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

        ):(null)}
        </>
      ))}

     



    </div>
  );
}
