import React from 'react';
import { NotesComponent, ListFiles, MarkersComponent } from '../../../components'
import { AntTab, AntTabs, a11yProps, TabPanel } from '../../../components/Tabs'
import { Typography, makeStyles } from '@material-ui/core';
import { DataActionsContext } from '../../../contexts/dataContext';
import { SideBarActionsContext } from '../../../contexts/sideBarActionsContext';
import DesignIcon from '../../../assets/images/icon.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  padding: {
    padding: theme.spacing(3),
  },
  contentTabs: {
    minHeight: '400px',
    paddingBottom:'200px'
  },

  iconTitle: {
    maxWidth: 40,
    display: 'inline',
    marginRight: 5,
    position: 'relative',
    top: 12
  },
  menuTabs:{
    marginBottom:'20px'
  }

}));

const TabsMobile = (props) => {
  const contextSide = React.useContext(SideBarActionsContext);
  const contextData = React.useContext(DataActionsContext);
  const classes = useStyles();
  



  return (
    <> 
      <Typography components={'h2'} variant="h6" className="mb-3" color="primary"><img src={DesignIcon} alt="icon" className={classes.iconTitle} />{contextData.courses.title}</Typography>
      <div className={classes.root}>
        <div className={classes.contentTabs}>
          <AntTabs className={classes.menuTabs} value={contextSide.valueTab} onChange={contextSide.handleChange} aria-label="ant example">
            <AntTab label="Contenido" {...a11yProps(0)} />
            <AntTab label="Marcadores" {...a11yProps(2)} />
            <AntTab label="Notas" {...a11yProps(1)} />
            
            <AntTab label="Archivos y Enlaces" {...a11yProps(3)} />
          </AntTabs >
          <div className={classes.tabContainer}>
            <TabPanel value={contextSide.valueTab} index={0}>
              {props.children}
            </TabPanel>
            <TabPanel value={contextSide.valueTab} index={1}>
              <MarkersComponent />
            </TabPanel>
            <TabPanel value={contextSide.valueTab} index={2}>
              <NotesComponent />
            </TabPanel>
            <TabPanel value={contextSide.valueTab} index={3}>
              <ListFiles />
            </TabPanel>
          </div>
        </div>
      </div>
    </>
  );
}

export default TabsMobile;
