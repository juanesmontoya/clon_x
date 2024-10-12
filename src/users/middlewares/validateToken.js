import jwt from 'jsonwebtoken';

const {JWT_SECRET} = process.env;

export const authRequired = (req, res, next) => {
    
    const {token} = req.cookies;

    if (!token) {
        return res.status(401).json({
            ok: false,
            message: "No token found, access denied."
        });
    };

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({
            ok:false,
            message: "Invalid Token."
        });

        req.user = user;
        next();
    });
};