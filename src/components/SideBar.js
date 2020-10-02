import React from 'react';
import { TextField, Grid, Button, Typography, InputAdornment, makeStyles, Tab, Tabs } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import ResizePanel from "react-resize-panel";
import { SideBarActionsContext } from '../contexts/sideBarActionsContext';
import DesignIcon from '../assets/images/icon.svg'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  contentTabs: {
    backgroundColor: theme.palette.background.paper,
    minHeight:'500px'},
  tabContainer: {
    padding: 20
  },
  iconTitle:{
    maxWidth:40,
    display:'inline',
    marginRight:5,
    position:'relative',
    top:12
  }
}));

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (

        <Typography>{children}</Typography>

      )}
    </div>
  );
}
const SideBar = () => {
  const contextSide = React.useContext(SideBarActionsContext);
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
            <Typography components={'h2'} variant="h6" className="mb-3" color="primary"><img src={DesignIcon} alt="icon" className={classes.iconTitle}/>Design Thinking</Typography>
            <div className={classes.root}>
              <div className={classes.contentTabs}>
                <Tabs  value={value} onChange={handleChange} aria-label="ant example">
                  <Tab  label="Notas" {...a11yProps(0)} />
                  <Tab  label="Tab 2" {...a11yProps(1)} />
                  <Tab  label="Tab 3" {...a11yProps(2)} />
                </Tabs >
                <div className={classes.tabContainer}>
                  <TabPanel value={value} index={0}>
                    <form noValidate autoComplete="off">
                      <Grid container className="mt-4">
                        <Grid sm={12} className="mb-3">
                          <TextField
                            autoFocus
                            id="input-with-icon-textfield"
                            variant="outlined"
                            label="Nombre"
                            size="small"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <AccountCircle />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid sm={12} className="mb-4">
                          <TextField id="outlined-basic" label="Descripción" variant="outlined" multiline fullWidth size="small"
                            rows={4} />
                        </Grid>
                        <Grid sm={12}>
                          <Button color="primary" variant="contained">Guardar</Button>
                        </Grid>
                      </Grid>
                    </form>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    Page Two
                </TabPanel>
                  <TabPanel value={value} index={2}>
                    Page Three
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
