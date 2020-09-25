import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import Checkbox from '@material-ui/core/Checkbox';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import ProgressBar from './../components/ProgressBar'
import VideocamIcon from '@material-ui/icons/Videocam';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
//import ImageLogo from './../assets/images/logo.png'
import { courses } from '../mock/courses'
import LinkIcon from '@material-ui/icons/Link';
import PrintIcon from '@material-ui/icons/Print';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden'
  },
  contentNavBar: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  list: {
    padding: '0',

  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  listText: {
    margin: '0',
    position: 'relative',
    right: '2px',
  },
  listSelected: {
    borderLeft: '3px solid #691196'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),


  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    width: '180px',
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: '-110px'

  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    height: '100vh',
    width: '5000px',
    overflow: 'auto',
    flexGrow: 1,
    padding: '20px 20px 70px 20px',
  },
  bottomBar: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    bottom: 0,
    position: 'fixed',
    width: '100%',
    backgroundColor: '#fff',
    padding: '10px 30px',
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    marginLeft: '-26px'
  },
  pagination: {
    position: 'fixed',
    right: '46px',
  },
  logo: {
    maxWidth: '120px'
  }
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [openSide, setOpenSide] = React.useState(false);
  const [checked, setChecked] = React.useState([0]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [openExpand, setOpenExpand] = React.useState(true);

  const handleClick = () => {
    setOpenExpand(!openExpand);
  };

  const handleToggle = (value) => () => {
    setSelectedIndex(value);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setOpenExpand(true)
  };

  const handleDrawerCloseAll = () => {
    setOpen(false);
    setOpenSide(false);
    setOpenExpand(true)
  };
  const handleCommentsOpen = () => {
    setOpenSide(!openSide);

  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <div className={classes.contentNavBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >

              <MenuIcon />
            </IconButton>
            <IconButton onClick={handleDrawerClose} color="inherit">
              {open && <ChevronLeftIcon fontSize="large"/>}
            </IconButton>

          </Toolbar>
          <Typography variant="h4" component="h1">Desigh Thinking</Typography>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerCloseAll}
            edge="start"
            className={classes.menuButton}
          >

            <AspectRatioIcon />
          </IconButton>
        </div>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <ProgressBar />


        </div>
        <Divider />
        <div style={open ? {overflow:'auto'} : {overflow:'hidden'}}>
        {courses[0].topics.map((topic, value) => (
          <>
        {open  ? (
          <ListItem button onClick={courses[0].topics[value].subTopics.length != 0 ? ()=>handleClick(value) : null}>
            <ListItemText primary={topic.title} />
            {courses[0].topics[value].subTopics.length != 0 ? (
              <>
              {openExpand ? <ExpandLess /> : <ExpandMore />}
              </>
            ): null}
            
          </ListItem>
        ) : (
            <ListItem >
              <ListItemText primary={topic.title} />
            </ListItem>
          )}
        <Divider />
        <Collapse in={openExpand} timeout="auto" >
          <List className={classes.list}>
            {courses[0].topics[value].subTopics.map((subtopic, value) => {
              return (
                <>
                  <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)} className={selectedIndex === value ? classes.listSelected : null} selected={selectedIndex === value}>
                    <ListItemIcon className={classes.listItem}>

                      {open && (<><VideocamIcon fontSize="small" /><ListItemText  primary={subtopic.title} className="ml-1" /></>)}
                      <div></div>
                      <FormControlLabel
                        control={<Checkbox color="primary" icon={<CheckCircleOutlineIcon fontSize="small" />} checkedIcon={<CheckCircleIcon fontSize="small"/>} name="checkedH" />}
                        className={classes.listText}
                        edge="end"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                       
                      />
                      {/* <Checkbox
                        color="primary"
                        className={classes.listText}
                        edge="end"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      /> */}
                    </ListItemIcon>

                  </ListItem>
                  <Divider />
                </>
              );
            })}
          </List>
         
        </Collapse>
        </>
        ))}
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="p">{courses[0].topics[0].subTopics[selectedIndex].slug}</Typography>

        <div className={classes.bottomBar}>
          <div>
          <IconButton
            color="inherit"
            edge="start"
            className="mr-2"
          ><PrintIcon/></IconButton>
          <IconButton
            color="inherit"
            edge="start"
            className="mr-2"
          ><LinkIcon /></IconButton>
          <IconButton
            color="inherit"
            onClick={handleCommentsOpen}
            edge="start"
          >
            <RateReviewIcon />
          </IconButton>
          </div>
          <div className={classes.pagination}>
            <IconButton
              className="mr-2"
              color="inherit"
              edge="start"
              disabled
            > <ChevronLeftIcon fontSize="large" /></IconButton>
            <IconButton
              color="inherit"
              edge="start"
            ><ChevronRightIcon fontSize="large" /></IconButton>
          </div>


        </div>
      </main>
      <div className={openSide ? "sidebar-right sidebar-right__active" : "sidebar-right"}>
        {openSide && (<>
          <IconButton
            onClick={handleCommentsOpen}
            color="inherit"
            edge="start"
            className="icon-close"
          ><CloseIcon />
          </IconButton>
          <Typography variant="h5">Notas</Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container className="mt-4">
              <Grid sm={12} className="mb-3">
                <TextField id="outlined-basic" label="Nombre" variant="outlined" fullWidth autoFocus />
              </Grid>
              <Grid sm={12} className="mb-4">
                <TextField id="outlined-basic" label="Descripción" variant="outlined" multiline fullWidth
                  rows={4} />
              </Grid>
              <Grid sm={12}>
                <Button color="primary" variant="contained">Guardar</Button>
              </Grid>
            </Grid>
          </form>
        </>)}
      </div>
    </div>

  );
}
