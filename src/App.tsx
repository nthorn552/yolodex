import * as React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import './App.css';
import Header from "./components/header/Header";

const App = () => (
  <CssBaseline>
    <Container maxWidth="lg">
      <Typography
        component="div"
        style={{ backgroundColor: "#164780", height: "100vh" }}
      >
        <Header></Header>
        Beginning of App!
      </Typography>
    </Container>
  </CssBaseline>
);

export default App;
