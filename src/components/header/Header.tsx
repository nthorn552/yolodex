import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { AppBar, Container, Tabs, Tab, Toolbar } from "@material-ui/core";

import tabList from "./tabList";
import useStyles from './styles';

const Header = ({ location }: RouteComponentProps) => {
  const classes = useStyles({});
  const [activeTab, updateTab] = React.useState(getActiveTab(location));

  function getActiveTab(location: RouteComponentProps["location"]): string | null {
    const activeTab = tabList.find((tab) => {
      return location.pathname.startsWith(tab.route);
    });
    return activeTab ? activeTab.route : null;
  }

  function handleChange(event: React.ChangeEvent, newValue: string) {
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
              Yolodex
            </Typography>
            <Tabs value={activeTab} onChange={handleChange}>
              {tabList.map(({ label, route }) => {
                return (
                  <Tab
                    label={label}
                    component={Link}
                    to={route}
                    key={route}
                    value={route}
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
