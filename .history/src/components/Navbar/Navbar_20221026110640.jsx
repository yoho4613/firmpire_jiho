import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => {}}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search...'}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button color="inherit" component={Link} to={`/profile/:id`} className={classes.linkButton} onClick={() => {}}>
                {!isMobile && <>My Movies &nbsp;</> }
                  <Avatar style={{ width: 30, height: 30}} alt="Profile" src="data:image/jpeg;base64,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" />
               
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
