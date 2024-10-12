import { response } from "express";
import User from "../model/user.model.js";
import { createAccessToken } from "../helpers/jwt.js";

export const register = async (req, res = response) => {
    const { fullname, username, email, password } = req.body;
    try {
        
        let newUser = new User({
            fullname,
            username,
            email,
            password,
        });

        const usernameFound = await User.findOne({ username: username });
        const emailFound = await User.findOne({ email: email });
        
        if (usernameFound) {
            return res.status(403).json({
                ok: false,
                error: "Username already exists, please try again"
            })
        }

        if (emailFound) {
            return res.status(403).json({
                ok: false,
                error: "Email already registered, please try again"
            })
        }

        await newUser.save();

        const token = await createAccessToken({
            username: newUser.username
        });

        res.cookie("token", token)
        res.status(201).json({
            ok: true,
            message: "User is registered.",
            user: {
                username: newUser.username,
                email: newUser.email
            }
        });

    } catch (error) {
        console.log(error)
        throw new Error("[ERROR 500] Please contact an administrator");
    }
};

export const loginUser = async (req, res = response, next) => {
    const { username, password } = req.body;

    try {
        const userFound = await User.findOne({ username: username });

        if(!userFound) {
            return res.status(404).json({
                ok: false,
                error: "User does not exists."
            })
        }

        if (userFound.password != password) {
            return res.status(403).json({
                ok: false,
                error: "Password incorrect, please check again"
            })
        }

        const token = await createAccessToken({username: userFound.username});

        res.cookie("token", token)
        res.status(200).json({
            ok: true,
            message: "Log In successful",
            user: {
                username: userFound.username
            }
        });
    } catch (error) {
        console.log(error);
        throw new Error("[ERROR 500] Please contact an administrator.");
        
    }
}

export const logoutUser = async (req, res = response, next) => {
    res.cookie("token", "", {
        expires: new Date(0)
    });
    return res.status(200).json({
        ok:true,
        message: "Logged out."
    })
}

export const profile = async (req, res = response) => {

    const userProfile = await User.findOne({username: req.user.username})

    if (!userProfile) {
        return res.status(400).json({
            ok:false,
            message: "User not found"
        })
    }

    return res.status(200).json({
        ok:true,
        message: "profile",
        user: {
            id: userProfile._id,
            fullname: userProfile.fullname,
            username: userProfile.username,
            email: userProfile.email
        }
    })
}