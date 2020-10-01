import React from 'react';
import clsx from 'clsx';
import { ListItems, SideBar, ProgressBar, NavBar } from '../components'
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Typography, Divider, Grid, IconButton, Button } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import CssBaseline from '@material-ui/core/CssBaseline';
import { courses } from '../mock/courses'
import DesignIcon from '../assets/images/icon.svg'
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
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openSide, setOpenSide] = React.useState(true);
  const [openExpand, setOpenExpand] = React.useState(true);
  const [selectedSubtopic, setSelectedSubtopic] = React.useState(0);
  const [selectedTopic, setSelectedTopic] = React.useState(0);

  const maxTopics = courses[0].topics.length;
  const maxSubTopics = courses[0].topics[selectedTopic].subTopics.length;

  console.log("total topic:", maxTopics, "total Subtopic:", maxSubTopics)
  console.log("topic:", selectedTopic, "Subtopic:", selectedSubtopic)

  const handleNext = () => {
    if ((selectedSubtopic + 1) >= maxSubTopics) {
      setSelectedTopic((prevActiveStep) => prevActiveStep + 1);
      setSelectedSubtopic(0)
    } else {
      setSelectedSubtopic((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if ((selectedSubtopic) == 0) {
      setSelectedTopic((prevActiveStep) => prevActiveStep - 1);
      setSelectedSubtopic(courses[0].topics[selectedTopic - 1].subTopics.length - 1)
    } else {
      setSelectedSubtopic((prevActiveStep) => prevActiveStep - 1);
    }

  };

  const handleSubTopic = (value) => () => {
    setSelectedSubtopic(value);
    ;
  };
  const handleTopic = (valueTopic) => () => {
    setSelectedTopic(valueTopic);
    setSelectedSubtopic(0);
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
    <Grid className={classes.root}>
      <CssBaseline />
      <NavBar handleCommentsOpen={handleCommentsOpen} handleDrawerOpen={handleDrawerOpen} open={open} handleDrawerClose={handleDrawerClose} handleDrawerCloseAll={handleDrawerCloseAll} />
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
        <Grid className={classes.toolbar}>
          <ProgressBar value={Math.ceil(((selectedTopic + 1) / (maxTopics)) * 100)} />
        </Grid>
        <Divider />
        <Grid container
          direction="row"
          justify={open ? "flex-start" : "flex-end"}
          alignItems="center" className={classes.contentTitle}><Typography components={'h2'} variant="h6" className="mb-3" color="primary"><img src={DesignIcon} alt="icon" className={classes.iconTitle} />{open && 'Design Thinking'}</Typography></Grid>
        <Divider />
        <Grid style={open ? { overflow: 'auto' } : { overflow: 'hidden' }}>
          <ListItems open={open} handleSubTopic={handleSubTopic} handleTopic={handleTopic} selectedSubtopic={selectedSubtopic} selectedTopic={selectedTopic} />
        </Grid>
      </Drawer>
      <Grid className={classes.main}>
        <div className={classes.toolbar} />
        <div className={classes.videoWrapper}>
          <iframe className={classes.videoIframe} width="560" height="315" src={courses[0].topics[selectedTopic].subTopics[selectedSubtopic].video !== "" ? courses[0].topics[selectedTopic].subTopics[selectedSubtopic].video + "?autoplay=1" : null} frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          {courses[0].topics[selectedTopic].subTopics[selectedSubtopic].video ? null : (<Typography variant="p">{courses[0].topics[selectedTopic].subTopics[selectedSubtopic].slug}</Typography>)}
        </div>
        <Grid container
          direction="row"
          justify="space-between"
          alignItems="start" className='mt-4'>
          <div >
            <Typography variant={'h6'}><b>{courses[0].topics[selectedTopic].title}</b> - {courses[0].topics[selectedTopic].subTopics[selectedSubtopic].title}</Typography><br />
          </div>
          <div >
            <Button
              onClick={handleBack}
              disabled={selectedTopic === 0 && selectedSubtopic === 0 ? true : false}
              variant="contained"
              color="secondary"
              startIcon={<ChevronLeft fontSize="large" />}
            >Volver</Button>
            <Button
              variant="contained"
              className='ml-2'
              color="primary"
              onClick={handleNext}
              disabled={selectedTopic === (maxTopics - 1) && selectedSubtopic === (maxSubTopics - 1) ? true : false}
              endIcon={<ChevronRight fontSize="large" />}
            >Continuar</Button>
          </div>
        </Grid>
      </Grid>
      <SideBar openSide={openSide} closeSide={handleCommentsOpen} />
    </Grid>
  );
}

export default Layout

