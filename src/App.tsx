import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import theme from "./MuiThemeProvider";
import Header from "./components/header/Header";
import Shmac from "./pages/Shmac";

import rootReducer from "./reducers";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { StylesContext } from "@material-ui/styles/StylesProvider";

import AppContainer from "./components/AppContainer";

const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
  return (
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Typography component="div">
              <Header />
              <AppContainer>
                <Switch>
                  <Route path="/shmac" component={Shmac} />
                  <Route path="/billing" render={() => <h3>Billing Page</h3>} />
                </Switch>
              </AppContainer>
            </Typography>
          </Router>
        </Provider>
      </MuiThemeProvider>
    </CssBaseline>
  );
};

export default App;
