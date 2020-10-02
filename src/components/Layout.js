import React from 'react';
import clsx from 'clsx';
import { ListItems, SideBar, ProgressBar, NavBar, PaginatorButtons } from '../components'
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Typography, Divider, Grid} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import DesignIcon from '../assets/images/icon.svg'
import { ListItemsContext } from '../contexts/listItemsContext';
import { SideBarActionsContext } from '../contexts/sideBarActionsContext';
const drawerWidth = 320;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden'
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
  main: {
    height: '100vh',
    width: '5000px',
    overflow: 'auto',
    flexGrow: 1,
    padding: '20px 20px 70px 20px',
  },
  iconTitle: {
    maxWidth: 40,
    display: 'inline',
    margin: '0 5px 0 0',
    position: 'relative',
    top: 12
  },
  contentTitle: {
    padding: '5px 11px 5px 10px'
  },
  videoWrapper: {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0
  },
  videoIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%;',
    height: '100%'
  }

}));

const Layout = () => {

  const context = React.useContext(ListItemsContext);
  const contextSide = React.useContext(SideBarActionsContext);

  const classes = useStyles();
  

  return (
    <Grid className={classes.root}>
      <CssBaseline />
      
      <NavBar/>
      
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: contextSide.open,
          [classes.drawerClose]: !contextSide.open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: contextSide.open,
            [classes.drawerClose]: !contextSide.open,
          }),
        }}
      >
        <Grid className={classes.toolbar}>
          <ProgressBar value={Math.ceil(((context.selectedTopic + 1) / (context.maxTopics)) * 100)} />
        </Grid>
        <Divider />
        <Grid container
          direction="row"
          justify={contextSide.open ? "flex-start" : "flex-end"}
          alignItems="center" className={classes.contentTitle}><Typography components={'h2'} variant="h6" className="mb-3" color="primary"><img src={DesignIcon} alt="icon" className={classes.iconTitle} />{contextSide.open && 'Design Thinking'}</Typography></Grid>
        <Divider />
        <Grid style={contextSide.open ? { overflow: 'auto' } : { overflow: 'hidden' }}>
          <ListItems/>
        </Grid>
      </Drawer>
      
      <Grid className={classes.main}>

        <div className={classes.toolbar} />
        <div className={classes.videoWrapper}>
          <iframe className={classes.videoIframe} width="560" height="315" src={context.courses[0].topics[context.selectedTopic].subTopics[context.selectedSubtopic].video !== "" ? context.courses[0].topics[context.selectedTopic].subTopics[context.selectedSubtopic].video + "?autoplay=1" : null} frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          {context.courses[0].topics[context.selectedTopic].subTopics[context.selectedSubtopic].video ? "" : (<Typography variant="p">{context.courses[0].topics[context.selectedTopic].subTopics[context.selectedSubtopic].slug}</Typography>)}
        </div>
        
        <Grid container
          direction="row"
          justify="space-between"
          alignItems="start" className='mt-4'>
          <Typography variant={'h6'}><b>{context.courses[0].topics[context.selectedTopic].title}</b> - {context.courses[0].topics[context.selectedTopic].subTopics[context.selectedSubtopic].title}</Typography>
          <PaginatorButtons/>
        </Grid>

      </Grid>
      <SideBar/>
    </Grid>
  );
}

export default Layout

