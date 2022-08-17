const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();


router.post('/signup',
    passport.authenticate('signup', { session: false }),
    async (req, res) => {
        res.status(200).json({
            success: true,
            message: 'SignUp Successfull',
            data: {
                user: req.user
            }
        });
    }
);

router.post(
    '/login',
    async (req, res, next) =>{
        console.log('signing in');
        passport.authenticate(
            'login',
            async (err, user, info) =>{
                console.log('info' , info);
                console.log('user', user);
                console.log('err',err);

                try{
                    if(err || !user){
                        const error = new Error('Something went wrong');
                        return next(error);
                    }
                    req.login(
                        user,
                        {session : false},
                        async (err) =>{
                            if(err) return next(err);
                            const body = {_id : user._id, email : user.email};
                            const token = jwt.sign({user : body}, 'TOP_SECRET');
                            return res.status(200).json({
                                token,
                                success : true,
                                message : 'Successfully signed in',
                                user : user
                            });
                        }
                    )
                }catch(err){
                    console.log(err);
                    return next(err);
                }
            }
        )(req, res, next);
    }
)


module.exports = router;