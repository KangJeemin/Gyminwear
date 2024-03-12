import { atom } from 'recoil';

export const writeClick = atom({
    key: 'writeClick', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });

