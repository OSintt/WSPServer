import {
  getPhones,
  getPhonesToCheck,
  getMessages,
  getMessagesFromPhone,
} from "../controllers/phones.controllers";
import { Router } from "express";

const router = Router();
router.get("/get-phone", getPhones);
router.get("/get-unchecked", getPhonesToCheck);
router.get("/messages", getMessages);
router.get("/messages-from/:id", getMessagesFromPhone);

module.exports = router;
