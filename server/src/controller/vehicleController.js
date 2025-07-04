import fs from "fs";
import { Vehicle } from "../schema/vehicleSchema.js";
import { deleteImage, uploadImage } from "../utils/cloudinary.js";

export class vehicleController {
    static async getAllVehicles(req, res) {
        try {
            const vehicles = await Vehicle.find();
            if (!vehicles.length) {
                return res.status(404).json({ message: "No vehicles found" });
            }
            res.status(200).json({
                success: true,
                message: "Vehicles found",
                data: vehicles,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error fetching vehicles",
                error: error.message,
            });
        }
    }

    static async getVehicleById(req, res) {
        try {
            const vehicle = await Vehicle.findById(req.params.id);
            if (!vehicle)
                return res.status(404).json({ message: "Vehicle not found" });
            res.status(200).json({
                success: true,
                message: "Vehicle found",
                data: vehicle,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error fetching vehicle",
                error: error.message,
            });
        }
    }

    static async createVehicle(req, res) {
        try {
            const {
                brand,
                model,
                year,
                seats,
                type,
                fuelType,
                price,
                transmission,
                location,
                description,
                features,
                isAvailable,
            } = req.body;
            if (!req.file)
                return res
                    .status(400)
                    .json({ success: false, message: "No image uploaded" });

            const { url, publicId } = await uploadImage(req.file.path);
            fs.unlink(req.file.path, (err) => {
                if (err) console.error("Temp file delete error:", err);
            }); // clean up temp file

            const newVehicle = new Vehicle({
                brand,
                model,
                year,
                seats,
                type,
                fuelType,
                price,
                transmission,
                location,
                description,
                features: features || [],
                isAvailable: isAvailable !== undefined ? isAvailable : true,
                image: { url, public_id: publicId },
            });

            await newVehicle.save();
            res.status(201).json({
                success: true,
                message: "Vehicle created successfully",
                data: newVehicle,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error creating vehicle",
                error: error.message,
            });
        }
    }

    static async updateVehicle(req, res) {
        try {
            const vehicle = await Vehicle.findById(req.params.id);
            if (!vehicle)
                return res
                    .status(404)
                    .json({ success: false, message: "Vehicle not found" });

            const updatedData = { ...req.body };

            if (req.file) {
                const { url, publicId } = await uploadImage(req.file.path);
                fs.unlink(req.file.path, () => {});

                if (vehicle.image && vehicle.image.length && vehicle.image[0].public_id) {
                    await deleteImage(vehicle.image[0].public_id);
                }

                updatedData.image = { url, public_id: publicId };
            }

            const updatedVehicle = await Vehicle.findByIdAndUpdate(
                req.params.id,
                updatedData,
                { new: true, runValidators: true }
            );
            res.status(200).json({
                success: true,
                message: "Vehicle updated successfully",
                data: updatedVehicle,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error updating vehicle",
                error: error.message,
            });
        }
    }

    static async deleteVehicle(req, res) {
        const { id } = req.params;

        try {
            const vehicle = await Vehicle.findById(id);
            if (!vehicle) {
                return res
                    .status(404)
                    .json({ success: false, message: "Vehicle not found" });
            }

            // ✅ Delete image from Cloudinary
            if (vehicle.image && vehicle.image.length && vehicle.image[0].public_id) {
                try {
                    await deleteImage(vehicle.image[0].public_id);
                } catch (cloudError) {
                    console.error(
                        "Cloudinary image deletion error:",
                        cloudError
                    );
                    // Optional: you could stop here if deleting the image is critical.
                }
            }

            // ✅ Delete the MongoDB document
            await Vehicle.findByIdAndDelete(id);

            res.status(200).json({
                success: true,
                message: "Vehicle and associated image deleted successfully",
            });
        } catch (error) {
            console.error("Error deleting vehicle:", error);
            res.status(500).json({
                success: false,
                message: "Error deleting vehicle",
                error: error.message,
            });
        }
    }
}
