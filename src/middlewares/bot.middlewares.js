import Bot from "../models/Bot";
import Key from "../models/ApiKey";

import { config } from "dotenv";
config();
const botExists = async (req, res, next) => {
  const { id } = req.params;
  const bot = await Bot.findById(id).populate("messages");
  if (!bot)
    return res
      .status(404)
      .json({ status: 404, message: "No existe un bot con esa ID" });
  req.bot = bot;
  return next();
};

const validKey = async (req, res, next) => {
  const key = req.headers["api-key"];
  if (!key)
    return res.status(401).json({
      status: 401,
      message: "Debes colocar una API Key para usar nuestra API",
    });
  const verifiedKey = await Key.findOne({ key });
  if (!verifiedKey)
    return res.status(401).json({
      status: 401,
      message: "La API Key que proporcionaste es inválida",
    });
  req.key = verifiedKey;
  return next();
};

export { botExists, validKey };
