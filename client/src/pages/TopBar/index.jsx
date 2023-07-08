import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ApiKey from "./ApiKey";
import CreateBot from "./CreateBot";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BotContext } from "../../context/BotContext";
import { Info } from "../lib/Item";

export function TopBar() {
  const { botList } = useContext(BotContext);
  const [openBot, setOpenBot] = useState(false);
  const handleOpenBot = () => setOpenBot(true);
  const handleCloseBot = () => setOpenBot(false);
  return (
    <Box sx={{ flexGrow: 1, background: "none" }}>
      <AppBar>
        <Toolbar>
          <Box
            sx={{
              px: 4,
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Link to="/">OSintNet</Link>
            </Typography>
          </Box>
          <Info>{botList.length} bots registrados</Info>
          <Info>{botList.filter(b => b.t_active).length} bots activos</Info>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleOpenBot}
              variant="outlined"
              startIcon={<AddCircleIcon />}
            >
              Create Bot
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex", marginLeft: "10px" } }}>
            <ApiKey />
          </Box>
        </Toolbar>
      </AppBar>
      <CreateBot open={openBot} handleClose={handleCloseBot} />
    </Box>
  );
}
