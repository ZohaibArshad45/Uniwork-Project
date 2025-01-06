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
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
        res.cookie('access_token', token, {httpOnly : true}).status(200).json(validUser)

        
    } catch (error) {
        next(error); // Forward error to the error handler
    }
};