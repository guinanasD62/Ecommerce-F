// import mongoose, { Schema } from "mongoose";
const mongoose = require('mongoose');
  
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter name"],
        unique: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: [true, "Please enter email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
    },
    
    img: {
        type: String,    
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        min: 8,
    },
    address: {
        type: String,
    },
},{
    timestamps: true,
});

export const User = mongoose.models.User || mongoose.model("User", userSchema); 
