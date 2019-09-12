import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import theme from "./MuiThemeProvider";
import Header from "./components/header/Header";

import { MuiThemeProvider } from "@material-ui/core/styles";

import store from './store';

import Contacts from "./pages/contacts/Contacts";
import AppContainer from "./components/AppContainer";

const App = () => {
  return (
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Typography component="div">
              <Header />
              <AppContainer>
                <Contacts />
              </AppContainer>
            </Typography>
          </Router>
        </Provider>
      </MuiThemeProvider>
    </CssBaseline >
  );
};

export default App;
