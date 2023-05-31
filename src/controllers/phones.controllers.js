import Message from "../models/Message";
import Phone from "../models/Number";

const getPhones = async (req, res) => {
  const phones = await Phone.find();
  res.json({ status: 200, phones });
};

const getPhonesToCheck = async (req, res) => {
  const phones = await Phone.find({ eliminar: true });
  res.json({ status: 200, phones });
};

const getMessages = async (req, res) => {
  const messages = await Message.find();
  res.json({ status: 200, messages });
};

const getMessagesFromPhone = async (req, res) => {
  const { phone } = req.params;
  if (!phone)
    return res
      .status(400)
      .json({ status: 400, message: "No colocaste el parámetro phone" });
  const messages = await Message.find({ author: phone });
  return res.json({ status: 200, messages });
};

export { getPhones, getPhonesToCheck, getMessages, getMessagesFromPhone };
