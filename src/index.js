import express from "express";
import { PORT } from "./config.js";
import usersRoutes from "./routes/users.routes.js";
import morgan from "morgan";
import initDB from "./initDB.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(usersRoutes);

app.listen(PORT, async () => {
  await initDB();
  console.log(`Server is running on port ${PORT}`);
});
