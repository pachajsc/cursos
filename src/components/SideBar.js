import React from 'react';
import { TextField, Grid, Button, Typography, InputAdornment, withStyles, makeStyles, Tab, Tabs } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import ResizePanel from "react-resize-panel";
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


const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

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
const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);


const SideBar = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {props.openSide && (
        <ResizePanel direction="w" style={{ width: '3600px' }} >
          <div className={"panel sidebar sidebar-right sidebar-right__active"}>
            <Typography components={'h2'} variant="h6" className="mb-3" color="primary"><img src={DesignIcon} alt="icon" className={classes.iconTitle}/>Design Thinking</Typography>
            <div className={classes.root}>
              <div className={classes.contentTabs}>
                <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                  <AntTab label="Notas" {...a11yProps(0)} />
                  <AntTab label="Tab 2" {...a11yProps(1)} />
                  <AntTab label="Tab 3" {...a11yProps(2)} />
                </AntTabs>
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
