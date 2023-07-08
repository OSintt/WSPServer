import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-hot-toast";
import { axiosInstance as axios } from "../lib/axiosConfig";

export default function FormDialog({ handleClose, open }) {
  const [phone, setPhone] = useState([]);
  const [wsp, setWSP] = useState([]);
  const [celular, setCelular] = useState([]);

  const listenPhone = (e) => setPhone(e.target.value);
  const listenWSP = (e) => setWSP(e.target.value);
  const listenCelular = (e) => setCelular(e.target.value);
  
  async function createBot() {
    try {
      await axios.put("/bots/create-bot", {
        wsp,
        phone,
        celular,
      });
      toast.success("Se guardó con éxito tu bot");
      handleClose();
    } catch (e) {
      return toast.error(e.response.data.message);
    }
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Introduce your new bot's data</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="celular"
            label="Número celular"
            type="text"
            fullWidth
            variant="outlined"
            onChange={listenCelular}
          />
          <TextField
            autoFocus
            margin="dense"
            id="api-key"
            label="Whatsapp Version"
            type="text"
            fullWidth
            variant="outlined"
            onChange={listenWSP}
          />
          <TextField
            autoFocus
            margin="dense"
            id="api-key"
            label="Dispositivo"
            type="text"
            fullWidth
            variant="outlined"
            onChange={listenPhone}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createBot}>Enter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
