import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 320;
const drawerWidthXs = '100%';
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
  },
 
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    [theme.breakpoints.down('xs')]: {
      width: drawerWidthXs,
    },
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    [theme.breakpoints.down('sm')]: {
      width: '110px',
    },
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
    overflow: 'hidden',
    flexGrow: 1,
    padding:'63px 0'

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
    height: 0,
  
  },
  
}));