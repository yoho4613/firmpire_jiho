import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography, Button, Box } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

import { userSelector } from "../../features/auth";

// Get access to profile name or id from redux state
// display in the profile component

const Profile = () => {
  const { user } = useSelector(userSelector);
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          LogOut &nbsp; <ExitToApp />
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
