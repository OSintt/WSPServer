import React from "react";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SetApiKey from "./SetApiKey";
import SetTime from "./SetTime";
function ApiKey() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openTime, setOpenTime] = React.useState(false);

  const handleOpenApiKey = () => {
    setOpen(true);
    handleClose();
  };
  
  const handleOpenTime = () => {
    setOpenTime(true);
    handleClose();
  }

  const handleCloseApiKey = () => setOpen(false);
  
  const handleCloseTime = () => setOpenTime(false);
  
  const handleMenu = (e) => setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOpenApiKey}>Set API Key</MenuItem>
        <MenuItem onClick={handleOpenTime}>Set Time</MenuItem>
      </Menu>
      <SetApiKey open={open} handleClose={handleCloseApiKey} />
      <SetTime open={openTime} handleClose={handleCloseTime} />
    </div>
  );
}

export default ApiKey;
