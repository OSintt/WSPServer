import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-hot-toast";

export default function FormDialog({ handleClose, open }) {
  const [apiKey, setApiKey] = React.useState([]);
  const listenApiKey = (e) => {
    setApiKey(e.target.value);
  };
  function changeApiKey() {
    localStorage.setItem('api-key', apiKey);
    toast.success('Se guardó con éxito tu API Key');
    handleClose();
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Introduce your API Key</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="api-key"
            label="API Key"
            type="text"
            fullWidth
            variant="outlined"
            onChange={listenApiKey}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={changeApiKey}>Enter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
