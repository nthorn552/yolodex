import React, { Component } from "react";

import { Device } from "../reducers/devices/types";

import { Paper, Container } from "@material-ui/core";

type State = {
  targetDevice: Device;
};

const initialState: State = {
  targetDevice: null
};

class ShmacPage extends Component<object, State> {
  readonly state: State = initialState;

  render = () => {
    return <Paper>test</Paper>;
  };
}

export default ShmacPage;
