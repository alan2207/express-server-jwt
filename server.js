const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { port } = require("./src/config");
const router = require("./src/router");

const app = express();

app.use(morgan("combined"));
app.use(cors());
app.enable("trust proxy");
app.use(express.json({ type: "*/*" }));

router(app);

app.listen(port, () => {
  console.log(`Server started on port  + ${port}`);
});
