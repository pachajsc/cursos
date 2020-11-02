import React from 'react';
import clsx from 'clsx';
import { ListItems, SideBar, ProgressBar, NavBar, PaginatorButtons, ContentLayout } from '../components'
import { Drawer, Typography, Divider, Grid, Hidden } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import DesignIcon from '../assets/images/icon.svg'
import { ListItemsContext } from '../contexts/listItemsContext';
import { SideBarActionsContext } from '../contexts/sideBarActionsContext';
import { DataActionsContext } from '../contexts/dataContext';
import {useStyles} from './style.js'

const Layout = (props) => {
  const context = React.useContext(ListItemsContext);
  const contextSide = React.useContext(SideBarActionsContext);
  const contextData = React.useContext(DataActionsContext);
  const classes = useStyles();
  const handleReset = () => {
    contextSide.handleDrawerClose()
    context.handleResetTopic()
  }

  return (
    <Grid className={classes.root}>
      {contextData.courses && (<>
        <CssBaseline />
        <NavBar />
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
            {/* context.checked.length === context.maxSubTopics  */}
            <ProgressBar value={Math.ceil(((context.selectedTopic + 1) / (context.maxTopics)) * 100)} />
          </Grid>
          <Divider />
          <Grid container
            direction="row"
            justify={contextSide.open ? "flex-start" : "flex-end"}
            alignItems="center" className={classes.contentTitle}>
            <div style={{ cursor: 'pointer' }} onClick={handleReset}><Typography components={'h2'} variant="h6" className="mb-3" color="primary"><img src={DesignIcon} alt="icon" className={classes.iconTitle} />{contextSide.open && contextData.courses.title}</Typography></div>
          </Grid>
          <Divider />
          <Grid style={contextSide.open ? { overflow: 'auto' } : { overflow: 'hidden' }}>
            <ListItems />
          </Grid>
        </Drawer>
        <Grid className={classes.main}>
          {props.children}
          <PaginatorButtons />
        </Grid>
        <Hidden smDown><SideBar /></Hidden>
      </>)}
    </Grid>
  );
}

export default Layout

