import React, { Fragment } from 'react';
import SlotMachine from './slotMachine/SlotMachine';

function PicturePickerSlotMachine() {
  const imgReelProps = {
    id: 'images-reel',
    items: ['images','go','here']
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
