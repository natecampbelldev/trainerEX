import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { User } from './model/user.js'

const APP = express()
APP.use(cors());
APP.use(express.json());
APP.use(express.urlencoded({ extended: true }));


APP.get('/:username', async (req, res) => {
    const user = req.params.username
    const currentUser = await User.findOne({ username: user });
    if (!currentUser) {
        const init = { username: user, log: { daysCompleted: 0, level: 1 } }
        const newUser = await User.create(init)
        return res.json(newUser)
    }
    return res.json(currentUser)
})
APP.post('/:username', (req, res) => {
    console.log(req.body);
    // get _id, find by id, update info, save, return new obj

    // return res.json()
})


APP.listen(3030, async () => {
    ;
    console.log('connected to localhost:3030');
    await mongoose.connect('mongodb://localhost:27017/trainer');
    console.log('connected to mongo');
})