import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PicturePickerSlotMachine from './PicturePickerSlotMachine';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
    },
    toolbar: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
    title: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  };
});

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Box className={classes.title}>
            <Typography variant="h2">
              Whoopensocker Picture Picker
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <PicturePickerSlotMachine />
    </Box>
  );
}

export default App;
