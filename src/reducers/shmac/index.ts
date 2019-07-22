import { Device, ADD_DEVICE, UPDATE_DEVICE, DeviceActionTypes } from "./types";

export interface State {
  devices: Device[];
}

const initialState: State = {
  devices: []
};

function deviceReducer(state = initialState, action: DeviceActionTypes) {
  switch (action.type) {
    case ADD_DEVICE: {
    }
    case UPDATE_DEVICE: {
    }
  }
  return state;
}

export default deviceReducer;
