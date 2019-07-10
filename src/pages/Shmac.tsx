import React, { Component } from "react";

import { Device } from "../reducers/devices/types";

import { makeStyles, Theme, createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";

const styles = ({ spacing }: Theme) => createStyles({
  pageWrapper: {
    paddingTop: spacing(2)
  }
});

type State = {
  targetDevice: Device;
};

const initialState: State = {
  targetDevice: null
};

class ShmacPage extends Component<WithStyles<typeof styles>> {

  render = () => {
    return (
      <Container className={this.props.classes.pageWrapper}>
        <Paper>test</Paper>
      </Container>
    );
  };
}

export default withStyles(styles)(ShmacPage);
