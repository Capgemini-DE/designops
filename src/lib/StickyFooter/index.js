import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const classNames = require('classnames');

function Copyright({ copyright }) {
  return (
    <Typography variant="body2" color="textSecondary">
      <Link color="inherit" href="https://www.capgemini.com/au-en">
        {copyright ? copyright : 'Capgemini DesignOps'}
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    padding: theme.spacing(3, 2),
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
}));

export default function StickyFooter({
  copyright,
  footerText,
  position = 'center',
  children,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classNames(classes.footer, classes[position])}>
        <Container fullWidth>
          <Typography variant="body1" data-testid="footer">
            {footerText ? footerText : 'Capgemini DesignOps Demo Project'}
          </Typography>
          {children}
          <Copyright data-testid="copyright" copyright={copyright} />
        </Container>
      </footer>
    </div>
  );
}
