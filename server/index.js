import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());

const MongoUrl =
  "mongodb+srv://FullStackChatApp:%400075FullStackChatApp%24@cluster0.sx09t.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(MongoUrl, { useNewUrlParser: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running at Port ${PORT} `))
  )
  .catch((error) => console.log(error.message));
