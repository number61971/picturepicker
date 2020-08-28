import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SlotMachine from './slotMachine/SlotMachine';
import { paths } from './picturePickerImagePaths';

const useStyles = makeStyles((_theme) => {
  return {
    picture: {
      height: 468,
      objectFit: 'contain',
      width: 700,
    }
  };
});

function PicturePickerSlotMachine() {
  const classes = useStyles();

  const picture = (path) => {
    return (
      <div>
        <img alt="" className={classes.picture} src={path} />
      </div>
    );
  };

  const imgReelProps = {
    id: 'images-reel',
    items: paths.map(path => picture(path))
  };

  const slotMachineProps = {
    slotReels: [
      imgReelProps,
    ],
  }

  return (
    <Fragment>
      <SlotMachine { ...slotMachineProps } />
    </Fragment>
  );
}

export default PicturePickerSlotMachine;
