import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton} from '@material-ui/core';
import {Menu, ChevronLeft, AspectRatio, RateReview} from '@material-ui/icons';
import { SideBarActionsContext } from '../contexts/sideBarActionsContext';
import logo from '../assets/images/logo.png'

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
    margin:'0 20px 0 0'
  },
  hide: {
    display: 'none',
  },
  toolbar:{
    paddingLeft:'11px'
  },
  imageLogo:{
    maxWidth:120
  }

}));

const NavBar = () => {
  const contextSide = React.useContext(SideBarActionsContext);
  const classes = useStyles();
  return (
    <>
    <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: contextSide.open,
        })}
      >
        <div className={classes.contentNavBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={contextSide.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: contextSide.open,
              })}
            >
              <Menu/>
            </IconButton>
            <IconButton onClick={contextSide.handleDrawerClose} color="inherit">
              {contextSide.open && <ChevronLeft fontSize="large" />}
            </IconButton>

          </Toolbar>
          <img src={logo} alt="logo" className={classes.imageLogo}/>
          <div>
          <IconButton
              color="inherit"
              onClick={contextSide.handleCommentsOpen}
              edge="start"
            >
              <RateReview />
            </IconButton>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={contextSide.handleDrawerCloseAll}
            edge="start"
            className={classes.menuButton}
          >
            <AspectRatio />
          </IconButton>
          </div>
        </div>
      </AppBar>
    </>
  );
}

export default NavBar;
