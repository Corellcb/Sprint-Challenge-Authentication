const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
const KnexStore = require('connect-session-knex')(session)

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');
const knex = require('../database/dbConfig')

const server = express();

const sessionConfig = {
    name: "monster",
    secret: "keep it secret, keep it safe!",
    resave: false,
    saveUninitialized: true, // related to GDPR compliance
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: false, // should be true in production
        httpOnly: true, // true means JS can't touch the cookie
    },
    // remember the new keyword
    store: new KnexStore({
        knex,
        tablename: "sessions",
        createtable: true,
        sidfieldname: "sid",
        clearInterval: 1000 * 60,
    }),
};

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);

module.exports = server;
