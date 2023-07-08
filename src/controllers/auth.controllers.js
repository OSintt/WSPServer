const me = (req, res) => {
  const { key } = req;
  return res.json({ status: 200, key });
};

const configTime = async (req, res) => {
  const { key } = req;
  const {
    start = key.start,
    finish = key.finish,
    interval = key.interval,
  } = req.body;
  if (isNaN(start) || isNaN(finish) || isNaN(interval))
    return res.status(400).json({
      status: 400,
      message:
        'Los parámetros "start", "finish" e "interval" deben ser de tipo Number',
    });

  key.time = {
    start,
    finish,
    interval,
  };
  await key.save();
  return res.status(201).json({ status: 201, time: key.time });
};

export { me, configTime };
