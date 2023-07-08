import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PowerOff from "@mui/icons-material/PowerOff";
import SmartToy from "@mui/icons-material/SmartToy";
import { Link } from "react-router-dom";

function BotInBar({ host, id, phone, t_active }) {
  return (
    <Link to={"/bots/" + id}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>{t_active ? <SmartToy /> : <PowerOff />}</ListItemIcon>
          <ListItemText primary={phone.replace("593", "+593 ")} />
          
        </ListItemButton>
      </ListItem>
    </Link>
  );
}

export default BotInBar;
