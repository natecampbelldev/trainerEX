import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
    acheivement: String,
    dateEarned: Date
})

const logSchema = new mongoose.Schema({
    _id: false,
    daysCompleted: Number,
    level: Number,
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    log: logSchema,
    achievements: [achievementSchema]
})

export const User = mongoose.model('user_datas', userSchema)