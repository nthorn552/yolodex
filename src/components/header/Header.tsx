import React from "react";
import PropTypes from "prop-types";
import { MemoryRouter as Router } from "react-router";
import { Link, LinkProps } from "react-router-dom";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  AppBar,
  Container,
  Tabs,
  Tab,
  Toolbar,
  ButtonBase
} from "@material-ui/core";

interface TabContainerProps {
  children?: React.ReactNode;
}
function TabContainer(props: TabContainerProps) {
  return <Typography component="div">{props.children}</Typography>;
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

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

const LinkRoute = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link innerRef={ref as any} {...props} />
);

const Header = () => {
  const classes = useStyles({});
  const [activeTab, updateTab] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    updateTab(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.headerTitle}
          >
            The Cauldron
          </Typography>
          <Router>
            <Tabs value={activeTab} onChange={handleChange}>
              <ButtonBase component={LinkRoute} to="/shmac">
                <Tab label="SHMAC" />
              </ButtonBase>
              <ButtonBase component={LinkRoute} to="/billing">
                <Tab label="Billing" />
              </ButtonBase>
            </Tabs>
          </Router>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
