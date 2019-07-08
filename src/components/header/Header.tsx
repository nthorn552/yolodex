import React from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AppBar, Container, Tabs, Tab, Toolbar } from "@material-ui/core";

import tabList from "./tabList";

const useStyles = makeStyles((theme?: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.primary.main
    },
    headerTitle: {
      paddingRight: theme.spacing(3)
    }
  })
);

const Header = () => {
  const classes = useStyles({});
  const [activeTab, updateTab] = React.useState();

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    updateTab(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar color="primary">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.headerTitle}
            >
              The Cauldron
            </Typography>
            <Tabs value={activeTab} onChange={handleChange}>
              {tabList.map(({ label, route }, tabNumber) => {
                return (
                  <Tab
                    label={label}
                    component={Link}
                    to={route}
                    key={tabNumber}
                    disableRipple
                  />
                );
              })}
            </Tabs>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
