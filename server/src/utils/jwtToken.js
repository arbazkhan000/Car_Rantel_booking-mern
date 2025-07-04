import jwt from "jsonwebtoken";

export const generateAuthToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
};
