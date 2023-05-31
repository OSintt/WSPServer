import Bot from "../models/Bot";
import axios from "axios";
import { config } from "dotenv";

config();

const getBots = async (req, res) => {
  const bots = await Bot.find();
  res.json({ status: 200, bots });
};

const getBot = async (req, res) => {
  res.json({ status: 200, bot: req.bot });
};

const makeBotListen = async (req, res) => {
  try {
    const { bot, url } = req;
    await axios({ url: url + "/listen" });
    return res.status(201).json({
      status: 201,
      message: `El bot número ${bot.n} | ${bot.instance_id} está escuchando...`,
      bot,
    });
  } catch (e) {
    return res.status(503).json({
      status: 504,
      message: "Ocurrió un error inesperado haciendo escuchar a este bot",
      bot,
    });
  }
};

const makeBotTrain = async (req, res) => {
  const { bot, url } = req;
  await axios({ url });
  return res.status(201).json({
    status: 201,
    message: `El bot número ${bot.n} | ${bot.instance_id} está entrenando...`,
  });
};

const getBotMessages = async (req, res) => {
  const bot = await req.bot.populate("messages");
  return res.json({ status: 200, bot });
};

const configTime = async (req, res) => {
  const { key } = req;
  const { start, finish } = req.body;
  if (isNaN(start) || isNaN(finish))
    return res.status(400).json({
      status: 400,
      message: 'Los parámetros "start" y "finish" deben ser de tipo Number',
    });
  key.time = {
    start,
    finish,
  };
  await key.save();
  return res.status(201).json({ status: 201, time: key.time });
};

export {
  getBot,
  getBots,
  getBotMessages,
  configTime,
  makeBotListen,
  makeBotTrain,
};
