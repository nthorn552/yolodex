import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AppBar, Container, Tabs, Tab, Toolbar } from "@material-ui/core";

interface TabContainerProps {
  children?: React.ReactNode;
}
function TabContainer(props: TabContainerProps) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles((theme?: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.primary.main
    }
  })
);

export default function Header() {
  const classes = useStyles({});
  const [activeTab, updateTab] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    updateTab(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            The Cauldron
          </Typography>
          <Container maxWidth="sm">
            <Tabs value={activeTab} onChange={handleChange} centered>
              <Tab label="Device" />
              <Tab label="Billing" />
            </Tabs>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
