// this will handle getting json web token for WebAuthentication

// Bring in express routers because routes are going to be in different locations

const express = require('express');
const router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// @route  GET api/auth
// @desc 	 Test route
// @access Public (Need token if Private route with Auth Middleware)

router.get('/', (req, res) => res.send('User route'));