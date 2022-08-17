const express = require('express');
const bodyParser = require("body-parser");
const passport = require('passport');

const apiRouter = require('./src/routes/index');
const authRouter = require('./src/routes/authRoutes');
const User = require('./src/models/user.model');
const  {connect} = require('./src/config/database');
require('./src/util/auth');
const  app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use('/v1', authRouter);
app.use('/api', passport.authenticate('jwt', {session : false}), apiRouter);


app.get('/', (req, res) =>{
    res.status(200);
    res.send({
        success : true,
        message : "Successfully hitting the api",
        data : {}
    });
});

// app.use(function (err, req, res, next){
//     res.status(err.status || 500);
//     res.json({
//         success : false,
//         error : err
//     });
// });

app.listen(8000, async()=>{
    await connect();
    console.log('Mongo db connected successfully');
    console.log('Server Started Successfully');
    // let user =  await User.create({
    //     email : "abc@xyz.com",
    //     password : 12345,
    //     username : "ABC"
    // })
    // console.log(user);
});
