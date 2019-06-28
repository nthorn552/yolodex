import * as React from "react";

import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import theme from "./MuiThemeProvider";
import Header from "./components/header/Header";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Typography component="div">
        <Header />
        Beginning of App!
      </Typography>
    </CssBaseline>
  </ThemeProvider>
);

export default App;
