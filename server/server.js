const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");
const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`The server is listening: http://127.0.0.1:${port}`)
);
