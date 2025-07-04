import { User } from "../schema/userSchema.js";
import { generateAuthToken } from "../utils/jwtToken.js";

export class userController {
    static async create(req, res) {
        try {
            const { name, email, password } = req.body;

            // Validate user input
            if (!name || !email || !password) {
                return res.status(400).json({
                    success: false,
                    message: "Please provide all required fields",
                });
            }

            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(409).json({
                    success: false,
                    message: "User already exists",
                });
            }

            // Create new user
            const newUser = await User.create({ name, email, password });
            res.status(201).json({
                success: true,
                message: "User created successfully",
                user: newUser,
            });
        } catch (error) {
            console.error("Error creating user:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }
    static async login(req, res) {
        try {
            const { email, password } = req.body;

            // Validate user input
            if (!email || !password) {
                return res.status(400).json({
                    success: false,
                    message: "Please provide email and password",
                });
            }

            // Find user by email
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                });
            }

            // Check password
            const isPasswordValid = await user.comparePassword(password);
            if (!isPasswordValid) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid password",
                });
            }

            // Generate token (assuming you have a function to generate JWT)
            // const token = user.generateAuthToken();

            res.status(200).json({
                success: true,
                message: "Login successful",
                data: user,

                token: await generateAuthToken({
                    id: user._id,
                    email: user.email,
                    role: user.role ,
                }),
            });
        } catch (error) {
            console.error("Error logging in user:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }
    static async profile(req, res) {
        try {
            // Assuming user is authenticated and user ID is available in req.user
            const userId = req.user.id;

            // Fetch user profile
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                });
            }

            res.status(200).json({
                success: true,
                message: "User profile fetched successfully",
                data: user,
            });
        } catch (error) {
            console.error("Error fetching user profile:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }
}
