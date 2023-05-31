import { Router } from "express";
import {
  getBot,
  getBots,
  getBotMessages,
  configTime,
  makeBotListen,
  makeBotTrain,
} from "../controllers/bots.controllers";
import { botExists } from "../middlewares/bot.middlewares";

const router = Router();
router.get("/get-bots", getBots);
router.get("/get-bot/:id", [botExists], getBot);
router.get('/get-bot-messages', [botExists], getBotMessages);
router.put('/time', configTime);
router.get('/listen/:id', [botExists], makeBotListen);
router.get('/train/:id', [botExists], makeBotTrain);

module.exports = router;
