import Bot from "../models/Bot";

const createBots = async () => {
  try {
    const newBots = [
      {
        instance_id: "1101828353",
        url: "http://192.168.1.128:3000",
      },
      {
        instance_id: "1101828352",
        url: "https://192.168.1.105:3001",
      },
      {
        instance_id: "1101828354",
        url: "https://192.168.1.106:3000",
      },
      {
        instance_id: "1101824750",
        url: "https://192.168.1.144:3001",
      },
      {
        instance_id: "1101825853",
        url: "https://192.168.1.144:3000",
      },
      {
        instance_id: "1101826192",
        url: "https://192.168.1.105:3000",
      },
      {
        instance_id: "1101828339",
        url: "http://192.168.1.124:3001",
      },
      {
        instance_id: "1101828340",
        url: "http://192.168.1.127:3000",
      },
      {
        instance_id: "1101828341",
        url: "http://192.168.1.124:3000",
      },
    ];
    console.log(newBots.length);
    newBots.forEach(async (bot) => {
      const botToEdit = await Bot.findOne({ instance_id: bot.instance_id });
      if (botToEdit) {
        botToEdit.url = bot.url;
        await botToEdit.save();
        console.log('guardado');
      }
    });
  } catch (e) {
    console.log(e);
  }
};

export { createBots };
