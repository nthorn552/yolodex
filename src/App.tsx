import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import theme from "./MuiThemeProvider";
import Header from "./components/header/Header";
import Shmac from "./pages/Shmac";

import rootReducer from "./reducers";

const store = createStore(rootReducer);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Provider store={store}>
        <BrowserRouter>
          <Typography component="div">
            <Header />
            Beginning of App!
            <Route path="/shmac" component={Shmac} />
            <Route />
          </Typography>
        </BrowserRouter>
      </Provider>
    </CssBaseline>
  </ThemeProvider>
);

export default App;
