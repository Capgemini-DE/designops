import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  tooltext: {
    paddingLeft: theme.spacing(55),
  },
  toolBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '100%',
    position: 'absolute',
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(0, 3),
  },
}));

const AppHeader = (props) => {
  const classes = useStyles();
  const {
    title = 'Demo Page',
    logoSource = 'https://www.workfront.com/sites/default/files/2020-05/Capgemini_white-01.png',
    className,
  } = props;

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classNames('bg-primary', classes.toolBar, className)}>
        <div className={classes.logo}>
          <img
            data-testid="image"
            src={logoSource}
            width="150"
            alt="Capgemini"
          />
        </div>
        <Typography data-testid="title" variant="h6">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
