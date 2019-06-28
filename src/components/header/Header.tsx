import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import styles from "./Header.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            The Cauldron
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
