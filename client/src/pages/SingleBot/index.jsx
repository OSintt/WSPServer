import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance as axios } from "../lib/axiosConfig";
import { toast } from "react-hot-toast";
import Loading from "../assets/loading.svg";
import Status from "./Status";
import { Grid, Box } from "@mui/material";
import BotInfo from "./BotInfo";
import { Item, Info } from "../lib/Item";
import Quantities from "./Quantities";
import BotActions from "./BotActions";
export function SingleBot() {
  const [bot, setBot] = useState(null);
  const [isMounted, setMounted] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    async function getBot() {
      try {
        setMounted(false);
        const { data } = await axios.get(`/bots/get-bot/${id}`);
        setBot(data.bot);
        setMounted(true);
      } catch (e) {
        toast.error(e.response.data.message);
        console.log(e);
      }
    }
    getBot();
  }, [id]);

  return (
    <div>
      {isMounted ? (
        <div>
          <h4>
            Panel del bot {bot.wsp} de {bot.celular}
          </h4>
          <div className="container">
            <Grid
              container
              spacing={0}
              direction="row"
              justifyContent={"space-between"}
            >
              <Grid item xs={10}>
                <Box sx={{ display: "flex", gap: "25px" }}>
                  <Status
                    setBot={setBot}
                    id={bot._id}
                    t_active={bot.t_active}
                  />
                  <BotInfo
                    host={bot.host}
                    device={bot.celular}
                    phone={bot.phone}
                    messages={bot.messages}
                    numbers={bot.numbers}
                    wsp={bot.wsp}
                  />
                  <Quantities messages={bot.messages} numbers={bot.messages} days={bot.days} />
                </Box>
              </Grid>
              <Grid item xs={2}>
                <BotActions _id={bot._id} wsp={bot.wsp} celular={bot.celular} />
              </Grid>
            </Grid>
          </div>
        </div>
      ) : (
        <div className="flex">
          <img src={Loading} style={{ width: "25px" }} alt="loading" />{" "}
          <h4 style={{ color: "#eee" }}>Loading...</h4>
        </div>
      )}{" "}
    </div>
  );
}
