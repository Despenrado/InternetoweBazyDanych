import express from 'express';
import {port, secret, url} from './settings/environments';
import cors from 'cors';
import bodyParser from 'body-parser';
import auth from './routes/auth';
import organizer from './routes/organizer';
import homepage from './routes/homepage';
import profile from './routes/profile';
import passport from './settings/passport';

const app = express();

app.use(cors({
    origin: {url},
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeader: ['Content-Type', 'Set-Cookie', '*']
    
}));

app.use(bodyParser.json({type: 'application/json'}));

passport();

app.use('/api', auth());

app.use('/organizer', organizer());

app.use('/profile', profile());

app.use('/', homepage())

const server = app.listen(port, ()=> console.log(`Serwer działa na porcie ${port}!`));