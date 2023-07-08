import React from "react";
import { Item, Info } from "../lib/Item";
import { Box } from "@mui/material";
function Quantities({ numbers, messages, days }) {
  return (
    <div>
      <Box sx={{ display: "grid", alignContent: "space-between" }}>
        <Item>
          <Info>
            <span>
              <b>Número de mensajes recibidos:</b> <br />
              {messages.length}
            </span>
          </Info>
          <Info>
            <span>
              <b>Número de números asignados:</b> <br />
              {numbers.length}
            </span>
          </Info>
        </Item>
      </Box>
      <Box sx={{ my: 2 }}>
        <Item>
          <Info>
            <span>
              <b>Días entrenando: </b>{days}
            </span>
          </Info>
        </Item>
      </Box>
    </div>
  );
}

export default Quantities;
