import { useState, useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-hot-toast";
import { axiosInstance as axios } from "../lib/axiosConfig";
import { UserContext } from "../../context/UserContext";
export default function FormDialog({ handleClose, open }) {
  const { user } = useContext(UserContext);
  const [start, setStart] = useState(null);
  const [finish, setFinish] = useState(null);
  const [interval, setinterval] = useState(null);

  useEffect(() => {
    setStart(user.time.start);
    setFinish(user.time.finish);
    setinterval(user.time.interval);
  }, [user]);
  const listenStart = (e) => {
    setStart(e.target.value);
  };
  const listenFinish = (e) => {
    setFinish(e.target.value);
  };
  const listenInterval = (e) => {
    setinterval(e.target.value);
  };

  async function changeTime() {
    await axios.put("/auth/time", {
      finish,
      start,
      interval,
    });
    toast.success("Tu rango de tiempo se guardó con éxito");
    handleClose();
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Introduce your new Time Interval</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="api-key"
            label="Iniciar a las..."
            type="number"
            variant="outlined"
            value={start}
            onChange={listenStart}
          />
          <TextField
            autoFocus
            margin="dense"
            id="api-key"
            label="Terminar a las..."
            type="number"
            value={finish}
            variant="outlined"
            onChange={listenFinish}
            sx={{marginLeft: 2}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="api-key"
            label="Entrenar cada..."
            type="number"
            value={interval}
            variant="outlined"
            onChange={listenInterval}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={changeTime}>Enter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
