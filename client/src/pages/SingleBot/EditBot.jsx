import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { axiosInstance as axios } from "../lib/axiosConfig";
import { useState } from "react";
import { toast } from "react-hot-toast";
function EditBot({ setOpen, wsp_v, celular_n, _id, open }) {
  const [wsp, setWSP] = useState(wsp_v);
  const [celular, setCelular] = useState(celular_n)

  const handleClose = () => setOpen(false);
  

  const listenWSP = (e) => setWSP(e.target.value);
  const listenCelular = (e) => setCelular(e.target.value);

  const editBot = async () => {
    try {
      await axios.put("/bots/edit-bot/" + _id, {
        wsp,
        celular,
      });
      handleClose();
      return toast.success("El bot se ha editado con éxito");
    } catch (e) {
      return toast.error(e.response.data.message);
    }
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar bot</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="celular"
            label="Dispositivo"
            type="text"
            fullWidth
            variant="outlined"
            onChange={listenCelular}
          />
          <TextField
            autoFocus
            margin="dense"
            id="wsp"
            label="WSP Version"
            type="text"
            fullWidth
            variant="outlined"
            onChange={listenWSP}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={editBot}>Editar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditBot;
