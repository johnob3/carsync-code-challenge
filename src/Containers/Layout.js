
import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, CssBaseline, Divider, Drawer, Hidden, IconButton, Toolbar, Typography, Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {drawerWidth,navbarBGColor,sidebarBGColor} from '../Constants/config';

function Layout(props) {

  const { sidebar, main } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Grid className={classes.toolbar} container direction="row" alignItems="center" justify="center">
        <Typography className={classes.helperText}>Insert batch text here</Typography>
      </Grid>
      <Divider />
      {sidebar}
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/*navbar*/}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Carsync Code Challenge
          </Typography>
        </Toolbar>
      </AppBar>
      {/* sidebar */}
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {/* map holder */}
      <main className={classes.content}>
        {main}
      </main>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    backgroundColor: navbarBGColor
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: sidebarBGColor,
    display: 'flex',
    alignItems: 'center',
    padding: '50px 5px 0px 5px',
  },
  content: {
    flexGrow: 1,
  },
  helperText: {
    color: 'white'
  }
}));

Layout.propTypes = {
  sidebar: PropTypes.element,
  main: PropTypes.element
};

export default Layout;