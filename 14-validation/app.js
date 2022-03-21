import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();
app.use(express.json());

app.post(
  "/users",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ min: 2 })
      .withMessage("Name must be longer than 2 letters"),
    body("age").isInt().withMessage("Age is required"),
    body("email").isEmail().withMessage("E-mail is required").normalizeEmail(),
    body("job.name").notEmpty(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    console.log(req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    res.sendStatus(201);
  }
);

app.get(
  "/:email",
  param("email").isEmail().withMessage("E-mail is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    res.send("💌");
  }
);

app.listen(8080);
