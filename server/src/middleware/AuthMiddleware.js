import jwt from "jsonwebtoken";

const AuthMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No token provided, please login",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Token verification failed:", error);
        return res.status(403).json({
            success: false,
            message: "Invalid token",
        });
    }
};

const isAdmin = (req, res, next) => {

   

    
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        return res.status(403).json({
            success: false,
            message: "Access denied, admin only",
        });
    }
};

export { AuthMiddleware, isAdmin };
