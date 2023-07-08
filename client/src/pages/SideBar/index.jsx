import { useEffect, useContext } from "react";
import BotInBar from "./BotInBar";
import { Box, Toolbar, List, Divider, Typography } from "@mui/material";
import { BotContext } from "../../context/BotContext";
import ComputerIcon from "@mui/icons-material/Computer";

export function Navbar() {
  const { botList, getBots } = useContext(BotContext);

  useEffect(() => {
    getBots();
  }, []);

  const renderedList = botList.map(({ host, host_nick, t_active, phone, _id }, i) => {
    const isFirstElement = i === 0;
    const isDifferentHost = host !== botList[i - 1]?.host;

    const botElement = (
      <BotInBar
        key={_id}
        phone={phone}
        t_active={t_active}
        id={_id}
      />
    );
    const dividerElement = (
      <Box>
        <Divider />
        <Typography align="center" fontWeight="bold">
          <Box
            sx={{
              p: '10px',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ComputerIcon />
            <span style={{ marginLeft: "15px" }}>
              {host_nick}
            </span>
          </Box>
        </Typography>
        <Divider /> {botElement}
      </Box>
    );

    return isFirstElement || isDifferentHost ? dividerElement : botElement;
  });

  return (
    <div>
      <Box
        sx={{
          width: { sm: 250 },
          position: "fixed",
          flexShrink: { sm: 0 },
          overflow: "auto",
          height: "100vh",
          borderRight: '1px solid #333'
        }}
        aria-label="mailbox folders"
      >
        <Toolbar />
        <List>{renderedList}</List>
      </Box>
    </div>
  );
}
