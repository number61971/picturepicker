import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AppBar from '@material-ui/core/AppBar';
import PicturePickerSlotMachine from './PicturePickerSlotMachine';

let wrapper;

describe('App', () => {
  it('renders a header in the top app bar', () => {
    wrapper = shallow(<App />);
    const appBar = wrapper.find(AppBar);
    expect(appBar.text()).toMatch('Picture Picker');
  });

  it('renders the story seeds slot machine', () => {
    wrapper = shallow(<App />);
    const slotMachine = wrapper.find(PicturePickerSlotMachine);
    expect(slotMachine.length).toEqual(1);
  });
});
