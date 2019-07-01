import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import theme from "./MuiThemeProvider";
import Header from "./components/header/Header";

import rootReducer from "./reducers";

const store = createStore(rootReducer);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Provider store={store}>
        <Typography component="div">
          <Header />
          Beginning of App!
        </Typography>
      </Provider>
    </CssBaseline>
  </ThemeProvider>
);

export default App;
