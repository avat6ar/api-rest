import express from "express";
import studentsRouter from "./routes/students.js";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(helmet());

const port = process.env.PORT || 5000;

app.get("/", (requset, response) => {
  response.send("Hello");
});

app.use("/students", studentsRouter);

app.listen(port, () => console.log(`The server is running on port ${port}`));
