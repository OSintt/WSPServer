import Bot from "../models/Bot";
import { config } from "dotenv";

config();

const hostDict = {
  'DESKTOP-0IBCF33': 'FSL 4',
  'DESKTOP-JFIA7P7': 'FSL 1',
  'DESKTOP-ME3CRB5': 'FSL 3',
  'DESKTOP-P3DCCTC': 'FSL 6',
  'DESKTOP-S9J0A0C': 'FSL 7',
  'DESKTOP-U1J9DOB': 'FSL 2',
  'DESKTOP-VI4MIP4': 'FSL 5',
};

const getBots = async (req, res) => {
  const bots = await Bot.find().sort({ host: 1 });
  const botsWithHostNick = bots.map(bot => {
    const hostNick = hostDict[bot.host] || 'No Host';
    return { ...bot._doc, host_nick: hostNick };
  });
  res.json({ status: 200, q: bots.length, bots: botsWithHostNick });
};

const getBot = async (req, res) => {
  res.json({ status: 200, bot: req.bot });
};

const createBot = async (req, res) => {
  const { celular, phone, wsp } = req.body;
  try {
    if (!celular || !phone || !wsp)
      return res.status(400).json({
        status: 400,
        message: "Hay un error con los parámetros para crear un bot!",
      });
    const phoneExists = await Bot.findOne({ phone });
    if (phoneExists)
      return res
        .status(409)
        .json({ status: 409, message: "Ya existe un bot con ese número" });
    const bots = await Bot.find();
    const newBot = new Bot({
      celular,
      phone,
      wsp,
      instance_id: bots.length + 1,
    });
    const bot = await newBot.save();
    return res.status(201).json({ status: 201, bot });
  } catch (e) {
    return res.status(503).json({
      status: 503,
      message: "Ocurrió un error inesperado creando el bot",
    });
  }
};

const editBot = async (req, res) => {
  const { celular, wsp } = req.body;
  const { id } = req.params;
  try {
    if (!celular || !wsp)
      return res.status(400).json({
        status: 400,
        message: "Hay un error con los parámetros para editar un bot!",
      });
    const bot = await Bot.findByIdAndUpdate(id, {
      celular,
      wsp,
    });
    return res.status(201).json({ status: 201, bot });
  } catch (e) {
    console.log(e);
    return res.status(503).json({
      status: 503,
      message: "Ocurrió un error inesperado editando el bot",
    });
  }
};

const deleteBot = async (req, res) => {
  const { id } = req.params;
  try {
    await Bot.findByIdAndDelete(id);
    return res
      .status(201)
      .json({
        status: 201,
        message: "El bot con la ID " + id + " fue eliminado con éxito",
      });
  } catch (e) {
    return res.status(503).json({
      status: 503,
      message: "Ocurrió un error inesperado eliminando el bot",
    });
  }
};

const makeBotTrain = async (req, res) => {
  try {
    let { bot } = req;
    bot.t_active = !bot.t_active;
    bot = await bot.save();
    return res.status(201).json({
      status: 201,
      message: `El bot ${bot.phone} en el host ${bot.host} ${
        bot.t_active ? "" : "no"
      } está entrenando...`,
      bot,
    });
  } catch (e) {
    console.log(e);
    return res.status(503).json({ status: 503, message: "Error inesperado" });
  }
};

const getBotMessages = async (req, res) => {
  const bot = await req.bot.populate("messages");
  return res.json({
    status: 200,
    q: bot.messages.length,
    messages: bot.messages,
  });
};

export { getBot, getBots, getBotMessages, makeBotTrain, createBot, editBot, deleteBot };
