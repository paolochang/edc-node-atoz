import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

const app = express();
const corsOptions = {
  origin: ["http://127.0.0.1:5500"],
  optionsSuccessStatus: 200,
  credentials: true, // Access-Control-Allow-Credentials: true
};

app.use(express.json());
app.use(cookieParser()); // cookie-parser
app.use(morgan("combined")); // loger
app.use(cors(corsOptions));
app.use(helmet()); // 보안 header

app.get("/", (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  console.log(req.cookies.candy);
  res.send("Welcome!");
});

app.listen(8080);
