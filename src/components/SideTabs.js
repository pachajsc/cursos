import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));


const SideTabs = (props) => {
  const classes = useStyles();
 

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        
        {props.children}
       
      </div>
    </div>
  );
}

export default SideTabs