import React from 'react';
import { NotesComponent, ListFiles, MarkersComponent } from '../../../components'
import { AntTab, AntTabs, a11yProps, TabPanel } from '../../../components/Tabs'
import { Typography, makeStyles } from '@material-ui/core';
import { SideBarActionsContext } from '../../../contexts/sideBarActionsContext';
import { ListItemsContext } from '../../../contexts/listItemsContext';
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
  const context = React.useContext(ListItemsContext);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <> 
      <Typography components={'h2'} variant="h6" className="mb-3" color="primary"><img src={DesignIcon} alt="icon" className={classes.iconTitle} />{context.courses.title}</Typography>
      <div className={classes.root}>
        <div className={classes.contentTabs}>
          <AntTabs className={classes.menuTabs} value={value} onChange={handleChange} aria-label="ant example">
            <AntTab label="Contenido" {...a11yProps(0)} />
            <AntTab label="Notas" {...a11yProps(1)} />
            <AntTab label="Marcadores" {...a11yProps(2)} />
            <AntTab label="Archivos y Enlaces" {...a11yProps(3)} />
          </AntTabs >
          <div className={classes.tabContainer}>
            <TabPanel value={value} index={0}>
              {props.children}
            </TabPanel>
            <TabPanel value={value} index={1}>
              <NotesComponent />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <MarkersComponent />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <ListFiles />
            </TabPanel>
          </div>
        </div>
      </div>
    </>
  );
}

export default TabsMobile;
