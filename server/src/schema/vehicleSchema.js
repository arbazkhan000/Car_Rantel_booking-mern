import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
    {
        brand: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            enum: [
                "SUV",
                "Sedan",
                "Hatchback",
                "Convertible",
                "Coupe",
                "Wagon",
            ],
            required: true,
        },
        seats: {
            type: Number,
            required: true,
            default: 2,
        },
        fuelType: {
            type: String,
            enum: ["Hybrid", "Petrol", "Diesel", "Electric"],
            default: "Petrol",
            required: true,
        },
        transmission: {
            type: String,
            enum: ["Automatic", "Manual", "Semi-Automatic"],
            default: "Automatic",
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        features: [
            {
                type: String, // e.g., Bluetooth, GPS, Heated Seats
            },
        ],
        image: [
            {
                url: {
                    type: String,
                    required: true,
                },
                public_id: {
                    type: String,
                    required: true,
                },
            },
        ],
        isAvailable: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Vehicle = mongoose.model("Vehicle", vehicleSchema);
