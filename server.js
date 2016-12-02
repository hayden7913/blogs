'use strict'

const express = require('express');
const app = express();
const bp = require('body-parser');
const blogRouter = require('./blogRouter')


//const jsonParser = bp.json();
app.use(bp.json());
app.use('/blogs', blogRouter)


const server = app.listen(3000, () => {
	console.log('Listening');
});

module.exports = server; 