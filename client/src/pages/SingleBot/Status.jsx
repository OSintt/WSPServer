import Box from "@mui/material/Box";
import PowerOff from "@mui/icons-material/PowerOff";
import SmartToy from "@mui/icons-material/SmartToy";
import { axiosInstance as axios } from "../lib/axiosConfig";
import { toast } from "react-hot-toast";
import { BotContext } from "../../context/BotContext";
import domain from "../../config";
import { useContext } from "react";
const Status = ({ t_active, id, setBot }) => {
  const { toggleBotState } = useContext(BotContext);

  const handleToggleState = (_id) => {
    toggleBotState(_id); 
  };

  async function turnOnBot() {
    try {
      const { data } = await axios.get(`${domain}/bots/train/${id}`);
      setBot(data.bot);
      handleToggleState(data.bot._id);
      toast.success(data.message);
    } catch (e) {
      toast.error("Ocurrió un error inesperado");
      console.log(e);
    }
  }

  return (
    <Box
      sx={{
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        cursor: "pointer",
        width: '225px'
      }}
      onClick={turnOnBot}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <h1>Estado</h1>
        <p>{t_active ? <SmartToy /> : <PowerOff />}</p>
        <p>{t_active ? "Activo" : "Inactivo"}</p>
      </div>
    </Box>
  );
};

export default Status;
