import { Router } from "express";
import {
  getBot,
  getBots,
  getBotMessages,
  makeBotTrain,
  createBot,
  editBot,
  deleteBot,
} from "../controllers/bots.controllers";
import { botExists } from "../middlewares/bot.middlewares";

const router = Router();
router.get("/get-bots", getBots);
router.get("/get-bot/:id", [botExists], getBot);
router.get("/get-bot-messages", [botExists], getBotMessages);
router.get("/train/:id", [botExists], makeBotTrain);
router.post("/create-bot", createBot);
router.put("/edit-bot/:id", [botExists], editBot);
router.delete("/delete-bot/:id", [botExists], deleteBot);

module.exports = router;
