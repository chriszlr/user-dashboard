import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

// import routes
import customerRoutes from "./routes/customer-routes.js";

// initialize express app
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));

// routes
app.use("/api/customers", customerRoutes);

// connect to database & listen to port
mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("Connected to MongoDB"))
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    })
  );
