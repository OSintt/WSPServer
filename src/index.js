import "./db";
import app from "./app";
import { createBots } from "./lib/createData";

const main = () => {
  app.listen(app.get("port"), () =>
    console.log("Server running on port", app.get("port"))
  );
  //createBots();
};

main();
