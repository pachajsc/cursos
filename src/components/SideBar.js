import React from 'react';
import {NotesComponent,ListFiles, MarkersComponent} from '../components'
import {AntTab, AntTabs, a11yProps, TabPanel} from './Tabs'
import {Typography, makeStyles} from '@material-ui/core';
import ResizePanel from "react-resize-panel";
import { SideBarActionsContext } from '../contexts/sideBarActionsContext';
import { ListItemsContext } from '../contexts/listItemsContext';
import DesignIcon from '../assets/images/icon.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  padding: {
    padding: theme.spacing(3),
  },
  contentTabs: {
    backgroundColor: theme.palette.background.paper,
    minHeight:'400px'
  },
  tabContainer: {
    padding: '20px 20px 40px 20px',
    
  },
  iconTitle:{
    maxWidth:40,
    display:'inline',
    marginRight:5,
    position:'relative',
    top:12
  },
  
}));

const SideBar = () => {
  const contextSide = React.useContext(SideBarActionsContext);
  const context = React.useContext(ListItemsContext);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      {contextSide.openSide && (
        <ResizePanel direction="w" style={{ width: '3600px' }} >
          <div className={"panel sidebar sidebar-right sidebar-right__active"}>
            <Typography components={'h2'} variant="h6" className="mb-3" color="primary"><img src={DesignIcon} alt="icon" className={classes.iconTitle}/>{context.courses.title}</Typography>
            <div className={classes.root}>
              <div className={classes.contentTabs}>
                <AntTabs className={classes.menuTabs}  value={value} onChange={handleChange} aria-label="ant example">
                  <AntTab  label="Notas" {...a11yProps(0)} />
                  <AntTab  label="Marcadores" {...a11yProps(1)} />
                  <AntTab  label="Archivos y Enlaces" {...a11yProps(2)} />
                </AntTabs >
                <div className={classes.tabContainer}>
                  <TabPanel value={value} index={0}>
                    <NotesComponent/>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <MarkersComponent/>
                </TabPanel>
                  <TabPanel value={value} index={2}>
                    <ListFiles/>
                </TabPanel>
                </div>
              </div>
            </div>


          </div>
        </ResizePanel>
      )}
    </>
  );
}

export default SideBar;
