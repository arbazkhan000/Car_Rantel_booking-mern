import express from "express";
import { vehicleController } from "../controller/vehicleController.js";
import { AuthMiddleware, isAdmin } from "../middleware/AuthMiddleware.js";
import upload from "../utils/multer.js";

const router = express.Router();

router.get("/", vehicleController.getAllVehicles);
router.get("/:id", vehicleController.getVehicleById);
router.post(
    "/",
    AuthMiddleware,
    isAdmin,
    upload.single("image"),
    vehicleController.createVehicle
);
router.put(
    "/:id",
    AuthMiddleware,
    isAdmin,
    upload.single("image"),
    vehicleController.updateVehicle
);
router.delete("/:id", AuthMiddleware, isAdmin, vehicleController.deleteVehicle);

export default router;
