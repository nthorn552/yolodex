export interface AddDevicePayload {
  deviceId: string;
}

export function addDevice(payload: AddDevicePayload) {
  return { type: "ADD_DEVICE", payload };
}
