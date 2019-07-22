export type Device = {
  id: string;
  uid: string;
  creationDate: 0;
  deleted: boolean;
  description: string;
  deviceClass: "device";
  intIpAddress: string;
  lastLoggedInUser: string;
  online: boolean;
  operatingSystem: string;
  siteName: string;
  siteUid: string;
};

export const ADD_DEVICE = "ADD_DEVICE";
export const UPDATE_DEVICE = "UPDATE_DEVICE";

interface AddDeviceAction {
  type: typeof ADD_DEVICE;
  payload: Device;
}

interface UpdateDeviceAction {
  type: typeof UPDATE_DEVICE;
  payload: Device;
}

export type DeviceActionTypes = AddDeviceAction | UpdateDeviceAction;
