import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { User } from './model/user.js'

const APP = express()
APP.use(cors());
APP.use(express.json());
APP.use(express.urlencoded({ extended: true }));


APP.get('/:username', async (req, res) => {
    const {username} = req.params
    const currentUser = await User.findOne({ username: username });
    if (!currentUser) {
        const init = { username: username, log: { daysCompleted: 0, level: 1 } }
        const newUser = await User.create(init)
        return res.json(newUser)
    }
    return res.json(currentUser)
})

APP.post('/:id', async (req, res) => {
    console.log(req.body);
    const {id} =  req.params
    const {completed} = req.body
    // console.log();
    
let gift;
    switch (completed) {
      case 1:
        gift = 'first day'
        break;
      case 7:
        gift = 'first week'
        break;
      case 10:
        gift = '10 Day Streak'
        break;
      case 21:
        gift = '3 week Streak'
        break;
      case 30:
        gift = '30 Day Streak'
        break;
      case 42:
        gift = '6 Week Streak'
        break;
      case 60:
        gift = '60 Day Streak'
        break;
      case 70:
        gift = '10 Week Streak'
        break;
      case 84:
        gift = 'You Did It'
        break;
      default:
        gift = null
    }


    const user = await User.findById(id)
    if (gift !== null) {
        user.achievements = [...user.achievements, {achievement: gift}]
    }
    user.log.daysCompleted += 1
    await user.save()
    return res.json(user)
})


APP.listen(3030, async () => {
    ;
    console.log('connected to localhost:3030');
    await mongoose.connect('mongodb://localhost:27017/trainer');
    console.log('connected to mongo');
})