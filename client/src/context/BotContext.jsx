import { createContext, useState } from "react";
export const BotContext = createContext();
import { axiosInstance as axios } from "../pages/lib/axiosConfig";
import { toast } from "react-hot-toast";
export const BotProvider = ({ children }) => {
  const [botList, setBotList] = useState([]);
  async function getBots() {
    try {
      const { data } = await axios.get(`/bots/get-bots`);
      setBotList(data.bots);
    } catch (e) {
      toast.error("Ha ocurrido un error obteniendo la lista de bots");
      console.log(e)
    }
  }
  const toggleBotState = (botId) => {
    setBotList((prevList) =>
      prevList.map((bot) =>
        bot.id === botId ? { ...bot, t_active: !bot.t_active } : bot
      )
    );
  };

  return (
    <BotContext.Provider value={{ botList, toggleBotState, getBots }}>
      {children}
    </BotContext.Provider>
  );
};
