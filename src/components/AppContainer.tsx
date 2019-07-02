import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Shmac from "../pages/Shmac";

import { Container, Theme, makeStyles, createStyles } from "@material-ui/core";

const AppContainer = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/shmac" component={Shmac} />
          <Route path="/billing" render={() => <h3>Billing Page</h3>} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default AppContainer;
