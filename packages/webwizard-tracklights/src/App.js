import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import StickyFooter from './partials/StickyFooter';
import PaperTest from './partials/test-paper/latest';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <PaperTest />
        <StickyFooter />
      </div>
    </React.Fragment>
  );
}

export default App;
