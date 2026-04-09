import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const APP = express()
APP.use(cors());
APP.use(express.json());
APP.use(express.urlencoded({ extended: true }));

APP.get('/', ()=>{})
APP.get('/:id', ()=>{})
APP.post('/:id', ()=>{})


APP.listen(3030, async () => {;
    console.log('connected to localhost:3030');
    await mongoose.connect('mongodb://localhost:27017/trainer');
    console.log('connected to mongo');
})