import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    username:{
        type: String,
        required: true,
        unique:true,
    },
    email:{
        type: String,
        required: true,
        unique:true,
    },
    // for password (like if any body hack database the password is not showing) in database we need 
    // npm i bcryptjs
    password:{
        type: String,
        required: true,
    }
}, {timestamps: true});



const User = mongoose.model('User',userSchema);

export default User