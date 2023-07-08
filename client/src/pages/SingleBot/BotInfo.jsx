import React from "react";
import { Box } from "@mui/material";
import { Item, Info } from "../lib/Item";

function BotInfo({ host, phone, device, wsp }) {
  return (
    <Box>
      <Item>
        <Box>
          <Info>
            <span>
              <b>Host:</b> {host}
            </span>
          </Info>
          <Info>
            <span>
              <b>Número:</b> +{phone}
            </span>
          </Info>
          <Info>
            <span>
              <b>Dispositivo:</b> {device}
            </span>
          </Info>
          <Info>
            <span>
              <b>WSP Version:</b> {wsp ? wsp : "Desconocido"}
            </span>
          </Info>
        </Box>
      </Item>
    </Box>
  );
}

export default BotInfo;
