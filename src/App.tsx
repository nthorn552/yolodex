import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import theme from "./MuiThemeProvider";
import Header from "./components/header/Header";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { StylesContext } from "@material-ui/styles/StylesProvider";

import store from './store';
import { getCards } from './store/cards/actions';

import AppContainer from "./components/AppContainer";
import { Button } from "@material-ui/core";

function testHandler(event: React.MouseEvent): void {
  store.dispatch(getCards());
}

const App = () => {
  return (
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Typography component="div">
              <Header />
              <AppContainer>
                Dashboard
                <Button onClick={testHandler}>test</Button>
              </AppContainer>
            </Typography>
          </Router>
        </Provider>
      </MuiThemeProvider>
    </CssBaseline>
  );
};

export default App;
