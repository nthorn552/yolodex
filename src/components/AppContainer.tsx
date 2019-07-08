import * as React from "react";

import { Container, Theme, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme?: Theme) =>
  createStyles({
    headerSpacer: {
      ...theme.mixins.toolbar
    },
    mainContainer: {}
  })
);

const AppContainer: React.SFC = ({ children }) => {
  const classes = useStyles({});
  return (
    <Container maxWidth="lg">
      <div className={classes.headerSpacer} />
      {children}
    </Container>
  );
};

export default AppContainer;
