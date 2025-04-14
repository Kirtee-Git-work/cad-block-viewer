const express = require('express');
const user = require('./MOCK_DATA.json')
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/user')


//Middleware Pluging
app.use(express.urlencoded({ extended: false }));

const port = 8000;



//connection

mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1").then(() => console.log('Mongo Db connected')).catch((err) => 
console.log("Mongo Error", err))

app.use('/user', userRouter);


app.listen(port, () => console.log(`Server Started ${port}`));