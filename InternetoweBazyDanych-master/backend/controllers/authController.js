import db from '../settings/db';
import cookie from 'cookie';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {secret, url} from '../settings/environments';
import {options} from '../settings/jwt';
import {doesUserExistQuery, registerUserQuery} from '../settings/queries';
const saltRounds = 10;

export default{
        async loginUser(req, res, next){
            try{
                const token = await jwt.sign({log: req.user[0].login, typ: req.user[0].type}, secret, options);
                res.setHeader('Set-Cookie', cookie.serialize('crosscountrytoken', token, {
                    httpOnly: true,
                    signed: true,
                    sameSite: true,
                    maxAge: 60 * 60 * 24 * 7,
                    path: '/'
                },
                    'Access-Control-Allow-Origin', {url},
                    'Access-Control-Allow-Credentials', 'true',
                    'Access-Control-Allow-Methods', 'GET', 'POST', 'DELETE', 'PUT',
                    'Access-Control-Allow-Headers', 'Content-Type, Set-Cookie, *'
                    ));
                res.json({
                   message: 'Zalogowano do serwisu!',
                   success: true,
                   login: req.user[0].login,
                    type: req.user[0].type,
                    loged: '1'
                });
            }catch(err) {
                console.error(err);
                res.json({
                    message: 'Wystąpił problem podczas logowania.',
                    success: false
                })
            }
        },


        async logoutUser(req, res, next){
            try{
                res.clearCookie('crosscountrytoken');
                res.json({
                    message: 'Wylogowano z serwisu!',
                    success: true,
                     loged: '0'
                 });
            }catch(err) {
                console.error(err);
                res.json({
                    message: 'Wystąpił problem podczas wylogowania.',
                    success: false
                })
            }
        },

        async registerUser(req, res, next){
        var user_type = 'biegacz';
        try {
            const {login, first_name, last_name, birth_date, pass, type} = req.body;
            if (type === "organizator"){
                user_type = type;
              }
            const user = await db.query(doesUserExistQuery, [login]);
            if(user.length == 0) {
                const hashed_pass = await bcrypt.hash(pass, saltRounds);
                await db.query(registerUserQuery, [login, first_name, last_name, birth_date, hashed_pass, user_type]);
                res.json({
                    message: 'Użytkownik został pomyślnie zarejestrowany',
                    success: true
                });
            }else {
                res.json({
                    message: 'Użytkownik o podanym loginie już istnieje.',
                    success: false
                });
            }
        }catch(err) {
            console.error(err);
            res.json({
                message: 'Błąd! Użytkownik nie został zarejestrowany.',
                success: false
            });
        }
    }
}
