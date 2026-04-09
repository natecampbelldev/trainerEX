import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
    acheivement: String,
    dateEarned: Date
})

const logSchema = new mongoose.Schema({
    daysCompleted: Number,
    level: Number,
    achievements: [achievementSchema]
})

const userSchema = new mongoose.Schema({
username: String,
password: String,
log: logSchema
})

export const User = mongoose.model(userSchema, 'user_data')