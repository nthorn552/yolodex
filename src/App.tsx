import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import theme from "./MuiThemeProvider";
import Header from "./components/header/Header";
import Shmac from "./pages/Shmac";

import rootReducer from "./reducers";
import { Container, Theme, makeStyles, createStyles } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { StylesContext } from "@material-ui/styles/StylesProvider";

import AppContainer from "./components/AppContainer";

const store = createStore(rootReducer);

const App = () => {
  return (
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Typography component="div">
              <Header />
              {/* <div /> */}
              <AppContainer />
              {/* <Switch>
                  <Route path="/shmac" component={Shmac} />
                  <Route
                    path="/billing"
                    render={() => (
                      <h3>Billing Page</h3>
                    )}
                  />
                </Switch> */}
            </Typography>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    </CssBaseline>
  );
};

export default App;
