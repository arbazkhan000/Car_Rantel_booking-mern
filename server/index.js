import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();

const corsOptions = {
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

import userRoutes from "./src/routes/userRoutes.js";
import vehicleRoutes from "./src/routes/vehicleRoutes.js";

app.use("/api/auth", userRoutes);
app.use("/api/vehicles", vehicleRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Car Booking Service ");
});

mongoose
    .connect(process.env.DATABASE_URI)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running in ${port}`);
});

console.log("Hello Server");
