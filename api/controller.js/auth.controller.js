import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';
// import { errorHandler } from "../utils/error.js";


export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })

    try {
        await newUser.save()
        res.status(201).json("User Create Successfully")
    } catch (error) {
        next(error)
        // next(errorHandler(550, 'error from the function'))
    }
};

// ---------------------LOGIN-----------------------
export const login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Check if user exists in the database
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found'));

        // Check if the provided password matches the hashed password
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong Information'));

        // Create JWT token
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        res.cookie('access_token', token, { httpOnly: true }).status(200).json(validUser)


    } catch (error) {
        next(error); // Forward error to the error handler
    }
};

export const google = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password: pass, ...rest } = user._doc;
            res
                .cookie('access_token', token, { httpOnly: true })
                .status(200)
                .json(rest);

        } else {
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            const newUser = new User({ username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4), email: req.body.email, password: hashedPassword, avatar: req.body.photo });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const { password: pass, ...rest } = newUser._doc;
            res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);

        }
    } catch (error) {
        next(error)
    }
}