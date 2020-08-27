import React from 'react';
import { shallow } from 'enzyme';
import PicturePickerSlotMachine from './PicturePickerSlotMachine';
import SlotMachine from './slotMachine/SlotMachine';

describe('PicturePickerSlotMachine', () => {
  it('renders a slot machine with the expected props', () => {
    const wrapper = shallow(<PicturePickerSlotMachine />);
    const slotMachine = wrapper.find(SlotMachine);
    expect(slotMachine.length).toEqual(1);

    const componentProps = slotMachine.props();
    const slotReels = componentProps.slotReels;
    expect(slotReels.length).toEqual(1);

    const slotReelIds = slotReels.map(sr => sr.id);
    expect(slotReelIds).toEqual(['images-reel']);

    expect(slotReels[0].items.length > 0).toBeTruthy();
  });
});
