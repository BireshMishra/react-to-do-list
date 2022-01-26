import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: 'black',
  },
  link: {
    textDecoration: 'none',
  },
}));

export default function AppNavigator() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.AppBar} position="fixed">
        <Toolbar>
          <Link to="/" className={classes.link}></Link>
          <Typography variant="h6">Pokedex</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
