const express = require("express");
const auth = require("./routes/auth");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.use(auth);

app.listen(2000, () => {
  console.log("Listening on 2000");
});
