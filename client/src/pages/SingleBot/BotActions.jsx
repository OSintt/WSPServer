import EditIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Box } from "@mui/material";
import { useState } from "react";
import EditBot from "./EditBot";
import {
  DialogActions,
  Dialog,
  Button,
  DialogTitle,
} from "@mui/material";
import { axiosInstance as axios } from "../lib/axiosConfig";
import { toast } from "react-hot-toast";
function DeleteDialog({ open, setOpen, celular, _id }) {
  const handleClose = () => setOpen(false);
  const deletePhone = async () => {
    try {
      await axios.delete("/bots/delete-bot/" + _id);
      handleClose();
      return toast.success("Bot eliminado con éxito");
    } catch (error) {
      toast.error("Ocurrió un error eliminando el teléfono " + celular);
    }
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Desea eliminar el teléfono {celular} permanentemente?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={deletePhone}>Eliminar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
function BotActions({ wsp, celular, _id }) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleOpenDelete = () => setOpenDelete(true);

  return (
    <Box
      sx={{
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        cursor: "pointer",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <IconButton onClick={handleOpenEdit}>
          <EditIcon />
        </IconButton>
      </div>

      <div className="container" style={{ textAlign: "center" }}>
        <IconButton onClick={handleOpenDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
      <DeleteDialog
        open={openDelete}
        setOpen={setOpenDelete}
        _id={_id}
        celular={celular}
      />
      <EditBot
        setOpen={setOpenEdit}
        open={openEdit}
        wsp_v={wsp}
        _id={_id}
        celular_n={celular}
      />
    </Box>
  );
}

export default BotActions;
