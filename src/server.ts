import dotenv from "dotenv";
import { init } from "./index.js";
dotenv.config();

const port = process.env.PORT || 3000;
init().listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
